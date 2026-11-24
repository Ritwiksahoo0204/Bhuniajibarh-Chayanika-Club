import type { EnquiryInput } from "@/lib/validations";

async function appendToGoogleSheet(data: EnquiryInput, submittedAt: string) {
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (!webhookUrl) return;

    try {
        const res = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                kind: data.kind,
                name: data.name,
                email: data.email,
                phone: data.phone || "Not provided",
                village: data.village || "Not provided",
                interest: data.interest || "Not specified",
                message: data.message || "No additional message.",
                submittedAt,
            }),
        });

        if (!res.ok) {
            console.error("[Google Sheet Sync Error]", res.status, await res.text());
        } else {
            console.log("[Google Sheet Synced Successfully]");
        }
    } catch (err) {
        console.error("[Google Sheet Sync Failed]", err);
    }
}

export async function deliverEnquiry(data: EnquiryInput) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "club.bhuniajibarhchayanika@gmail.com";
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const subjectMap = {
        membership: `[Chayanika Club] New Membership Request: ${data.name}`,
        volunteer: `[Chayanika Club] New Volunteer Offer: ${data.name}`,
        contact: `[Chayanika Club] New Message from: ${data.name}`,
    };

    const subject = subjectMap[data.kind] || `[Chayanika Club] New Website Enquiry from: ${data.name}`;

    const textLines = [
        `You have received a new enquiry from the Bhuniajibarh Chayanika Club website:`,
        ``,
        `Type: ${data.kind.toUpperCase()}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Village / Area: ${data.village || "Not provided"}`,
        `Interest / Area: ${data.interest || "Not specified"}`,
        ``,
        `Message:`,
        `${data.message || "No additional message."}`,
        ``,
        `Submitted at: ${submittedAt}`,
    ];

    const textContent = textLines.join("\n");

    // Always trigger Google Sheets sync in parallel (if configured)
    const sheetPromise = appendToGoogleSheet(data, submittedAt);

    // If Resend API key is configured, send the real email!
    if (apiKey) {
        try {
            const emailPromise = fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    from: "Chayanika Club Website <onboarding@resend.dev>",
                    to: [toEmail],
                    reply_to: data.email,
                    subject: subject,
                    text: textContent,
                }),
            }).then(async (response) => {
                if (!response.ok) {
                    const errBody = await response.text();
                    console.error("[Email Delivery Error]", response.status, errBody);
                    throw new Error("Failed to send email");
                }
                console.log("[Email Delivered Successfully to]", toEmail);
            });

            await Promise.all([emailPromise, sheetPromise]);
            return;
        } catch (err) {
            console.error("[deliverEnquiry Failed]", err);
            // Even if email fails, wait for sheet
            await sheetPromise;
            throw err;
        }
    }

    await sheetPromise;

    // Fallback: If no API key yet, log cleanly to terminal so you never lose submissions in dev
    console.log("------------------------------------------");
    console.log("📩 NEW FORM SUBMISSION RECEIVED:");
    console.log(textContent);
    console.log("------------------------------------------");
}

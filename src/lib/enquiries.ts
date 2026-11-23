import type { EnquiryInput } from "@/lib/validations";

export async function deliverEnquiry(data: EnquiryInput) {
    // TEMPORARY (step 8): only prints to the terminal. Step 9 sends email and stores it.
    console.log(
        "[enquiry received]",
        JSON.stringify({ ...data, receivedAt: new Date().toISOString() }, null, 2),
    );
}
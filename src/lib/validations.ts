import { z } from "zod";

export const enquiryKinds = ["contact", "membership", "volunteer"] as const;
export type EnquiryKind = (typeof enquiryKinds)[number];

const text = (max: number) => z.string().trim().max(max, "tooLong");

export const enquirySchema = z
    .object({
        kind: z.enum(enquiryKinds),
        name: z.string().trim().min(2, "name").max(100, "tooLong"),
        email: z.string().trim().max(200, "tooLong").email("email"),
        phone: text(20).refine((v) => v === "" || /^[+\d\s()-]{7,20}$/.test(v), "phone"),
        village: text(100),
        interest: text(50),
        message: text(2000),
        consent: z.boolean(),
        website: z.string().max(0, "spam"), // honeypot: real people leave this empty
    })
    .superRefine((d, ctx) => {
        if (d.kind === "contact" && d.message.length < 10) {
            ctx.addIssue({ code: "custom", path: ["message"], message: "messageShort" });
        }
        if (d.kind !== "contact" && !d.consent) {
            ctx.addIssue({ code: "custom", path: ["consent"], message: "consent" });
        }
    });

export type EnquiryInput = z.infer<typeof enquirySchema>;
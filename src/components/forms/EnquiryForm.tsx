"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { enquirySchema, type EnquiryInput, type EnquiryKind } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Field";
import { Select } from "@/components/ui/Select";
import { Alert } from "@/components/ui/Alert";

const options = {
    contact: null,
    membership: {
        ns: "interests",
        keys: ["cultural", "festival", "youth", "service", "sports", "learning", "notSure"],
    },
    volunteer: {
        ns: "areas",
        keys: ["events", "teaching", "photography", "fundraising", "outreach", "other"],
    },
} as const;

export function EnquiryForm({ kind }: { kind: EnquiryKind }) {
    const t = useTranslations("forms");
    const uid = useId();
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorKey, setErrorKey] = useState<"generic" | "rateLimited">("generic");

    const defaults: EnquiryInput = {
        kind,
        name: "",
        email: "",
        phone: "",
        village: "",
        interest: "",
        message: "",
        consent: false,
        website: "",
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<EnquiryInput>({
        resolver: zodResolver(enquirySchema),
        defaultValues: defaults,
    });

    const err = (code?: string) => (code ? t(`errors.${code}`) : undefined);
    const opt = options[kind];
    const optional = t("optional");

    async function onSubmit(values: EnquiryInput) {
        setStatus("idle");
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 15_000);
        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                signal: controller.signal,
            });
            if (res.ok) {
                setStatus("success");
                reset(defaults);
                return;
            }
            setErrorKey(res.status === 429 ? "rateLimited" : "generic");
            setStatus("error");
        } catch {
            setErrorKey("generic");
            setStatus("error");
        } finally {
            clearTimeout(timer);
        }
    }

    if (status === "success") {
        return (
            <div className="space-y-4">
                <Alert variant="success">
                    <p className="font-semibold">{t("successTitle")}</p>
                    <p>{t(`success.${kind}`)}</p>
                </Alert>
                <Button variant="soft" onClick={() => setStatus("idle")}>
                    {t("sendAnother")}
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative space-y-5">
            <input type="hidden" {...register("kind")} />

            <Input
                label={t("labels.name")}
                autoComplete="name"
                error={err(errors.name?.message)}
                {...register("name")}
            />
            <Input
                label={t("labels.email")}
                type="email"
                autoComplete="email"
                error={err(errors.email?.message)}
                {...register("email")}
            />
            <Input
                label={`${t("labels.phone")} ${optional}`}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                error={err(errors.phone?.message)}
                {...register("phone")}
            />

            {kind === "membership" && (
                <Input
                    label={`${t("labels.village")} ${optional}`}
                    autoComplete="address-level2"
                    error={err(errors.village?.message)}
                    {...register("village")}
                />
            )}

            {opt && (
                <Select
                    label={`${kind === "volunteer" ? t("labels.area") : t("labels.interest")} ${optional}`}
                    error={err(errors.interest?.message)}
                    {...register("interest")}
                >
                    <option value="">{t("choose")}</option>
                    {opt.keys.map((k) => (
                        <option key={k} value={k}>
                            {t(`${opt.ns}.${k}`)}
                        </option>
                    ))}
                </Select>
            )}

            <Textarea
                label={kind === "contact" ? t("labels.message") : `${t("labels.message")} ${optional}`}
                error={err(errors.message?.message)}
                {...register("message")}
            />

            {kind !== "contact" && (
                <div>
                    <label className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            className="mt-1 h-5 w-5 shrink-0 accent-terracotta-600"
                            aria-invalid={!!errors.consent}
                            aria-describedby={errors.consent ? `${uid}-consent` : undefined}
                            {...register("consent")}
                        />
                        <span>{t("consentText")}</span>
                    </label>
                    {errors.consent && (
                        <p id={`${uid}-consent`} className="field-hint">
                            {err(errors.consent.message)}
                        </p>
                    )}
                </div>
            )}

            {/* Honeypot: hidden from people, tempting to bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                    Website
                    <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                </label>
            </div>

            {status === "error" && <Alert variant="error">{t(`errors.${errorKey}`)}</Alert>}

            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        {t("sending")}
                    </>
                ) : (
                    t(`submit.${kind}`)
                )}
            </Button>
        </form>
    );
}
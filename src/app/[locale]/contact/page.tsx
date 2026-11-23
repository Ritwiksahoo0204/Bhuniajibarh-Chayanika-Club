import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { club } from "@/data/club";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "contactPage" });
    return { title: t("title"), description: t("description") };
}

const socialNames = {
    facebook: "Facebook",
    instagram: "Instagram",
    youtube: "YouTube",
    whatsapp: "WhatsApp",
} as const;

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "contactPage" });
    const footer = await getTranslations({ locale, namespace: "footer" });

    const { email, phone } = club.contact;
    const socials = (Object.keys(socialNames) as (keyof typeof socialNames)[])
        .map((key) => ({ key, name: socialNames[key], url: club.social[key] }))
        .filter((s) => s.url);

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${club.address.village} ${club.address.block} ${club.address.district} ${club.address.postalCode}`,
    )}`;

    return (
        <main>
            <PageHeader title={t("title")} description={t("description")} />

            <Section>
                <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">{t("detailsTitle")}</h2>

                        <ul className="card space-y-5">
                            <li className="flex gap-3">
                                <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                                <div>
                                    <p className="font-semibold text-forest-900">{t("addressLabel")}</p>
                                    <p>{footer("address")}</p>
                                </div>
                            </li>
                            {email && (
                                <li className="flex gap-3">
                                    <Mail className="mt-1 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-forest-900">{t("emailLabel")}</p>
                                        <a href={`mailto:${email}`} className="hover:underline">
                                            {email}
                                        </a>
                                    </div>
                                </li>
                            )}
                            {phone && (
                                <li className="flex gap-3">
                                    <Phone className="mt-1 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden />
                                    <div>
                                        <p className="font-semibold text-forest-900">{t("phoneLabel")}</p>
                                        <a href={`tel:${phone}`} className="hover:underline">
                                            {phone}
                                        </a>
                                    </div>
                                </li>
                            )}
                            {!email && !phone && <li>{t("contactSoon")}</li>}
                        </ul>

                        {socials.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold">{t("followTitle")}</h3>
                                <ul className="mt-3 flex flex-wrap gap-2">
                                    {socials.map((s) => (
                                        <li key={s.key}>
                                            <a
                                                href={s.url!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-secondary"
                                            >
                                                {s.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div>
                            <h3 className="text-xl font-semibold">{t("mapTitle")}</h3>
                            {club.mapEmbedUrl && (
                                <iframe
                                    src={club.mapEmbedUrl}
                                    title={t("mapTitle")}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="mt-3 aspect-[4/3] w-full rounded-3xl border-0 shadow-soft"
                                />
                            )}
                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-soft mt-3"
                            >
                                <MapPin className="h-5 w-5" aria-hidden />
                                {t("openMap")}
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">{t("formTitle")}</h2>
                        <p className="mt-2 mb-6">{t("formBody")}</p>
                        <div className="card">
                            <EnquiryForm kind="contact" />
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
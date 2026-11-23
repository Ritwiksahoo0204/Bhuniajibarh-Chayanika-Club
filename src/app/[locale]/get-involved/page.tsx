import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Handshake, HeartHandshake, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "getInvolvedPage" });
    return { title: t("title"), description: t("description") };
}

export default async function GetInvolvedPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "getInvolvedPage" });

    const ways = [
        { key: "member", href: "#membership", Icon: Users },
        { key: "volunteer", href: "#volunteer", Icon: HeartHandshake },
        { key: "collaborate", href: "#collaborate", Icon: Handshake },
    ] as const;
    const faq = ["1", "2", "3"] as const;

    return (
        <main>
            <PageHeader title={t("title")} description={t("description")} />

            <Section>
                <Container className="space-y-10">
                    <SectionHeading title={t("waysTitle")} align="center" />
                    <div className="grid gap-5 md:grid-cols-3">
                        {ways.map(({ key, href, Icon }) => (
                            <div key={key} className="card card-hover flex flex-col">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach-100">
                                    <Icon className="h-6 w-6 text-terracotta-600" aria-hidden />
                                </span>
                                <h3 className="mt-4 text-xl font-semibold">{t(`ways.${key}.title`)}</h3>
                                <p className="mt-2 mb-5">{t(`ways.${key}.body`)}</p>
                                <a href={href} className="btn btn-soft mt-auto self-start">
                                    {t(`ways.${key}.cta`)}
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section tone="sage" id="membership" className="scroll-mt-16">
                <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <SectionHeading title={t("membershipTitle")} description={t("membershipBody")} />
                    <div className="card">
                        <EnquiryForm kind="membership" />
                    </div>
                </Container>
            </Section>

            <Section tone="peach" id="volunteer" className="scroll-mt-16">
                <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <SectionHeading title={t("volunteerTitle")} description={t("volunteerBody")} />
                    <div className="card">
                        <EnquiryForm kind="volunteer" />
                    </div>
                </Container>
            </Section>

            <Section id="collaborate" className="scroll-mt-16">
                <Container>
                    <div className="card flex flex-col items-start gap-5 bg-sage-100 md:flex-row md:items-center md:justify-between md:p-10">
                        <SectionHeading title={t("collaborateTitle")} description={t("collaborateBody")} />
                        <ButtonLink href="/contact">{t("ways.collaborate.cta")}</ButtonLink>
                    </div>
                </Container>
            </Section>

            <Section tone="sage">
                <Container className="max-w-3xl space-y-8">
                    <SectionHeading title={t("faqTitle")} />
                    <div className="space-y-3">
                        {faq.map((n) => (
                            <details key={n} className="card !p-0">
                                <summary className="flex min-h-14 cursor-pointer items-center px-6 font-semibold text-forest-900">
                                    {t(`faq.q${n}`)}
                                </summary>
                                <p className="px-6 pb-5">{t(`faq.a${n}`)}</p>
                            </details>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
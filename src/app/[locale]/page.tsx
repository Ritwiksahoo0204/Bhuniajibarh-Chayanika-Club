import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("test");
  const other = locale === "en" ? "bn" : "en";

  return (
    <main className="container-page section space-y-4">
      <span className="chip">Step 4 test page</span>
      <h1 className="text-4xl font-semibold">{t("heading")}</h1>
      <p>{t("body")}</p>
      <p className="text-sm">
        locale = <strong>{locale}</strong>
      </p>
      <Link href="/" locale={other} className="btn btn-primary">
        {t("switch")}
      </Link>
      <div>
        <Link href="/content-preview" className="btn btn-secondary">
          Content preview
        </Link>
      </div>
    </main>
  );
}
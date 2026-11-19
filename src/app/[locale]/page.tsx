import { getTranslations, setRequestLocale } from "next-intl/server";
import { getUpcomingEvents } from "@/lib/content";
import type { Locale } from "@/types";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Field";
import { Alert } from "@/components/ui/Alert";
import { EventCard } from "@/components/events/EventCard";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  setRequestLocale(raw);
  const locale = raw as Locale;
  const t = await getTranslations("test");
  const events = getUpcomingEvents().slice(0, 3);

  return (
    <main>
      <Section>
        <Container className="space-y-6">
          <Badge>Step 5 preview</Badge>
          <SectionHeading title={t("heading")} description={t("body")} />
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/about">Primary link</ButtonLink>
            <ButtonLink href="/events" variant="secondary">Secondary link</ButtonLink>
            <Button variant="soft">Soft button</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Container>
      </Section>

      <Section tone="sage">
        <Container className="space-y-8">
          <SectionHeading eyebrow="Events" title="Event cards" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.id} event={e} locale={locale} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="peach">
        <Container className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-4">
            <Input label="Your name" placeholder="Enter your name" />
            <Input label="Email" defaultValue="not-an-email" error="Please enter a valid email address." />
            <Textarea label="Message" hint="Tell us how you would like to take part." />
          </Card>
          <div className="space-y-4">
            <Alert variant="success">Thank you! Your message has been sent.</Alert>
            <Alert variant="error">Something went wrong. Please try again.</Alert>
          </div>
        </Container>
      </Section>
    </main>
  );
}
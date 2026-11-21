import { Container } from "./Container";

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <section className="bg-sage-50 pt-12 pb-10 md:pt-16 md:pb-14">
      <Container>
        <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-lg">{description}</p>}
      </Container>
    </section>
  );
}
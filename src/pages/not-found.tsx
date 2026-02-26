import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, LinkButton } from "@/components/ui";

export function NotFound() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="404"
          title="Page not found"
          description="The page you’re looking for doesn’t exist (or was moved)."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton to="/" variant="primary">
            Back to home <ArrowRight className="size-4" />
          </LinkButton>
          <LinkButton to="/contact" variant="secondary">
            Contact <ArrowRight className="size-4" />
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}

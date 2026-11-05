import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <Section id="test">
      <Button to="/projects/z-cat">상세보기</Button>
      <Button variant="secondary" href="https://github.com">
        GitHub
      </Button>
      <Button disabled>상세보기</Button>
      <Badge>React</Badge>
    </Section>
  );
}

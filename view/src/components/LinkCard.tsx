import { Link } from "@solidjs/router";
import Card, { CardProps } from "./Card";

export default function LinkCard({ href, title, children: text }: LinkCardProps) {
  return (
    <Link href={href}>
      <Card title={title}>{text}</Card>
    </Link>
  );
}

interface LinkCardProps extends CardProps {
  href: string;
}

export default function Card({ title, children: text }: CardProps) {
  return (
    <article class="card">
      <h3 class="small-heading">{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export interface CardProps {
  title: string;
  children?: string;
}

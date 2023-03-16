import { onMount } from "solid-js";

export default function Card({ title, children: text }: CardProps) {
  let card: HTMLElement;

  onMount(() => unhidingObserver.observe(card))
  
  return (
    <article class="card hide" ref={card}>
      <h3 class="small-heading">{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export interface CardProps {
  title: string;
  children?: string;
}

const unhidingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.remove("hide");
  });
});

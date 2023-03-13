import { For } from "solid-js";
import { RecipeContent } from "../../lib/MagazineContent.types";

export default function RecipeView(content: RecipeContent) {
  return (
    <section>
      <h1>{content.title}</h1>
      <ol>
        <For each={content.steps}>{(step) => <li>{step}</li>}</For>
      </ol>
    </section>
  );
}

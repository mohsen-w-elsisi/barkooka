import { RiddleContent } from "../../lib/MagazineContent.types";

export default function RiddleView(content: RiddleContent) {
  return (
    <section>
      <h1>{content.title}</h1>
      <p>answer of previos riddle: {content.oldAnswer}</p>
      <p>new riddle: {content.newRiddle}</p>
      <hr />
    </section>
  );
}

import { createSignal, For } from "solid-js";
import { getMagazineIndex } from "../lib/getMagzine";
import { MagazineIndexEntry } from "../lib/MagazineContent.types";
import LinkCard from "./LinkCard";

export default function RecentMagazineCards() {
  const [recent4Magazines, updateRecent4Magazines] = createSignal<
    MagazineIndexEntry[]
  >([]);

  get4mostRecentMagazines().then((v) => updateRecent4Magazines(v));

  return (
    <For each={recent4Magazines()}>
      {(i) => (
        <LinkCard href={"week/" + i.number} title={i.title}>
          {i.discribtion}
        </LinkCard>
      )}
    </For>
  );
}

async function get4mostRecentMagazines() {
  const magazineIndex = await getMagazineIndex();

  magazineIndex.reverse();
  magazineIndex.splice(4);

  return magazineIndex;
}

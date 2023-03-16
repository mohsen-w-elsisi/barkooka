import { createSignal, For } from "solid-js";
import CardGrid from "../components/CardGrid";
import MagazinePreviewCard from "../components/MagazinePreviewCard";
import { getMagazineIndex } from "../lib/getMagzine";
import { MagazineIndexEntry } from "../lib/MagazineContent.types";

export default function MagazineList() {
  const [magazineIndex, updateMagazineIndex] = createSignal<
    MagazineIndexEntry[]
  >([]);

  getMagazineIndex().then((v) => updateMagazineIndex(v));

  return (
    <CardGrid>
      <For each={magazineIndex()}>{MagazinePreviewCard}</For>
    </CardGrid>
  );
}

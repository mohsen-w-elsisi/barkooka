import { MagazineIndexEntry } from "../lib/MagazineContent.types";
import LinkCard from "./LinkCard";

export default function MagazinePreviewCard({
  number,
  title,
  discribtion,
}: MagazineIndexEntry) {
  return (
    <LinkCard href={"week/" + number} title={title}>
      {discribtion}
    </LinkCard>
  );
}

import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import renderContentViews from "../components/content_views/renderContentViews";
import { getMagazineNumber } from "../lib/getMagzine";

export default function Magazine() {
  const { week } = useParams();
  const [contents, updateContents] = createSignal(null);

  getMagazineNumber(week).then((magazine) =>
    updateContents(renderContentViews(magazine.content))
  );

  return contents();
}

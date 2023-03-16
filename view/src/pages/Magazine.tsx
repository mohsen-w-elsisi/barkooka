import { useParams } from "@solidjs/router";
import { createSignal } from "solid-js";
import { getMagazineNumber } from "../lib/getMagzine";
import renderContentViews from "../components/content_views/renderContentViews";

export default function Magazine() {
  const { week } = useParams();
  const [contents, updateContents] = createSignal(null);

  getMagazineNumber(week).then((magazine) =>
    updateContents(renderContentViews(magazine.content))
  );

  return <>{contents()}</>;
}

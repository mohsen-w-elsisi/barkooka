import { useParams } from "@solidjs/router";
import getMagazineNumber from "../lib/getMagzine";

export default function Magazine() {
  const { week } = useParams();

  getMagazineNumber(week).then(v => console.log(v))

  return <h1>{week}</h1>;
}

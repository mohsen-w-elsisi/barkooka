import { parse as parseYaml } from "yaml";
import { Magazine, MagazineIndexEntry } from "./MagazineContent.types";

const CONTENT_SERVER_URL = "https://barkooka-content.web.app/";
const MAGAZINE_INDEX_URL = CONTENT_SERVER_URL + "index.yaml";

export async function getMagazineIndex() {
  const fetchedMagazineIndexResponse = await fetch(MAGAZINE_INDEX_URL);
  const magazineIndexAsYamlString = await fetchedMagazineIndexResponse.text();
  const magasineIndexAsJson: MagazineIndexEntry[] = parseYaml(
    magazineIndexAsYamlString
  );

  return magasineIndexAsJson;
}

type MagazineNumber = number | string;

function magazineUrlNumber(number: MagazineNumber) {
  return CONTENT_SERVER_URL + number + ".yaml";
}

function fetchMagazineNumber(number: MagazineNumber) {
  return fetch(magazineUrlNumber(number));
}

export async function getMagazineNumber(number: MagazineNumber) {
  const fetchedMagazineResponse = await fetchMagazineNumber(number);
  const magazienAsYamlString = await fetchedMagazineResponse.text();
  const magazineAsJson: Magazine = parseYaml(magazienAsYamlString);

  return magazineAsJson;
}

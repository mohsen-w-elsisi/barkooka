import { parse as parseYaml } from "yaml";
import { Magazine } from "./MagazineContent.types";

const CONTENT_SERVER_URL = "https://barkooka-content.web.app/";

type MagazineNumber = number | string;

function magazineUrlNumber(number: MagazineNumber) {
  return CONTENT_SERVER_URL + number + ".yaml";
}

function fetchMagazineNumber(number: MagazineNumber) {
  return fetch(magazineUrlNumber(number));
}

export default async function getMagazineNumber(number: MagazineNumber) {
  const fetchedMagazineResponse = await fetchMagazineNumber(number);
  const magazienAsYamlString = await fetchedMagazineResponse.text();
  const magazineAsJson: Magazine = parseYaml(magazienAsYamlString);

  return magazineAsJson;
}

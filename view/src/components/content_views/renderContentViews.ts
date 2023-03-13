import { Content } from "../../lib/MagazineContent.types";
import contentTypeToViewMap from "./contentTypeToViewMap";

function getViewOf(content: Content) {
  return contentTypeToViewMap[content.type];
}

function renderContentView(content: Content) {
  const contentView = getViewOf(content);
  return contentView(content);
}

export default function renderContentViews(contentList: Content[]) {
  return contentList.map(renderContentView);
}

export interface MagazineIndexEntry {
  number: number;
  title: string;
  discribtion: string;
}

export interface Magazine {
  title: string;
  week: number;
  content: Content[];
}

export interface Content {
  type: string;
  title: string;
}

export interface RiddleContent extends Content {
  type: "riddle";
  oldAnswer: string;
  newRiddle: string;
}

export interface RecipeContent extends Content {
  type: "recipe";
  steps: string[];
}

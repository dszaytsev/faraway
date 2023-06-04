import { Character } from "../../data/entities"

const TITLE_KEY_MAPPING: Record<keyof Character, string> = {
  birth_year: "Birth Year",
  eye_color: "Eye Color",
  films: "Films",
  gender: "Gender",
  hair_color: "Hair Color",
  height: "Height",
  homeworld: "Homeworld",
  id: "Id",
  mass: "Mass",
  name: "Name",
  skin_color: "Skin Color",
  species: "Species",
  starships: "Starships",
  url: "Url",
  vehicles: "Vehicles",
}

export function getFieldTitleByKey(key: keyof Character): string {
  return TITLE_KEY_MAPPING[key]
}

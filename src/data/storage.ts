import { Character } from "./entities"

import * as charactersApi from "../api/characters"
import { GetListParams } from "../shared/types"

export type FilterName = string
export type FilterValue = any

export type Filter = Record<FilterName, FilterValue>

const LOCAL_STORAGE_KEY = "app.characters.storage"

const STUB: Character = {
  name: "Luke",
  birth_year: "asdf",
  eye_color: "asdfasfas",
  films: [],
  gender: "male",
  hair_color: "asdf",
  height: "213",
  homeworld: "asdf",
  url: "",
  mass: "23",
  skin_color: "asdf",
  species: [],
  starships: [],
  vehicles: [],
}

export async function getCharacters(params: GetListParams): Promise<{
  result: Character[]
  count: number
}> {
  const result = await charactersApi.getCharacters(params)

  return result
}

export async function getCharacter(): Promise<Character> {
  await Promise.resolve()

  return STUB
}

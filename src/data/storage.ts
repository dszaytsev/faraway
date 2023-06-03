import { Character } from "./entities"

export type Pagination = {
  page: number
  perPage: number
}

export type FilterName = string
export type FilterValue = any

export type Filter = Record<FilterName, FilterValue>

export type GetCharactersParams = {
  filter: Filter
  pagination: Pagination
  search: string
}

const STUB: Character = {
  name: "Luke",
  birthYear: "asdf",
  eyeColor: "asdfasfas",
  films: [],
  gender: "male",
  hairColor: "asdf",
  height: 213,
  homeworld: "asdf",
  id: "",
  mass: 23,
  skinColor: "asdf",
  species: [],
  starships: [],
  vehicles: [],
}

export async function getCharacters({
  filter,
  pagination,
  search,
}: GetCharactersParams): Promise<Character[]> {
  await Promise.resolve()

  const random = Math.floor(Math.random() * 10) + 1

  let result = []

  for (let i = 0; i < random; i++) {
    result.push({ ...STUB })
  }

  return result
}

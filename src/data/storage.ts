import { Character } from "./entities"

export type Pagination = {
  currentPage: number
  perPage: number
  pageCount: number
}

export type FilterName = string
export type FilterValue = any

export type Filter = Record<FilterName, FilterValue>

export type GetCharactersParams = {
  filter: Filter
  pagination: Pagination
  search: string
}

export async function getCharacters({
  filter,
  pagination,
  search,
}: GetCharactersParams): Promise<Character[]> {
  await Promise.resolve()

  return [
    {
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
    },
  ]
}

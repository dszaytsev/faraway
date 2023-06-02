import { Character } from "../../data/entities"
import { Pagination, Filter } from "../../data/storage"

export type CharacterListState = {
  state: "loading" | "success" | "error"
  characters: Character[]
}

export const CHARACTER_LIST_INITIAL_STATE: CharacterListState = {
  state: "loading",
  characters: [],
}

export type FetchParams = {
  search: string
  pagination: Pagination
  filter: Filter
}

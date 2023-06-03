import { Character } from "../../data/entities"
import { RouteState } from "../routeState/routeState"

export type CharacterListState = {
  state: "loading" | "success" | "error"
  totalCharacters: number
  characters: Character[]
}

export const CHARACTER_LIST_INITIAL_STATE: CharacterListState = {
  state: "loading",
  totalCharacters: 0,
  characters: [],
}

export type FetchParams = RouteState

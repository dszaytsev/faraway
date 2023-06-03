import { Character } from "../../data/entities"

export type CharacterDetailsState =
  | { state: "loading" | "error"; character: undefined }
  | {
      state: "success" | "characterEditing" | "characterUpdating"
      character: Character
    }

export const CHARACTER_DETAILS_INITIAL_STATE: CharacterDetailsState = {
  state: "error",
  character: undefined,
}

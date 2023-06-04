import { Character } from "../../data/entities"

export type CharacterDetailsState =
  | { state: "loading" | "error"; character: undefined }
  | {
      state: SuccessState
      character: Character
    }

export type SuccessState = "success" | "characterEditing" | "characterUpdating"

export const CHARACTER_DETAILS_INITIAL_STATE: CharacterDetailsState = {
  state: "error",
  character: undefined,
}

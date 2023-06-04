import { characterDetailsSlice, fetchCharacter } from "./characterDetailsSlice"

export const characterDetailsReducer = characterDetailsSlice.reducer
export const characterDetailsActions = characterDetailsSlice.actions

export { fetchCharacter }

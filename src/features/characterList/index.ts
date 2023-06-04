import { characterListSlice, fetchCharacters } from "./characterListSlice"

export const characterListReducer = characterListSlice.reducer
export const characterListActions = characterListSlice.actions

export { fetchCharacters }

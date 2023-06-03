import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { characterListReducer } from "../features/characterList"
import { characterDetailsReducer } from "../features/characterDetails"

export const store = configureStore({
  reducer: {
    characterList: characterListReducer,
    characterDetails: characterDetailsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

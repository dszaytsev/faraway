import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import {
  CHARACTER_DETAILS_INITIAL_STATE,
  SuccessState,
} from "./characterDetails"
import { getCharacter, setCharacter } from "../../data/storage"
import { Character } from "../../data/entities"

export const characterDetailsSlice = createSlice({
  name: "characterDetails",
  initialState: CHARACTER_DETAILS_INITIAL_STATE,
  reducers: {
    changeState(state, { payload }: PayloadAction<SuccessState>) {
      state.state = payload
    },

    destroy() {
      return CHARACTER_DETAILS_INITIAL_STATE
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCharacter.pending, (state) => {
      state.state = "loading"
    })

    builder.addCase(fetchCharacter.fulfilled, (state, { payload }) => {
      state.state = "success"
      state.character = payload
    })

    builder.addCase(fetchCharacter.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })

    builder.addCase(updateCharacter.pending, (state) => {
      state.state = "characterUpdating"
    })

    builder.addCase(updateCharacter.fulfilled, (state, payload) => {
      state.state = "success"
      state.character = payload.payload
    })

    builder.addCase(updateCharacter.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })
  },
})

export const fetchCharacter = createAsyncThunk(
  "characterDetails/fetchCharacter",
  (characterId: string) => {
    return getCharacter(characterId)
  },
)

export const updateCharacter = createAsyncThunk(
  "characterDetails/updateCharacter",
  async (character: Character) => {
    await setCharacter(character)

    return character
  },
)

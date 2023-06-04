import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import {
  CHARACTER_DETAILS_INITIAL_STATE,
  SuccessState,
} from "./characterDetails"
import { getCharacter } from "../../data/storage"

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
      state.state = "error"
    })
  },
})

export const fetchCharacter = createAsyncThunk(
  "characterDetails/fetchUsers",
  (characterId: string) => {
    return getCharacter(characterId)
  },
)

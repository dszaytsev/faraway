import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { CHARACTER_LIST_INITIAL_STATE } from "./characterList"
import { GetCharactersParams, getCharacters } from "../../data/storage"

export const characterListSlice = createSlice({
  name: "characterList",
  initialState: CHARACTER_LIST_INITIAL_STATE,
  reducers: {
    destroy() {
      return CHARACTER_LIST_INITIAL_STATE
    },
  },

  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.state = "loading"
    })

    builder.addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      state.characters = payload
      state.state = "success"
    })

    builder.addCase(fetchCharacters.rejected, (state, payload) => {
      console.log(payload)
      state.state = "error"
    })
  },
})

export const fetchCharacters = createAsyncThunk(
  "characterList/fetchUsers",
  (payload: GetCharactersParams) => {
    return getCharacters(payload)
  },
)

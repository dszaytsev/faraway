import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { CHARACTER_LIST_INITIAL_STATE } from "./characterList"
import { getCharacters } from "../../data/storage"
import { GetListParams } from "../../shared/types"

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
      state.characters = payload.result
      state.totalCharacters = payload.count
      state.state = "success"
    })

    builder.addCase(fetchCharacters.rejected, (state, payload) => {
      if (!payload.meta.aborted) {
        state.state = "error"
      }
    })
  },
})

export const fetchCharacters = createAsyncThunk(
  "characterList/fetchCharacters",
  (payload: GetListParams) => {
    return getCharacters(payload)
  },
)

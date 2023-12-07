import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  tags: string[]
}

const initialState: InitialState = {
  tags: []
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    updateTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    }
  }
})

export const { updateTags } = tagsSlice.actions
export default tagsSlice.reducer

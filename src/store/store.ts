import { configureStore } from '@reduxjs/toolkit'
import { noteReducer, tagsReducer } from 'store'

const store = configureStore({
  reducer: {
    note: noteReducer,
    tags: tagsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

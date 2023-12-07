import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INote } from 'types/note.type'
import { addNote, deleteNoteByUUID, updateNoteByUUID } from 'utils/db.utils'

const initialState: INote = {
  id: '',
  title: '',
  titleWithTags: '',
  description: '',
  tags: []
}

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<INote>) => {
      addNote(action.payload)
      return {
        ...state,
        ...action.payload
      }
    },
    updateNote: (state, action: PayloadAction<INote>) => {
      updateNoteByUUID(action.payload)
      return {
        ...state,
        ...action.payload
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      deleteNoteByUUID(action.payload)
      return {
        ...state,
        id: action.payload
      }
    }
  }
})

export const { createNote, updateNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer

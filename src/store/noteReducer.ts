import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INote } from 'types/note.type'
import { addNote, deleteNoteByUUID } from 'utils/db.utils'

const initialState: INote = {
	id: '',
	title: '',
	description: '',
	tags: [],
}

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		createNote: (state, action: PayloadAction<INote>) => {
			state = action.payload
			addNote(action.payload)
		},
		deleteNote: (state, action: PayloadAction<string>) => {
			deleteNoteByUUID(action.payload)
		},
	},
})

export const { createNote, deleteNote } = noteSlice.actions
export default noteSlice.reducer

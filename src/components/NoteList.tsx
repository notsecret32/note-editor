import { Grid } from '@mui/material'
import { useNotes } from 'hooks/useNotes'
import React from 'react'
import { Note } from './Note'

const NotesList: React.FC = () => {
	const notes = useNotes()

	return (
		<Grid container spacing={2} direction='row'>
			{notes.map(note => (
				<Grid item>
					<Note
						id={note.id}
						title={note.title}
						description={note.description}
						tags={note.tags}
					/>
				</Grid>
			))}
		</Grid>
	)
}

export default NotesList

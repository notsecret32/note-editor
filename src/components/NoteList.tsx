import { Grid } from '@mui/material'
import { useNotes } from 'hooks/useNotes'
import React from 'react'
import { Note } from './Note'

export const NoteList: React.FC = () => {
  const notes = useNotes()

  return (
    <Grid container spacing={2} direction="row">
      {notes.map((note) => (
        <Grid item key={note.id}>
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

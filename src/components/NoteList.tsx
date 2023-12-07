import { List } from '@mui/material'
import { useNotes } from 'hooks/useNotes'
import React from 'react'
import { Note } from './Note'

export const NoteList: React.FC = () => {
  const notes = useNotes()

  return (
    <List>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          titleWithTags={note.titleWithTags}
          description={note.description}
          tags={note.tags}
        />
      ))}
    </List>
  )
}

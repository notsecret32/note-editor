import { List, Typography } from '@mui/material'
import { useNotes } from 'hooks/useNotes'
import React, { useMemo } from 'react'
import { INote } from 'types/note.type'
import { Note } from './Note'

const NoteListItem: React.FC<{ note: INote }> = ({ note }) => (
  <Note
    key={note.id}
    id={note.id}
    title={note.title}
    titleWithTags={note.titleWithTags}
    description={note.description}
    tags={note.tags}
  />
)

export const NoteList: React.FC = () => {
  const { allNotes, selectedNotes } = useNotes()

  const noteListItems = useMemo(() => {
    const notes = selectedNotes.length === 0 ? allNotes : selectedNotes
    return notes.map((note) => <NoteListItem key={note.id} note={note} />)
  }, [allNotes, selectedNotes])

  return (
    <List
      sx={{
        '& .MuiPaper-root': {
          marginBottom: '10px'
        }
      }}
    >
      {noteListItems.length > 0 ? (
        noteListItems
      ) : (
        <Typography>Нет заметок.</Typography>
      )}
    </List>
  )
}

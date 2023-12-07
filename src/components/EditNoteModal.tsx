import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'
import { FC, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateNote } from 'store/noteReducer'
import { extractTags } from 'utils/tags.utils'

interface EditNoteModalProps {
  isOpen: boolean
  onClose: () => void
  noteId: string
  noteTitle: string
  noteTitleWithTags: string
  noteDescription: string
}

export const EditNoteModal: FC<EditNoteModalProps> = ({
  isOpen,
  onClose,
  noteId,
  noteTitle,
  noteTitleWithTags,
  noteDescription
}) => {
  const [noteEditedTitle, setNoteEditedTitle] = useState(noteTitleWithTags)
  const [noteEditedDescription, setNoteEditedDescription] =
    useState(noteDescription)
  const dispatch = useDispatch()

  const handleEditNote = useCallback(() => {
    const { tags, sentence } = extractTags(noteEditedTitle || noteTitleWithTags)

    dispatch(
      updateNote({
        id: noteId,
        title: sentence,
        titleWithTags: noteTitleWithTags,
        description: noteEditedDescription,
        tags
      })
    )

    onClose()
  }, [
    noteEditedTitle,
    noteTitleWithTags,
    noteEditedDescription,
    noteId,
    onClose,
    dispatch
  ])

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Редактировать заметку | {noteTitle}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="noteTitle"
          label="Заголовок"
          type="text"
          fullWidth
          value={noteEditedTitle}
          onChange={(e) => setNoteEditedTitle(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          id="noteDescription"
          label="Описание"
          type="text"
          fullWidth
          value={noteEditedDescription}
          onChange={(e) => setNoteEditedDescription(e.target.value)}
          rows={5}
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Отменить
        </Button>
        <Button onClick={handleEditNote} color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

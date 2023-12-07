import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material'
import { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from 'store/noteReducer'
import { extractTags } from 'utils/tags.utils'
import { v4 } from 'uuid'

interface AddNoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddNoteModal: FC<AddNoteModalProps> = ({ isOpen, onClose }) => {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const dispatch = useDispatch()

  const handleAddNoteModalAdd = useCallback(() => {
    const { tags, sentence } = extractTags(noteTitle)

    dispatch(
      createNote({
        id: v4(),
        title: sentence,
        titleWithTags: noteTitle,
        description: noteDescription,
        tags
      })
    )

    onClose()
  }, [dispatch, noteTitle, noteDescription, onClose])

  useEffect(() => {
    if (!isOpen) {
      setNoteTitle('')
      setNoteDescription('')
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Добавить заметку</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="noteTitle"
          label="Заголовок"
          type="text"
          fullWidth
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          id="noteDescription"
          label="Описание"
          type="text"
          fullWidth
          value={noteDescription}
          onChange={(e) => setNoteDescription(e.target.value)}
          rows={5}
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Отменить
        </Button>
        <Button onClick={handleAddNoteModalAdd} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

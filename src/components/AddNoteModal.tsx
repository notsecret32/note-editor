import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material'
import { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from 'store/noteReducer'
import { extractTags, validate } from 'utils/tags.utils'
import { modalTheme } from 'utils/theme.utils'
import { v4 } from 'uuid'

interface AddNoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export const AddNoteModal: FC<AddNoteModalProps> = ({ isOpen, onClose }) => {
  const [noteTitle, setNoteTitle] = useState('')
  const [isNoteTitleValid, setIsNoteTitleValid] = useState(true)
  const [noteDescription, setNoteDescription] = useState('')
  const dispatch = useDispatch()

  const validateNoteTitle = (title: string) => {
    setNoteTitle(title)
    const isValidated = validate(title)
    isValidated ? setIsNoteTitleValid(true) : setIsNoteTitleValid(false)
  }

  const handleAddNoteModalAdd = useCallback(() => {
    if (!isNoteTitleValid) {
      return
    }

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

  const handleCloseModal = () => {
    onClose()
    setNoteTitle('')
    setNoteDescription('')
    setIsNoteTitleValid(true)
  }

  useEffect(() => {
    if (!isOpen) {
      setNoteTitle('')
      setNoteDescription('')
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onClose={onClose} sx={modalTheme}>
      <DialogTitle>Добавить заметку</DialogTitle>
      <DialogContent>
        <Typography
          variant="body1"
          component="h2"
          fontSize={14}
          color="red"
          display={isNoteTitleValid ? 'none' : 'block'}
        >
          Использованы запрещающие символы ({'@$%^&!*(),.?":{}|<>'}).
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="noteTitle"
          label="Заголовок"
          type="text"
          fullWidth
          value={noteTitle}
          onChange={(e) => validateNoteTitle(e.target.value)}
          required
          error={!isNoteTitleValid}
          inputProps={{
            maxLength: 45
          }}
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
        <Button onClick={handleCloseModal} color="primary">
          Отменить
        </Button>
        <Button onClick={handleAddNoteModalAdd} color="primary">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { FC } from 'react'
import { modalTheme } from 'utils/theme.utils'

interface DeleteNoteModalProps {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

export const DeleteNoteModal: FC<DeleteNoteModalProps> = ({
  isOpen,
  onClose,
  onDelete
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} sx={modalTheme}>
      <DialogTitle>Удаление заметки</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Вы уверены, что хотите удалить эту заметку?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={onDelete} color="error">
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  )
}

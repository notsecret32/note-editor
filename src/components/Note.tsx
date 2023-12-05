import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import { useModal } from 'hooks/useModal'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from 'store/noteReducer'
import { INote } from 'types/note.type'
import { NoteModal } from './NoteModal'

export const Note: FC<INote> = ({ id, title, description, tags }) => {
  const modal = useModal()

  modal.options = {
    title: 'Редактирование',
    cancelButtonText: 'Отменить',
    submitButtonText: 'Сохранить'
  }

  const dispatch = useDispatch()

  const handleDeleteNote = (event: React.SyntheticEvent) => {
    event.preventDefault()
    dispatch(deleteNote(id))
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {tags?.map((tag) => tag.name)}
        </Typography>
        <Typography variant="h5" component="h1">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <NoteModal modalType="confirm" buttonTitle="Редактировать" {...modal} />
        <Button size="small" onClick={handleDeleteNote}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  )
}

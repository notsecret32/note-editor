import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material'
import { DeleteNoteModal, EditNoteModal } from 'components'
import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from 'store/noteReducer'
import { INote } from 'types/note.type'

export const Note: FC<INote> = ({
  id,
  title,
  titleWithTags,
  description,
  tags
}) => {
  const dispatch = useDispatch()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleEditNote = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsEditModalOpen(true)
  }

  const handleDeleteNote = (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsDeleteModalOpen(true)
  }

  const handleEditModalClose = () => {
    setIsEditModalOpen(false)
  }

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false)
  }

  const handleNoteDeleteModal = () => {
    dispatch(deleteNote(id))
    handleDeleteModalClose()
  }

  return (
    <>
      <Card
        sx={{
          margin: '15px 0',
          maxWidth: 540,
          minWidth: 540
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'h6',
            component: 'h1',
            fontWeight: 700,
            fontSize: 30
          }}
          sx={{
            textAlign: 'center'
          }}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              padding: '5px 0'
            }}
          >
            {description || 'Нет описания.'}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              padding: '5px 0',
              flex: 1
            }}
          >
            {tags?.map((tag) => `${tag} `) || 'Нет тегов.'}
          </Typography>

          <Box>
            <Tooltip title="Редактировать">
              <IconButton onClick={handleEditNote}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Удалить">
              <IconButton onClick={handleDeleteNote}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Card>
      <EditNoteModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        noteId={id}
        noteTitle={title}
        noteTitleWithTags={titleWithTags}
        noteDescription={description}
      />
      <DeleteNoteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onDelete={handleNoteDeleteModal}
      />
    </>
  )
}

import AddIcon from '@mui/icons-material/Add'
import { Container, Grid, IconButton, Typography } from '@mui/material'
import { AddNoteModal, NoteList, TagsSearch } from 'components'
import { FC, useState } from 'react'
import { headerTheme, homeTheme } from 'utils/theme.utils'

export const Home: FC = () => {
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false)

  const handleAddNoteModalOpen = () => {
    setIsAddNoteModalOpen(true)
  }

  const handleAddNoteModalClose = () => {
    setIsAddNoteModalOpen(false)
  }

  return (
    <>
      <Container>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h2" component="h1" sx={headerTheme}>
              Заметки
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px 0'
            }}
          >
            <TagsSearch />
            <IconButton onClick={handleAddNoteModalOpen}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item sx={homeTheme}>
            <NoteList />
          </Grid>
        </Grid>
      </Container>
      <AddNoteModal
        isOpen={isAddNoteModalOpen}
        onClose={handleAddNoteModalClose}
      />
    </>
  )
}

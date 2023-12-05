import { Container } from '@mui/material'
import { NoteList, TagsSearch } from 'components'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <Container>
      <h1>Заметки</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TagsSearch tags={['важно', 'допятницы']} />
      </div>
      <NoteList />
    </Container>
  )
}

import { Container } from '@mui/material'
import NotesList from 'components/NoteList'
import TagsSearch from 'components/TagsSearch'
import React from 'react'

export const Home: React.FC = () => {
	return (
		<Container>
			<h1>Заметки</h1>
			<TagsSearch tags={['важно', 'допятницы']} onTagSelect={() => {}} />
			<NotesList />
		</Container>
	)
}

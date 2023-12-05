import { Container } from '@mui/material'
import { NoteList, NoteModal, TagsSearch } from 'components'
import { useModal } from 'hooks/useModal'
import React from 'react'

export const Home: React.FC = () => {
	const modal = useModal()

	modal.options = {
		title: 'Добавить заметку',
		noteTitleText: 'Название заметки',
		noteTitleTextHint: 'Введите название заметки...',
		noteDescriptionText: 'Описание',
		noteDescriptionTextHint: 'Введите описание заметки...',
		cancelButtonText: 'Отмена',
		submitButtonText: 'Добавить',
	}

	return (
		<Container>
			<h1>Заметки</h1>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<TagsSearch tags={['важно', 'допятницы']} onTagSelect={() => {}} />
				<NoteModal modalType='form' buttonTitle='Добавить заметку' {...modal} />
			</div>
			<NoteList />
		</Container>
	)
}

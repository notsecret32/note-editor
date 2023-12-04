import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from 'store/noteReducer'
import { INote } from 'types/note.type'

export const Note: FC<INote> = ({ id, title, description, tags }) => {
	const dispatch = useDispatch()

	const handleDeleteNote = (event: React.SyntheticEvent) => {
		event.preventDefault()
		dispatch(deleteNote(id))
	}

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{tags?.map(tag => tag.name)}
				</Typography>
				<Typography variant='h5' component='h1'>
					{title}
				</Typography>
				<Typography variant='body2'>{description}</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Редактировать</Button>
				<Button size='small' onClick={handleDeleteNote}>
					Удалить
				</Button>
			</CardActions>
		</Card>
	)
}

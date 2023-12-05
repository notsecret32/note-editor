import { Box, Button, TextField, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from 'store/noteReducer'
import { IModal } from 'types/modal.type'
import { INote } from 'types/note.type'
import { v4 } from 'uuid'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

interface NoteModalProps extends IModal {
	buttonTitle: string
	modalType: 'form' | 'confirm'
}

export const NoteModal: React.FC<NoteModalProps> = ({
	buttonTitle,
	modalType,
	isOpen,
	openModal,
	closeModal,
	options,
}) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const dispatch = useDispatch()

	const handleOpen = () => openModal()
	const handleCreateNote = (e: React.SyntheticEvent) => {
		e.preventDefault()

		const note: INote = {
			id: v4(),
			title,
			description,
		}

		dispatch(createNote(note))

		setTitle('')
		setDescription('')

		closeModal()
	}

	if (modalType === 'form') {
		return (
			<>
				<Button onClick={handleOpen}>{buttonTitle}</Button>
				<Modal
					open={isOpen}
					onClose={closeModal}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={style}>
						<Typography id='modal-modal-title' variant='h6' component='h2'>
							{options.title}
						</Typography>
						<TextField
							id='first-text-field'
							label={options.noteTitleText}
							placeholder={options.noteTitleTextHint}
							variant='outlined'
							value={title}
							onChange={e => setTitle(e.target.value)}
							required
						/>
						<TextField
							id='second-text-field'
							label={options.noteDescriptionText}
							placeholder={options.noteDescriptionTextHint}
							variant='outlined'
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<Button onClick={closeModal}>{options.cancelButtonText}</Button>
						<Button onClick={handleCreateNote}>
							{options.submitButtonText}
						</Button>
					</Box>
				</Modal>
			</>
		)
	}

	return (
		<>
			<Button onClick={handleOpen}>{buttonTitle}</Button>
			<Modal
				open={isOpen}
				onClose={closeModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Button onClick={closeModal}>{options.cancelButtonText}</Button>
					<Button onClick={handleCreateNote}>{options.submitButtonText}</Button>
				</Box>
			</Modal>
		</>
	)
}

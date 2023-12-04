import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import { IModal } from 'types/modal.type'

export const NoteModal: React.FC<IModal> = ({ isOpen, onClose, options }) => {
	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Text in a modal
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	)
}

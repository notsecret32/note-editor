import { useState } from 'react'
import { IModal, IModalOptions } from 'types/modal.type'

export const useModal = (): [() => void, IModal] => {
	const [isOpen, setIsOpen] = useState(false)

	const onClose = () => {
		setIsOpen(false)
	}

	const openModal = () => {
		setIsOpen(true)
	}

	const options: IModalOptions = {
		title: '',
		inputPlaceholder: '',
		textFieldPlaceholder: '',
		cancelButtonText: '',
		submitButtonText: '',
	}

	return [openModal, { isOpen, onClose, options }]
}

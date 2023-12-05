import { useState } from 'react'
import { IModal, IModalOptions, defaultModalOptions } from 'types/modal.type'

export const useModal = (): IModal => {
	const [isOpen, setOpen] = useState(false)
	const [options, setOptions] = useState<IModalOptions>(defaultModalOptions)

	const openModal = (options: IModalOptions = defaultModalOptions) => {
		setOpen(true)
		setOptions(options)
	}

	const closeModal = () => {
		setOpen(false)
	}

	return { isOpen, closeModal, openModal, options }
}

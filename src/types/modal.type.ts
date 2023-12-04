export interface IModalOptions {
	title: string
	inputPlaceholder: string
	textFieldPlaceholder: string
	cancelButtonText: string
	submitButtonText: string
}

export interface IModal {
	isOpen: boolean
	onClose: () => void
	options: IModalOptions
}

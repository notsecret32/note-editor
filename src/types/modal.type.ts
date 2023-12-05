export interface IModalOptions {
	title: string
	noteTitleText?: string
	noteTitleTextHint?: string
	noteDescriptionText?: string
	noteDescriptionTextHint?: string
	cancelButtonText: string
	submitButtonText: string
}

export interface IModal {
	isOpen: boolean
	closeModal: () => void
	openModal: (options?: IModalOptions) => void
	options: IModalOptions
}

export const defaultModalOptions: IModalOptions = {
	title: 'Default Modal Title',
	noteTitleText: 'Default Note Title',
	noteTitleTextHint: 'Default Title Hint',
	noteDescriptionText: 'Default Description Text',
	noteDescriptionTextHint: 'Default Description Hint',
	cancelButtonText: 'Cancel',
	submitButtonText: 'Submit',
}

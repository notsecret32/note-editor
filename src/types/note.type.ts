import { ITag } from './tag.type'

export interface INote {
	id: string
	title: string
	description: string
	tags?: ITag[]
}

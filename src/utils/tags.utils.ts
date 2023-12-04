import { ITag } from 'types/tag.type'

export function getTags(content: string): ITag[] {
	const regex = /#\w+/g
	const matches = content.match(regex)
	return matches ? matches.map(tag => ({ id: tag, name: tag })) : []
}

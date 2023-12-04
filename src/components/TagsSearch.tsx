import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React from 'react'

interface TagsSearchProps {
	tags: string[]
	onTagSelect: (tag: string) => void
}

const TagsSearch: React.FC<TagsSearchProps> = ({ tags, onTagSelect }) => {
	return (
		<Autocomplete
			options={tags}
			renderInput={params => <TextField {...params} label='Поиск по тегам' />}
		/>
	)
}

export default TagsSearch

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React from 'react'

interface TagsSearchProps {
  tags: string[]
}

export const TagsSearch: React.FC<TagsSearchProps> = ({ tags }) => {
  return (
    <Autocomplete
      options={tags}
      renderInput={(params) => <TextField {...params} label="Поиск по тегам" />}
    />
  )
}

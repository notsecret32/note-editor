import { Autocomplete, TextField } from '@mui/material'
import { useTags } from 'hooks/useTags'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTags } from 'store/tagsReducer'

export const TagsSearch: React.FC = () => {
  const { tags } = useTags()
  const dispatch = useDispatch()

  const handleChange = (e: React.SyntheticEvent, selectedTags: string[]) => {
    e.preventDefault()
    dispatch(updateTags(selectedTags))
  }

  return (
    <Autocomplete
      multiple
      options={tags}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Поиск по тегам"
          size="small"
          sx={{
            width: 500
          }}
        />
      )}
    />
  )
}

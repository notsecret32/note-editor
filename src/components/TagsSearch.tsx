import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { useTags } from 'hooks/useTags'
import React from 'react'

export const TagsSearch: React.FC = () => {
  const { tags } = useTags()

  return (
    <Autocomplete
      multiple
      options={tags}
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

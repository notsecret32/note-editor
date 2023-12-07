import { Autocomplete, TextField } from '@mui/material'
import { useTags } from 'hooks/useTags'
import { useDispatch } from 'react-redux'
import { updateTags } from 'store/tagsReducer'
import { tagSearchTheme } from 'utils/theme.utils'

export const TagsSearch: React.FC = () => {
  const { tags } = useTags()
  const dispatch = useDispatch()

  const handleChange = (e: React.SyntheticEvent, selectedTags: string[]) => {
    e.preventDefault()
    dispatch(updateTags(selectedTags))
  }

  return (
    <Autocomplete
      sx={tagSearchTheme}
      multiple
      options={tags}
      noOptionsText="Нет тегов."
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Поиск по тегам" size="small" />
      )}
    />
  )
}

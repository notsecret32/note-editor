import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { INote } from 'types/note.type'
import { getAllNotes, getAllNotesByTags } from 'utils/db.utils'

export const useNotes = () => {
  const [allNotes, setAllNotes] = useState<INote[]>([])
  const [selectedNotes, setSelectedNotes] = useState<INote[]>([])
  const selector = useSelector((state: RootState) => state.tags.tags)

  useEffect(() => {
    const loadNotes = async () => {
      const notes = await getAllNotes()
      setAllNotes(notes)
    }

    loadNotes()
  }, [])

  useEffect(() => {
    const loadSelectedNotes = async () => {
      const fetchedSelectedNotes = await getAllNotesByTags(selector)
      setSelectedNotes(fetchedSelectedNotes)
    }

    loadSelectedNotes()
  }, [selector])

  return { allNotes, selectedNotes }
}

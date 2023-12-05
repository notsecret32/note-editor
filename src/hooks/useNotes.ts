import { useEffect, useState } from 'react'
import { INote } from 'types/note.type'
import { getAllNotes } from 'utils/db.utils'

export function useNotes() {
  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    async function fetchData() {
      const notesData = await getAllNotes()
      setNotes(notesData)
    }

    fetchData()
  }, [notes])

  return notes
}

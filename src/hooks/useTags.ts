import { useEffect, useMemo, useState } from 'react'
import { getAllUniqueTags } from 'utils/db.utils'

export function useTags() {
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTags = await getAllUniqueTags()
      setTags(fetchedTags)
    }

    fetchData()
  }, [tags])

  return useMemo(() => ({ tags }), [tags])
}

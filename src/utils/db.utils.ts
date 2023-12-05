import { openDB } from 'idb'
import { INote } from 'types/note.type'
import { DATABASE_NAME, DATABASE_STORE_NAME } from './constants.utils'

export const db = openDB(DATABASE_NAME, 1, {
  upgrade(db) {
    db.createObjectStore(DATABASE_STORE_NAME, {
      keyPath: 'id',
      autoIncrement: true
    })
  }
})

export async function addNote(note: INote) {
  const database = await db
  const tx = database.transaction(DATABASE_STORE_NAME, 'readwrite')
  const store = tx.objectStore(DATABASE_STORE_NAME)
  await store.put(note, note.id)
  await tx.done
}

export async function getAllNotes() {
  const database = await db
  const tx = database.transaction(DATABASE_STORE_NAME, 'readonly')
  const store = tx.objectStore(DATABASE_STORE_NAME)
  const records = await store.getAll()
  await tx.done
  return records
}

export async function deleteNoteByUUID(key: string) {
  const database = await db
  const tx = database.transaction(DATABASE_STORE_NAME, 'readwrite')
  const store = tx.objectStore(DATABASE_STORE_NAME)
  await store.delete(key)
  await tx.done
}

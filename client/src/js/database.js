import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  const txtDb = await openDB('jate', 1);
  const txt = txtDb.transaction('jate', 'readwrite');
  const objStore = txt.objectStore('jate');
  const req = objStore.put({ id: id, value: value })
  const res = await req;
  console.log('Saved to the Database', res);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  const txtDb = await openDB('jate', 1);
  const txt = txtDb.transaction('jate', 'readwrite');
  const objStore = txt.objectStore('jate');
  const req = objStore.getAll()
  const res = await req;
  console.log('Saved to the Database', res);
};

initdb();

import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const file = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(file);
    return contactsList;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

console.log(await getAllContacts());

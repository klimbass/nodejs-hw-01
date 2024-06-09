import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const file = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(file);
    const fakeContact = createFakeContact();
    contactsList.push(fakeContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
  } catch (error) {
    throw new Error(error);
  }
};

await addOneContact();

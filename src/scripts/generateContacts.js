import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const file = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(file);

    for (let i = 1; i <= number; i++) {
      const fakeContact = createFakeContact();
      contactsList.push(fakeContact);
    }
    const newContactList = JSON.stringify(contactsList, null, 2);
    await fs.writeFile(PATH_DB, newContactList);
  } catch (error) {
    throw new Error(error);
  }
};

await generateContacts(5);

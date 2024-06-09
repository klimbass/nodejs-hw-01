import { randomInt } from 'crypto';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const file = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(file);
    const length = contactsList.length;
    let contactsListAfterThanos = [];
    for (let i = 0; i < length; i++) {
      const chance = randomInt(2);
      if (chance > 0) contactsListAfterThanos.push(contactsList[i]);
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsListAfterThanos, null, 2),
    );
  } catch (error) {
    throw new Error(error);
  }
};

await thanos();

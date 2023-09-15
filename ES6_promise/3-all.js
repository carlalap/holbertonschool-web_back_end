/* 3. Handle multiple successful promises
In this file, import uploadPhoto and createUser from utils.js
Knowing that the functions in utils.js return promises,
use the prototype below to collectively resolve all promises
and log body firstName lastName to the console.
-- function handleProfileSignup()
In the event of an error, log Signup system offline to the console
*/

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const userupload = await createUser();
    const photo = await uploadPhoto();
    console.log(`${photo.body} ${userupload.firstName} ${userupload.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
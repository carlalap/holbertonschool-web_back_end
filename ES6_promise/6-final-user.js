/* 6. Handle multiple promises
Import signUpUser from 4-user-promise.js and uploadPhoto
from 5-photo-reject.js.
Write and export a function named handleProfileSignup.
It should accept three arguments firstName (string), lastName (string),
and fileName (string). The function should call the two other functions.
When the promises are all settled it should return an
array with the following structure:
*/

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const sign = await signUpUser(firstName, lastName);
  let photo;
  try {
    photo = await uploadPhoto(fileName);
  } catch (error) {
    error.toString();
  }
  return [
    { value: sign, status: 'fulfilled' },
    { value: photo, status: 'rejected' },
  ];
}

/* 4. Simple promise
Using the following prototype */

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;

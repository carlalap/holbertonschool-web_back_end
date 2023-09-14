/* 2. Catch me if you can!
Append three handlers to the function:
When the Promise resolves, return an object with
the following attributes
 status: 200
 body: success
When the Promise rejects, return an empty Error object
For every resolution, log Got a response
from the API to the console
*/

function handleResponseFromAPI(promise) {
  const data = { status: 200, body: 'success' };

  return promise
    .then(() => data)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
export default handleResponseFromAPI;

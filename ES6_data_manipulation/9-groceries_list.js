/* 9. Map data structure
  Create a function named groceriesList that returns
  a map of groceries with the following items (name, quantity):
*/

const groceriesList = () => new Map()
  .set('Apples', 10)
  .set('Tomatoes', 10)
  .set('Pasta', 1)
  .set('Rice', 1)
  .set('Banana', 5);

export default groceriesList;

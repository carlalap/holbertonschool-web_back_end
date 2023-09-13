/* 8. Clean Set
Create a function named cleanSet that returns a string of all the set
values that start with a specific string (startString).
It accepts two arguments: a set (Set) and a startString (String).
When a value starts with startString you only append the rest of the string.
The string contains all the values of the set separated by -. */

export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((item) => {
    if (item && item.startsWith(startString)) result += `${item.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}

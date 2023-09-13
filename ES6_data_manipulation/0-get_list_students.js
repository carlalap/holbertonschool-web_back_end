/* 0. Basic list of objects
Create a function named getListStudents that returns an array of objects.
Each object should have three attributes:
id (Number), firstName (String), and location (String).
The array contains the following students in order:
*/

const getListStudents = () => [
  {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  },
];
export default getListStudents;

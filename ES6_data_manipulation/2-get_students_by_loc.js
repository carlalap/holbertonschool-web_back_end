export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.filter((item) => item.location === city);
}

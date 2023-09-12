export default function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.reduce((sum, student) => sum + student.id, 0);
}

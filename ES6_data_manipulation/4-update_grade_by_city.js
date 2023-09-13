/* 4. Combine
Create a function updateStudentGradeByCity that returns an array of students
for a specific city with their new grade
It should accept a list of students (from getListStudents), a city (String),
and newGrades (Array of “grade” objects) as parameters.
newGrades is an array of objects with this format:
 {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.
You must use filter and map combined
*/

export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const filteredStudents = studentList.filter((student) => student.location === city);

  // Mapping the students filter
  const updatedStudents = filteredStudents.map((student) => {
    // Find the corresponding grade object in newGrades
    const studentGrade = newGrade.find((grade) => grade.studentId === student.id);

    // If a grade exists, use it; otherwise, set the grade to "N/A"
    const grade = studentGrade ? studentGrade.grade : 'N/A';

    return { ...student, grade };
  });
  return updatedStudents;
}

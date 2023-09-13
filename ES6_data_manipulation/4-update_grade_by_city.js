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

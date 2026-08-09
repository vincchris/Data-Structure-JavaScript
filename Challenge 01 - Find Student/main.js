// Problem

// Create an array with 5 student names.

// After that, create a function which takes 2 parameters:

// allStudents
// studentName

// Iterate over all students and find the specific student whose name matches studentName.

// If the student exists, return the student's name.

// Otherwise, return "Student not found".

const student_names = ['Joe', 'Brayn', 'Vincent', 'Camellya', 'Jihn']

const FindStudents = (allStudents, StudentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === StudentName) {
      return allStudents[i]
    }
  }

  return "Student Not Found"
}

console.log(FindStudents(student_names, "Jihoo"))
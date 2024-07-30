function findStudentById(students, id) {
  // Your code here
  for (let student of students) {
    if (student.id === id) {
        return student;
    }
}
return null;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null

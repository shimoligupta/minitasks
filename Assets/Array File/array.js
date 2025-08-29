// ----------------------------
// Student Marks Calculator
// ----------------------------

// Array of students with nested subjects and marks
const students = [
  {
    name: "Aarav",
    rollNo: 1,
    subjects: {
      math: 85,
      science: 78,
      english: 92
    }
  },
  {
    name: "Priya",
    rollNo: 2,
    subjects: {
      math: 65,
      science: 70,
      english: 80
    }
  },
  {
    name: "Karan",
    rollNo: 3,
    subjects: {
      math: 90,
      science: 88,
      english: 95
    }
  }
];

// 1️⃣ Calculate Total Marks for Each Student using map + reduce
const studentsWithTotal = students.map(student => {
  // Get subject marks as an array
  const marksArray = Object.values(student.subjects);
  // Sum marks using reduce
  const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0);

  // Return a new object with total added
  return { ...student, total: totalMarks };
});

// 2️⃣ Filter Students with Total Marks above 250
const topScorers = studentsWithTotal.filter(student => student.total > 250);

// 3️⃣ Calculate Class Average Marks
const classAverage = studentsWithTotal.reduce((sum, student) => sum + student.total, 0) 
                     / studentsWithTotal.length;

// ----------------------------
// Output Results
// ----------------------------

console.log("----- Students Total Marks -----");
studentsWithTotal.forEach(student => {
  console.log(`${student.name} (Roll No: ${student.rollNo}) -> Total: ${student.total}`);
});

console.log("\n----- Top Scorers (Above 250) -----");
topScorers.forEach(student => {
  console.log(`${student.name} -> ${student.total}`);
});

console.log(`\n----- Class Average Marks -----`);
console.log(classAverage.toFixed(2));

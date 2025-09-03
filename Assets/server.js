const express = require("express");
const app = express();
const PORT = 5000;

let students = require("./data");

// Middleware to parse JSON
app.use(express.json());

/* -------------------------------
   1. GET - Get all students
--------------------------------*/
app.get("/students", (req, res) => {
  res.json(students);
});

/* -------------------------------
   2. POST - Add a new student
--------------------------------*/
app.post("/students", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  const newStudent = { id: students.length + 1, name, age };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

/* -------------------------------
   3. PUT - Update a student
--------------------------------*/
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  student.name = name || student.name;
  student.age = age || student.age;

  res.json(student);
});

/* -------------------------------
   4. DELETE - Remove a student
--------------------------------*/
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  students = students.filter((s) => s.id !== parseInt(id));

  res.json({ message: "Student deleted successfully" });
});

/* -------------------------------
   Start server
--------------------------------*/
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

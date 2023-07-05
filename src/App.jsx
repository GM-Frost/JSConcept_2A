function App() {
  const students = [
    {
      name: "Arata",
      age: 20,
      grade: [80, 40, 30, 90, 50],
    },
    {
      name: "Kato",
      age: 50,
      grade: [76, 98, 66, 54, 50],
    },
    {
      name: "Akira",
      age: 90,
      grade: [50, 34, 22, 66, 50],
    },
  ];

  function calculateAverageGrade(students) {
    const totalGrades = students.grade.reduce((total, grade) => total + grade);
    const averageGrades = totalGrades / students.grade.length;
    return averageGrades;
  }

  function printStudentInfo() {
    const allStudents = [];

    students.forEach((student, index) => {
      allStudents.push(
        <div
          key={index}
          style={{
            width: "50%",
            textAlign: "center",
            marginBottom: "10px",
            borderRadius: "8px",
            padding: "5px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          }}
        >
          <h2>
            Name:
            <span style={{ color: "blue" }}>{student.name}</span>
          </h2>
          <p>Age: {student.age}</p>
          <h3>
            Average Grade:
            <span style={{ color: "green" }}>
              &nbsp;{calculateAverageGrade(student)}
            </span>
          </h3>
        </div>
      );
    });
    return <div>{allStudents}</div>;
  }
  return printStudentInfo();
}
export default App;

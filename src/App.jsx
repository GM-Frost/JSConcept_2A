function App() {
  function calculateAverageGrade(students) {
    const totalGrades = students.grade.reduce((total, grade) => total + grade);
    const averageGrades = totalGrades / students.grade.length;
    return averageGrades;
  }

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

  function printStudentInfo(students) {
    return (
      <>
        <div>
          The Student Name is: <span className="name">{students.name}</span>
        </div>
        <div>
          The Student's age: <span className="age">{students.age}</span>
        </div>
        <div>
          The Student Average Grade is:
          <span className="average"> {calculateAverageGrade(students)}</span>
        </div>
      </>
    );
  }

  return printStudentInfo(students[1]);
}

export default App;

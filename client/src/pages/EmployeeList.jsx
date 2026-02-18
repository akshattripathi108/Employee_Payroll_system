const employees = [
  {
    name: "Aman Sharma",
    gender: "Male",
    dept: ["HR", "Finance"],
    salary: "₹10,000",
    date: "29 Oct 2019",
  },
];

export default function EmployeeList() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>
                {emp.dept.map(d => (
                  <span key={d} className="tag">{d}</span>
                ))}
              </td>
              <td>{emp.salary}</td>
              <td>{emp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

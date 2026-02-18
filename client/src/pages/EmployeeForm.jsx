import { useState } from "react";

export default function EmployeeForm({ onClose = () => {} }) {

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: ""
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];
  const years = Array.from({ length: 40 }, (_, i) => 1990 + i);

  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [departments, setDepartments] = useState([]);
  const [salary, setSalary] = useState("");

  return (
    <div className="card">
      <h2>Employee Payroll Form</h2>

      {/* NAME */}
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      {/* GENDER */}
      <div className="form-group">
        <label>Gender</label>
        <div className="gender-group">
          <label>
            <input type="radio" name="g" checked={gender === "Male"} onChange={() => setGender("Male")} /> Male
          </label>
          <label>
            <input type="radio" name="g" checked={gender === "Female"} onChange={() => setGender("Female")} /> Female
          </label>
        </div>
      </div>

      {/* DEPARTMENT */}
      <div className="form-group">
        <label>Department</label>
        <div className="dept-group">
          {[
            "HR",
            "Sales",
            "Finance",
            "Engineer",
            "Others",
          ].map((d) => (
            <label key={d}>
              <input
                type="checkbox"
                checked={departments.includes(d)}
                onChange={() => {
                  setDepartments((prev) =>
                    prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
                  );
                }}
              />
              {" "}
              {d}
            </label>
          ))}
        </div>
      </div>

      {/* SALARY */}
      <div className="form-group">
        <label>Salary</label>
        <select value={salary} onChange={(e) => setSalary(e.target.value)}>
          <option value="">Select Salary</option>
          <option>₹10,000</option>
          <option>₹20,000</option>
          <option>₹30,000</option>
        </select>
      </div>

      {/* START DATE */}
      <div className="form-group">
        <label>Start Date</label>

        <div className="date-group">
          <select
            value={date.day}
            onChange={(e) => setDate({ ...date, day: e.target.value })}
          >
            <option>Day</option>
            {days.map(d => <option key={d}>{d}</option>)}
          </select>

          <select
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
          >
            <option>Month</option>
            {months.map(m => <option key={m}>{m}</option>)}
          </select>

          <select
            value={date.year}
            onChange={(e) => setDate({ ...date, year: e.target.value })}
          >
            <option>Year</option>
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* NOTES */}
      <div className="form-group">
        <label>Notes</label>
        <textarea rows="3" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
      </div>

      <button
        type="button"
        className="save-btn"
        onClick={() => {
          const employee = {
            id: Date.now(),
            name,
            gender,
            departments,
            salary,
            startDate: date,
            notes,
          };
          try {
            const existing = JSON.parse(localStorage.getItem("employees") || "[]");
            existing.push(employee);
            localStorage.setItem("employees", JSON.stringify(existing));
          } catch (err) {
            localStorage.setItem("employees", JSON.stringify([employee]));
          }
          alert("Employee Added");
          onClose();
        }}
      >
        Save
      </button>

    </div>
  );
}

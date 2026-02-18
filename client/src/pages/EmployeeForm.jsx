import { useState } from "react";

const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=5",
  "https://i.pravatar.cc/100?img=8",
  "https://i.pravatar.cc/100?img=15"
];

export default function EmployeeForm({ onClose, onSave, editData }) {

  const [employee, setEmployee] = useState(
    editData || {
      name: "",
      gender: "",
      department: [],
      salary: "",
      avatar: ""
    }
  );

  const [error, setError] = useState("");

  const toggleDept = (dept) => {
    setEmployee(prev => ({
      ...prev,
      department: prev.department.includes(dept)
        ? prev.department.filter(d => d !== dept)
        : [...prev.department, dept]
    }));
  };

  const submit = () => {
    if (!employee.name || !employee.gender || !employee.salary || !employee.avatar) {
      setError("Please complete required fields.");
      return;
    }

    onSave(employee);
    onClose();
  };

  return (
    <>
      <h2>{editData ? "Edit Employee" : "Add Employee"}</h2>
      {error && <p style={{color:"red"}}>{error}</p>}

      <div className="form-group">
        <label>Name *</label>
        <input
          value={employee.name}
          onChange={e => setEmployee({...employee, name:e.target.value})}
        />
      </div>

      <div className="form-group">
        <label>Profile Image *</label>
        <div className="avatar-group">
          {avatars.map(a => (
            <img
              key={a}
              src={a}
              className={`avatar ${employee.avatar===a ? "selected":""}`}
              onClick={() => setEmployee({...employee, avatar:a})}
            />
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Gender *</label>
        <div className="gender-group">
          {["Male","Female"].map(g => (
            <label key={g}>
              <input
                type="radio"
                checked={employee.gender===g}
                onChange={() => setEmployee({...employee, gender:g})}
              /> {g}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Department</label>
        <div className="dept-group">
          {["HR","Sales","Finance","Engineer"].map(dep => (
            <label key={dep}>
              <input
                type="checkbox"
                checked={employee.department.includes(dep)}
                onChange={() => toggleDept(dep)}
              /> {dep}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Salary *</label>
        <input
          type="number"
          value={employee.salary}
          onChange={e => setEmployee({...employee, salary:e.target.value})}
        />
      </div>

      <button className="save-btn" onClick={submit}>
        {editData ? "Update" : "Save"}
      </button>
    </>
  );
}

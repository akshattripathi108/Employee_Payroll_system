import { useState } from "react";

const avatars = [1, 2, 3, 4, 5];

export default function EmployeeModal({ close, save, employee }) {
  const [form, setForm] = useState({
    _id: employee?._id || undefined,
    name: employee?.name || "",
    gender: employee?.gender || "",
    department: employee?.department || [],
    salary: employee?.salary || "",
    avatar: employee?.avatar || 1,
    date: employee?.date || ""
  });

  const toggleDept = (dep) => {
    setForm({
      ...form,
      department: form.department.includes(dep)
        ? form.department.filter(d => d !== dep)
        : [...form.department, dep]
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

       <h2 className="modal-title">Employee Payroll Form</h2>

<div className="form-grid">

  <label>Name</label>
  <input
    value={form.name}
    onChange={e => setForm({ ...form, name: e.target.value })}
  />

  <label>Profile Image</label>
  <div className="avatars">
    {avatars.map(a => (
      <img
        key={a}
        src={`https://i.pravatar.cc/60?img=${a}`}
        className={form.avatar === a ? "selected" : ""}
        onClick={() => setForm({ ...form, avatar: a })}
      />
    ))}
  </div>

  <label>Gender</label>
  <div className="radio-group">
    <label><input type="radio" onChange={()=>setForm({...form, gender:"Male"})}/> Male</label>
    <label><input type="radio" onChange={()=>setForm({...form, gender:"Female"})}/> Female</label>
  </div>

  <label>Department</label>
  <div className="checkbox-group">
    {["HR","Sales","Finance","Engineer"].map(dep => (
      <label key={dep}>
        <input type="checkbox" onChange={()=>toggleDept(dep)} /> {dep}
      </label>
    ))}
  </div>

  <label>Salary</label>
  <select onChange={e=>setForm({...form, salary:e.target.value})}>
    <option>Select Salary</option>
    <option>10000</option>
    <option>20000</option>
    <option>30000</option>
  </select>

  <label>Start Date</label>
  <input type="date" onChange={e=>setForm({...form, date:e.target.value})} />

</div>

<div className="modal-buttons">
  <button className="save" onClick={()=>save(form)}>Save</button>
  <button className="cancel" onClick={close}>Cancel</button>
</div>
        </div>
    </div>
  );
}
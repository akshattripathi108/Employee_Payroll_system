import { Link } from "react-router-dom";
export default function Navbar({ onAddUser }) {
  return (
    <div className="navbar">
      <div className="logo">
        EMPLOYEE <span>PAYROLL</span>
      </div>

      <button className="add-btn" onClick={onAddUser}>
        + Add User
      </button>
    </div>
  );
}


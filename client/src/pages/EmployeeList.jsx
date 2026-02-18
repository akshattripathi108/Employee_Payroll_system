import { FaTrash, FaEdit, FaFilePdf } from "react-icons/fa";

export default function EmployeeList({ employees, onEdit, onDelete, onDownload }) {
  return (
    <div className="table-container">
      <table className="employee-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td className="name-cell">
                <img
                  src={`https://i.pravatar.cc/40?img=${emp.avatar || 1}`}
                  alt="avatar"
                  className="avatar"
                />
                {emp.name}
              </td>

              <td>
                {(emp.department || []).map((dep, i) => (
                  <span key={i} className="badge">
                    {dep}
                  </span>
                ))}
              </td>

              <td>₹ {emp.salary}</td>

              <td className="actions">
                <button className="icon-btn" onClick={() => onEdit && onEdit(emp)}>
                  <FaEdit />
                </button>
                <button className="icon-btn" onClick={() => onDelete && onDelete(emp._id)}>
                  <FaTrash />
                </button>
                <button className="icon-btn" onClick={() => onDownload && onDownload(emp)}>
                  <FaFilePdf />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

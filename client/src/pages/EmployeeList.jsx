import { generateSlip } from "../utils/salarySlip";

export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Salary</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e,i)=>(
          <tr key={i}>
            <td>{e.name}</td>
            <td>{e.salary}</td>
            <td>
              <button onClick={()=>generateSlip(e)}>PDF</button>
              <button onClick={()=>onEdit(i)}>Edit</button>
              <button onClick={()=>onDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

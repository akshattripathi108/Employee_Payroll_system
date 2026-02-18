import { useState, useEffect } from "react";
import api from "./utils/api";
import Login from "./pages/Login";
import EmployeeList from "./pages/EmployeeList";
import Navbar from "./layouts/Navbar.jsx";
import HeaderBar from "./components/HeaderBar.jsx";
import EmployeeModal from "./components/EmployeeModal.jsx";



function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // fetch employees after login
  useEffect(() => {
    if (token) {
      fetchEmployees();
    }
}, [token]);

const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees", {
        headers: { Authorization: token }
      });
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE EMPLOYEE
  const deleteEmployee = async (id) => {
    if (!confirm("Delete this employee?")) return;

    try {
      await api.delete(`/employees/${id}`, {
        headers: { Authorization: token }
      });

      fetchEmployees(); // refresh list
    } catch (err) {
      console.log(err);
    }
  };

  // open/close modal
  const openModal = () => {
    setEditingEmployee(null);
    setShowModal(true);
  };
  const closeModal = () => {
    setEditingEmployee(null);
    setShowModal(false);
  };

  // save new employee or update existing
  const saveEmployee = async (form) => {
    try {
      if (form._id) {
        await api.put(`/employees/${form._id}`, form, {
          headers: { Authorization: token }
        });
      } else {
        await api.post("/employees", form, {
          headers: { Authorization: token }
        });
      }
      closeModal();
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT EMPLOYEE (for popup later)
  const editEmployee = (emp) => {
    setEditingEmployee(emp);
    setShowModal(true);
  };

  // DOWNLOAD PDF
  const downloadSlip = (emp) => {
    alert("PDF feature working for " + emp.name);
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <HeaderBar openModal={openModal} />
        <h1 style={{ color: "black" }}>Employee Dashboard</h1>
        <EmployeeList
          employees={employees}
          onDelete={deleteEmployee}
          onEdit={editEmployee}
          onDownload={downloadSlip}
        />

        {showModal && (
          <EmployeeModal
            key={editingEmployee?._id || "new"}
            close={closeModal}
            save={saveEmployee}
            employee={editingEmployee}
          />
        )}
      </div>
    </>
  );


}


export default App;

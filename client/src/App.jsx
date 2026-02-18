import { useState, useEffect } from "react";
import api from "./utils/api";
import Login from "./pages/Login.jsx";
import EmployeeList from "./pages/EmployeeList";
import PopupModal from "./components/PopupModal";
import Chart from "./components/Chart";
import { exportExcel } from "./utils/exportExcel";

export default function App() {

  const [token,setToken]=useState(localStorage.getItem("token"));
  const [employees,setEmployees]=useState([]);
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if(token){
      api.get("/employees",{headers:{Authorization:token}})
        .then(res=>setEmployees(res.data));
    }
  },[token]);

  if(!token) return <Login setToken={(t)=>{setToken(t);localStorage.setItem("token",t)}} />

  return (
    <>
      <button onClick={()=>setOpen(true)}>Add User</button>
      <button onClick={()=>exportExcel(employees)}>Export Excel</button>

      <EmployeeList
        employees={employees}
        onDelete={(i)=>setEmployees(employees.filter((_,idx)=>idx!==i))}
      />

      <Chart employees={employees} />

      {open && (
        <PopupModal onClose={()=>setOpen(false)}>
          Add form here
        </PopupModal>
      )}
    </>
  );
}

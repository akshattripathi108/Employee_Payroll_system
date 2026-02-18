import { useState } from "react";
import Navbar from "./layouts/Navbar";
import EmployeeList from "./pages/EmployeeList";
import PopupModal from "./components/PopupModal";
import EmployeeForm from "./pages/EmployeeForm";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PASS function to navbar */}
      <Navbar onAddUser={() => setOpen(true)} />

      <EmployeeList />

      {/* POPUP */}
      {open && (
        <PopupModal onClose={() => setOpen(false)}>
          <EmployeeForm onClose={() => setOpen(false)} />
        </PopupModal>
      )}
    </>
  );
}

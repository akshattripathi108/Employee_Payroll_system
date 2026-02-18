import jsPDF from "jspdf";

export const generateSlip = (emp) => {
  const doc = new jsPDF();
  doc.text("Salary Slip", 20, 20);
  doc.text(`Name: ${emp.name}`, 20, 40);
  doc.text(`Salary: ₹${emp.salary}`, 20, 50);
  doc.save("salary-slip.pdf");
};

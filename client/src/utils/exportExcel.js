import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportExcel = (employees) => {
  const ws = XLSX.utils.json_to_sheet(employees);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Employees");

  const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  saveAs(new Blob([buf]), "employees.xlsx");
};

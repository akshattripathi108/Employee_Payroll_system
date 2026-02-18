import { FaSearch, FaPlus } from "react-icons/fa";

export default function HeaderBar({ openModal }) {
  return (
    <div className="header-bar">
      <h2>Employee Details</h2>

      <div className="header-actions">
        <div className="search-box">
          <FaSearch />
          <input placeholder="Search..." />
        </div>

        <button className="add-btn" onClick={openModal}>
          <FaPlus /> Add User
        </button>
      </div>
    </div>
  );
}

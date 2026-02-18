export default function PopupModal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span onClick={onClose}>×</span>
        {children}
      </div>
    </div>
  );
}

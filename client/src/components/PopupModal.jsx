export default function PopupModal({ children, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-modal" onClick={onClose}>
          ×
        </span>
        {children}
      </div>
    </div>
  );
}

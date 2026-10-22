import React, { useState } from 'react';

export default function QuickModal({ modalState, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!modalState) return null;

  const handleAction = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 900);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-card glass-panel animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            {modalState.icon && (
              <img src={modalState.icon} alt="" className="modal-icon" />
            )}
            <h4>{modalState.title}</h4>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{modalState.description}</p>

          {modalState.type === 'stat' && (
            <div className="modal-stat-highlight">
              <span className="modal-stat-val">{modalState.value}</span>
              <span className="modal-stat-trend">{modalState.trend}</span>
            </div>
          )}

          {modalState.type === 'submenu' && (
            <form className="modal-quick-form" onSubmit={handleAction}>
              <div className="modal-field">
                <label>Module Status</label>
                <div className="modal-status-pill">
                  <span className="live-dot" /> Active — Academic Year 2025-26
                </div>
              </div>
              <div className="modal-field">
                <label>Quick Note / Filter</label>
                <input
                  type="text"
                  placeholder={`Enter details for ${modalState.title}...`}
                  className="modal-input"
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-btn-secondary"
                  onClick={onClose}
                >
                  Back to Dashboard
                </button>
                <button type="submit" className="modal-btn-primary">
                  {submitted ? '✓ Saved!' : `Open ${modalState.title}`}
                </button>
              </div>
            </form>
          )}

          {modalState.type === 'logout' && (
            <div className="modal-actions">
              <button
                type="button"
                className="modal-btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="modal-btn-primary"
                onClick={onClose}
              >
                Stay Signed In (Demo)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

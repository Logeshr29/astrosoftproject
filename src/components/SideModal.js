import React, { useState } from 'react';

const SideModal = ({ isOpen, onClose }) => {
  return (
    <div className={`side-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">

        
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {/* Your modal content goes here */}
      </div>
    </div>
  );
};

export default SideModal;

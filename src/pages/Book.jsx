// Book.jsx
import React from 'react';

const Book = ({ show, handleClose }) => {
  if (!show) {
    return null; // Do not render the modal if show is false
  }

  return (
    <div
      className="modal fade show"
      id="bookNowModal"
      tabIndex="-1"
      aria-labelledby="bookNowModalLabel"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="bookNowModalLabel">
              Booking Form
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Please fill out the form to complete your booking.</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

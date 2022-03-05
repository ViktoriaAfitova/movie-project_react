import React, { useState, useEffect } from "react";
import div from "./movieDetails.css";

const MovieDetails = ({
  visible = false,
  // title,
  // closeBtnShow = false,
  // Poster,
  Title,
  // Released,
  // Genre,
  // Country,
  // Director,
  // Writer,
  // Actors,
  // Awards,
  onCancel,
  // onConfirm,
}) => {

  return (
    <div
      className={`md-modal ${visible ? "md-show" : "md-hidden"}`}
      tabIndex="-1"
      onClick={onCancel}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onCancel}
            ></button>
          </div>
          <div className="modal-body">
            <p>Title: {Title}</p>
            <p>Released:</p>
            <p>Genre:</p>
            <p>Country:</p>
            <p>Director:</p>
            <p>Writer:</p>
            <p>Actors:</p>
            <p>Awards:</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

"use client";

import React from "react";

const HeroForm: React.FC = () => {
  return (
    <div className="hero-form">
      <div className="form-content">
        <h1>Join Us Now</h1>
        <button className="form-btn">Login/Register</button>
      </div>
      <style jsx>{`
        .hero-form {
          position: absolute;
          top: 45%; /* Adjust to make it 15-20% over the carousel */
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          background-color: rgba(255, 255, 255, 0.9); /* Slight transparency */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 10; /* Ensure it appears above the carousel */
        }

        .form-content h1 {
          font-size: 2rem;
          font-weight: bold;
          color: #ff4500;
          margin-bottom: 20px;
        }

        .form-btn {
          background-color: #ff4500;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .form-btn:hover {
          background-color: #e63900;
        }
      `}</style>
    </div>
  );
};

export default HeroForm;

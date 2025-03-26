"use client";

import React, { useState } from "react";
import { useTrip } from "../context/TripContext";


const Additionals = () => {
  const { tripDetails, setTripDetails } = useTrip();

  const handleChange = (field: string, value: string) => {
    setTripDetails({
      ...tripDetails,
      additionals: {
        ...tripDetails.additionals,
        [field]: value,
      },
    });
  };

  return (
    <div className="additionals-section">
      <h3>Would you like to include the following in your trip?</h3>

      <div className="option">
        <label>Guide:</label>
        <select onChange={(e) => handleChange("guide", e.target.value)}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <div className="option">
        <label>Restaurant Visits:</label>
        <select onChange={(e) => handleChange("restaurant", e.target.value)}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      <style jsx>{`
        .additionals-section {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 500px;
          margin: 0 auto;
        }

        .option {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        label {
          font-weight: bold;
        }

        select {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Additionals;

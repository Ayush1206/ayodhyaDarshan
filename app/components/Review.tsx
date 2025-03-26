"use client";

import React from "react";
import { useTrip } from "../context/TripContext";

const Review = ({ onEdit, onProceed }: { onEdit: () => void; onProceed: () => void }) => {
  const { tripDetails } = useTrip();

  return (
    <div className="review-container">
      <h2>Trip Summary</h2>

      <div className="report-card">
        {/* Date Selection */}
        {tripDetails.startDate && tripDetails.endDate && (
          <p>
            <strong>Travel Dates:</strong> {tripDetails.startDate.toDateString()} - {tripDetails.endDate.toDateString()}
          </p>
        )}

        {/* Travel Mode */}
        {tripDetails.travelMode && (
          <p>
            <strong>Travel Mode:</strong> {tripDetails.travelMode}
          </p>
        )}

        {/* Leave Travel Booking to Us */}
        {tripDetails.leaveItToUs && tripDetails.travelMode && (
          <p>
            <strong>Travel Booking:</strong> We will book your {tripDetails.travelMode.toLowerCase()} for you.
          </p>
        )}

        {/* Hotel Selection */}
        {tripDetails.leaveItToUs && tripDetails.hotelType && tripDetails.roomType && (
          <p>
            <strong>Hotel Booking:</strong> {tripDetails.hotelType} Hotel, {tripDetails.roomType} Room.
          </p>
        )}

        {/* State and City (Optional) */}
        {tripDetails.selectedState && tripDetails.selectedCity && (
          <p>
            <strong>Location:</strong> {tripDetails.selectedCity}, {tripDetails.selectedState}
          </p>
        )}

        {/* Additionals */}
        {tripDetails.additionals && (
          <>
            <p>
              <strong>Guide:</strong> {tripDetails.additionals.guide ? "Yes" : "No"}
            </p>
            <p>
              <strong>Restaurant Visits:</strong> {tripDetails.additionals.restaurant ? "Yes" : "No"}
            </p>
          </>
        )}
      </div>

      <div className="review-buttons">
        <button className="edit-btn" onClick={onEdit}>Edit</button>
        <button className="proceed-btn" onClick={onProceed}>Proceed</button>
      </div>

      <style jsx>{`
        .review-container {
          max-width: 600px;
          margin: 30px auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        h2 {
          color: #333;
          margin-bottom: 15px;
        }

        .report-card {
          background: #fff5e1;
          padding: 15px;
          border-radius: 5px;
          font-size: 1rem;
          color: #333;
          text-align: left;
          margin-bottom: 20px;
        }

        .report-card p {
          margin: 10px 0;
        }

        .review-buttons {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .edit-btn, .proceed-btn {
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .edit-btn {
          background-color: #ddd;
          color: #333;
        }

        .proceed-btn {
          background-color: #ff9933;
          color: #fff;
        }

        .edit-btn:hover {
          background-color: #ccc;
        }

        .proceed-btn:hover {
          background-color: #cc5200;
        }
      `}</style>
    </div>
  );
};

export default Review;

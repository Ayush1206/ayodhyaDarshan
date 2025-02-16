"use client";

import React from "react";
import { useTrip } from "../context/TripContext";

const Checkout: React.FC = () => {
  const { tripDetails } = useTrip();

  return (
    <div className="checkout-container">
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
      </div>


      <style jsx>{`
        .checkout-container {
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

        .confirm-btn {
          background: #ff9933;
          color: white;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.1rem;
          width: 100%;
        }

        .confirm-btn:hover {
          background: #cc5200;
        }
      `}</style>
    </div>
  );
};

export default Checkout;

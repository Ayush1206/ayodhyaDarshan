"use client"

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const TripPlanner = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Select Dates", "Book Travel", "Book Hotel", "Checkout"];

  const goToNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const goToPrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="trip-planner">
      <Navbar />
      <div className="content-wrapper">
        {/* Progress Bar */}
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index + 1 <= currentStep ? "active" : ""}`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="step-content">
          {currentStep === 1 && (
            <div>
              <h2>Select Your Dates</h2>
              {/* Date Picker Component */}
              <p>Select the start and end dates for your trip.</p>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h2>Book Your Travel</h2>
              {/* Travel Booking Form */}
              <p>Choose between Train, Plane, or Cab for your travel.</p>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h2>Book Your Hotel</h2>
              {/* Hotel Booking Form */}
              <p>Find the best hotels that match your needs.</p>
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <h2>Checkout</h2>
              {/* Checkout Summary */}
              <p>Review your trip details and proceed to payment.</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button onClick={goToPrev} disabled={currentStep === 1}>
            Previous
          </button>
          <button onClick={goToNext} disabled={currentStep === steps.length}>
            Next
          </button>
        </div>
      </div>

      <style jsx>{`
        .trip-planner {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .content-wrapper {
          padding: 20px;
          max-width: 800px;
          margin: 100px auto 0 auto;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: #ddd;
          border-radius: 5px;
          margin: 0 5px;
          transition: background 0.3s;
        }

        .step.active {
          background: #ff9933;
          color: #fff;
        }

        .step-content {
          margin: 20px 0;
          text-align: center;
        }

        .navigation-buttons {
          display: flex;
          justify-content: space-between;
        }

        button {
          padding: 10px 20px;
          border: none;
          background: #ff9933;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }

        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 10px;
            margin: 80px auto 0 auto;
          }

          .progress-bar {
            flex-direction: column;
          }

          .step {
            margin-bottom: 10px;
          }

          .navigation-buttons {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default TripPlanner;

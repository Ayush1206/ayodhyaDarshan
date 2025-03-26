"use client";

import React, { useState } from "react";
import { useTrip } from "../context/TripContext";

const Checkout: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { tripDetails, setTripDetails } = useTrip();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...tripDetails,
      userInfo: {
        name,
        email,
        phone,
      },
    };
    setTripDetails({
        userInfo: {
          name,
          email,
          phone,
        },
      });
      console.log("Final Booking Submitted:", {
        ...tripDetails,
        name,
        email,
        phone,
      });
      
    alert("Booking submitted successfully!");
  };

  return (
    <div className="checkout-container">
      <h2>Enter Your Personal Details</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Full Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>

        <button type="submit" className="confirm-btn">Confirm Booking</button>
      </form>

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

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          text-align: left;
        }

        label {
          font-weight: bold;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        input {
          padding: 8px;
          border-radius: 5px;
          border: 1px solid #ccc;
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
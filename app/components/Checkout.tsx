"use client";

import React, { useState } from "react";
import { useTrip } from "../context/TripContext";

const Checkout: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { tripDetails, setTripDetails } = useTrip();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const finalData = {
    ...tripDetails,
    userInfo: {
      name,
      email,
      phone,
    },
  };

  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Booking submitted successfully!");
      console.log("Final Booking Submitted:", finalData);
    } else {
      alert("Something went wrong: " + data.error);
    }
  } catch (error) {
    alert("Failed to submit booking.");
    console.error(error);
  }

  setTripDetails(finalData);
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
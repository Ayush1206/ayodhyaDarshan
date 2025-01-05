"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
 // Assuming Navbar is in components folder

const SignupLogin: React.FC = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleMode = () => {
    setIsSignup((prevMode) => !prevMode);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="page-container">
        {/* Container A */}
        <div className="container-a">
          {/* Left Section (Image) */}
          <div className="left-section">
            <Image
              src="/images/shreeRam.jpg" // Replace with your image path
              alt="Shree Ram"
              layout="fill"
              objectFit="cover"
              className="image"
            />
          </div>

          {/* Right Section (Form) */}
          <div className="right-section">
            <h1 className="form-title">{isSignup ? "Sign Up" : "Login"}</h1>
            <form>
              {isSignup && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                  />
                </>
              )}
              {!isSignup && (
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
              )}
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              {isSignup && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input-field"
                />
              )}
              <button type="submit" className="form-button">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="toggle-text">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account yet?"}{" "}
              <span onClick={toggleMode} className="toggle-link">
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>

            {/* Google Sign In/Up Button */}
            <div className="google-auth">
              <button className="google-button">
                {isSignup ? "Sign Up" : "Login"} with Google
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .page-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 70px); /* Adjust for Navbar height */
            background-color: #f9f9f9;
          }

          .container-a {
            display: flex;
            width: 70%;
            height: 70%;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            background: white;
          }

          .left-section {
            flex: 1;
            position: relative;
          }

          .image {
            object-fit: cover;
          }

          .right-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            background: white;
          }

          .form-title {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #ff9933;
          }

          .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
          }

          .form-button {
            width: 100%;
            padding: 10px;
            background-color: #ff9933;
            color: white;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
          }

          .form-button:hover {
            background-color: #e68a00;
          }

          .toggle-text {
            margin-top: 15px;
            font-size: 0.9rem;
            color: #555;
          }

          .toggle-link {
            color: #ff9933;
            cursor: pointer;
            font-weight: bold;
          }

          .toggle-link:hover {
            text-decoration: underline;
          }

          .google-auth {
            margin-top: 20px;
          }

          .google-button {
            width: 100%;
            padding: 10px;
            background-color: #4285f4;
            color: white;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }

          .google-button:hover {
            background-color: #357ae8;
          }

          @media (max-width: 768px) {
            .container-a {
              flex-direction: column;
            }

            .left-section {
              height: 50%;
            }

            .right-section {
              height: 50%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default SignupLogin;

import React from "react";
import "./signture.css";
import SIGNIN from "./signIn";
import SIGNUP from "./signUp";
const SIGNTURE = () => {
  return (
    <>
      <section className="signture">
        <div className="signtureContainer " >
          <div className="welcomeOverlay">
            <div className="welcome">
              <h1 className="welcomeText">We Are THABER</h1>
              <p className="desc"> Welcome to Sign in to continue access</p>
            </div>
            <div className="btn">
              <div
                className="btnSignture"
                onClick={() => {
            
                  document.querySelector(".in").classList.add("swapIn");
                  document.querySelector(".up").classList.add("swapOut");
                }}
              >
                Sign In
              </div>
              <div className="btnSignture"
              onClick={() => {
                document.querySelector(".in").classList.remove("swapIn");
                document.querySelector(".up").classList.remove("swapOut");
              }}>Sign Up</div>
            </div>
          </div>

          <SIGNIN />
          <SIGNUP />
        </div>
      </section>
    </>
  );
};
export default SIGNTURE;

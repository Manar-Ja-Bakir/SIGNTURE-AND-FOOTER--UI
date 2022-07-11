import React from "react";
import "./signture.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
const SIGNUP = () => {
  return (
    <>
      <div className="signtureItem up" id="SignUp">
        <h1 className="HeaderSignture">Sign Up</h1>
        <form action="" className="formCon">
          <div className="UserName">
            <div className="itemSign">
              <span>
                <PersonOutlineOutlinedIcon className="iconSign" />
              </span>
              <input type="text" placeholder="User Name" />
            </div>
          </div>
          <div className="email">
            <div className="itemSign">
              <span>
                <EmailOutlinedIcon className="iconSign" />
              </span>

              <input type="email" placeholder="@gmail.com" />
            </div>
            {/* <p className="error errorEmail">error email</p> */}
          </div>

          <div className="password">
            <div className="itemSign">
              <span>
                <LockOutlinedIcon className="iconSign" />
              </span>
              <input type="password" placeholder="Password" />
            </div>

            {/* <p className="error errorPassword">error password</p> */}
          </div>

          <div className="confirmPass">
            <div className="itemSign">
              <span>
                <KeyOutlinedIcon className="iconSign" />
              </span>
              <input type="password" placeholder="Confirm Password" />
            </div>
            {/* <p className="error errorPasswordCon">error confirm password</p> */}
          </div>

          <div className="button">
            <button className="signtureBtn">Sign Up</button>
          </div>
        </form>
        <p className="NotHaveAcount">
          You have an acount ?
          <a
            href="#SignIn"
            onClick={() => {
              document.querySelector(".in").classList.remove("swapIn");
              document.querySelector(".up").classList.remove("swapOut");
            }}
          >
            Sign In
          </a>
        </p>
      </div>
    </>
  );
};
export default SIGNUP;

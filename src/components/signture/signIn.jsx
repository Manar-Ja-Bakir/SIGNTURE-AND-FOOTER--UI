import React from "react";
import "./signture.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const SIGNIN = () => {
  return (
    <>
      <div className="signtureItem in " id="signIn">
        <h1 className="HeaderSignture">Sign In</h1>
        <form action="" className="formCon">
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

          <div className="button">
            <button className="signtureBtn">Sign In</button>
          </div>
        </form>
        <div className="NotHaveAcount">
          Dont't have an acount ?
          <a
            // href="#"
            // onClick={() => {
            //   document.querySelector(".in").classList.add("swapIn");
            //   document.querySelector(".up").classList.add("swapOut");
             
            // }}
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};
export default SIGNIN;

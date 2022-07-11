import React from "react";
import "./footer.css";
import ICONDesign from "./iconDesign";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
const FOOTCON = () => {
  return (
    <>
      <div class="info">
        <div class="descrption">
          <h1 class="titlePage">THABER</h1>
          <p class="paragraph">
            An education platform for teaching programming languages,which
            include lectures,codes and videos, and allows users to chat
            <div class="line"></div>
          </p>
        </div>
        <div className="contact">
        <div className="iconsContact">
          <span>
            <FacebookIcon className="iconContact" />
          </span>
          <span>
            <LinkedInIcon className="iconContact" />
          </span>
          <span>
            <GoogleIcon className="iconContact" />
          </span>
          <span>
            <GitHubIcon className="iconContact" />
          </span>
        </div>
        <div className="contactText">
          <div className=" conItem">
            <span>
              <LocalFireDepartmentIcon className="iconContact" />
            </span>
            <div className="textCon"> Aleppo,Syria</div>
          </div>
          <div className="conItem">
            <span>
              <LocalPhoneRoundedIcon className="iconContact" />
            </span>
            <div className="textCon"> +9639446784</div>
          </div>
        </div>
      </div>
      </div>
      
      <ICONDesign />
    </>
  );
};
export default FOOTCON;

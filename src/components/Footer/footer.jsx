import React from "react";
import "./footer.css";
import FOOTCON from "./footContainer";
import WAVES from "./waves";

const FOOTER = () => {
  return (
    <>
      <footer class="footer">
      <div class="footerContainer">
      <div className="waveTopStyle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <FOOTCON />
      <WAVES />
      </div>
      </footer>
    </>
  );
};
export default FOOTER;

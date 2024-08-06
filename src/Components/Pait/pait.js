import React from "react";
import Image from "next/image";
import "./pait.css";

const Pait = () => {
  return (
    <div className="pait2">
      <div className="wordings2">
        <h1>Buy PAiT</h1>
        <p>Unlock profits exclusive to PAiT holders.</p>
        <div className="one">
          {" "}
          <span>USD $0.50</span> / 1 $PAIT
        </div>
        <button type="submit" className="buybutton2">
          <div className="pait-btn">
            <span>Buy Now </span>
            <Image src="/blackright.png" alt="image" width="16" height="17" />
          </div>
        </button>
      </div>
      <div className="logo2">
        <Image src="/Logo.png" alt="image" width="88" height="88" />
      </div>
    </div>
  );
};
export default Pait;

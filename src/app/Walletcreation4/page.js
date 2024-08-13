import React from "react";
import Image from "next/image";
import "./walletcreate4.css";

const Walletcreation4 = () => {
  return (
    <div className="createwallet">
      <div className="createwallet-container">
        <div className="top">
          <div className="logo">
            <Image src="/pait.png" alt="image" width="86" height="24" />
          </div>
          <div className="logo2">
            <Image src="/circlex.png" alt="image" width="24" height="24" />
          </div>
        </div>
        <div className="verify">Verify Secret Phrases</div>
        <div className="confirm">
          Confirm that you have saved the phrase by selecting the correct
          options.
        </div>
      </div>
    </div>
  );
};
export default Walletcreation4;

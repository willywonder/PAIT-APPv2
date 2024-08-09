import React from "react";
import Image from "next/image";

import "./walletcreate1.css";

const Walletcreation1 = () => {
  return (
    <div className="Container1">
      <div className="Inside-container">
        <div className="top">
          <div className="logo">
            <Image src="/pait.png" alt="image" width="86" height="24" />
          </div>
          <div className="logo2">
            <Image src="/circlex.png" alt="image" width="24" height="24" />
          </div>
        </div>
        <div className="connect">Connect Wallet</div>
        <div className="hand">
          <Image src="/hand.png" alt="image" width="256" height="212" />
        </div>
        <div className="text1">
          Your web3 wallet acts as your user account, and is where you store
          your assets like coins.
        </div>
        <button type="submit" className="createbtn">
          <div className="Inside-createbtn">
            <Image src="/plus.png" alt="image" width="24" height="24" />
            <span>Create New Wallet</span>
          </div>
        </button>

        <button type="submit" className="linkbtn">
          <div className="Inside-linkbtn">
            <Image src="/link2.png" alt="image" width="24" height="24" />
            <span>Link Existing Wallet</span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Walletcreation1;

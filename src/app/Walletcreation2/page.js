import React from "react";
import Image from "next/image";
import "./walletcreate2.css";

const Walletcreation2 = () => {
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
        <div className="create">Create New Wallet</div>
        <div className="Tips-container">
          <div className="tip1">
            <div className="">
              <Image
                src="/badge.png"
                alt="image"
                width="35"
                height="35"
              />
            </div>
            <div className="tip1-text">
              These are your wallet’s secret phrases. <span>They let you access the
              wallet.</span>
            </div>
          </div>
          <div className="tip1">
            <div className="">
              <Image
                src="/book.png"
                alt="image"
                width="35"
                height="35"
              />
            </div>
            <div className="tip1-text">
              Store there in a secure place <span>to keep your wallet safe.Never share them</span>
            </div>
          </div>
          <div className="tip1">
            <div className="">
              <Image
                src="/triangle-alert.png"
                alt="image"
                width="35"
                height="35"
              />
            </div>
            <div className="tip1-text">
             Your wallet cannot be recovered <span>if you lo0se these phrases.</span>
            </div>
          </div>
        </div>
        <button type="submit" className="phrase-loading">
          <div className="Inside-phrasebtn">
            <Image src="/loader-circle.png" alt="image" width="24" height="24" />
            <span>Creating Wallet</span>
          </div>
        </button>

      </div>
    </div>
  );
};
export default Walletcreation2;

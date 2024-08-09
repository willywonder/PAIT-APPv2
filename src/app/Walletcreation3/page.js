import React from "react";
import Image from "next/image";
import "./walletcreate3.css";

const Walletcreation3 = () => {
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
              <Image src="/badge.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              These are your wallet’s secret phrases.{" "}
              <span>They let you access the wallet.</span>
            </div>
          </div>
          <div className="tip1">
            <div className="">
              <Image src="/book.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              Store there in a secure place{" "}
              <span>to keep your wallet safe.Never share them</span>
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
              Your wallet cannot be recovered{" "}
              <span>if you lo0se these phrases.</span>
            </div>
          </div>
        </div>
        <div class="flex-container">
          <div class="column">
            <ul>
              <li>word</li>
              <li>quantam</li>
              <li>whimsical</li>
              <li>echos</li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li>galactic</li>
              <li>dream</li>
              <li>rainbow</li>
              <li>moonlit</li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li>velvet</li>
              <li>bliss</li>
              <li>serenade</li>
              <li>shine</li>
            </ul>
          </div>
        </div>
        <button type="submit" className="link-button">
          <div className="link-text">I Have Saved Them, Continue</div>
        </button>
      </div>
    </div>
  );
};
export default Walletcreation3;

import React from "react";
import Image from "next/image";
import "./token.css";
const Tokens = () => {
  return (
    <div className="solona">
      <div className="logo3">
        <Image src="/logo3.png" alt="image" width="56" height="56" />
      </div>
      <div className="all-component">
        <div className="sol">Solana</div>
        <div className="two">
          <span>USD $140.90</span> / 1 $SOL
        </div>
      </div>
      <div>
        <button type="submit" className="buttton">
          Buy
        </button>
      </div>
    </div>
  );
};
export default Tokens;

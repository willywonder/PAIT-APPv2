import React from "react";
import Image from "next/image";
import "./home.css";
// import { MdChevronRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="Main-container">
      <div className="home-logo">
        <Image src="/Group.svg" alt="image" width="121" height="33" />
      </div>
      <div className="pait">
        <div className="wordings">
          <h1>Buy PAiT</h1>
          <p>Unlock profits exclusive to PAiT holders.</p>
          <div className="one">
            {" "}
            <span>USD $0.50</span> / 1 $PAIT
          </div>
          <button type="submit" className="button">
            Buy Now
          </button>
        </div>
        <div className="logo">
          <Image src="/Logo.png" alt="image" width="88" height="88" />
        </div>
      </div>
      <div className="other">Other Tokens</div>
      <div className="solona">
        
        <div className="logo3">
          <Image src="/logo3.png" alt="image" width="56" height="56" />
        </div>
        <div className="all" >
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
      <div className="toncoin">
        
        <div className="logo3">
          <Image src="/image 1.png" alt="image" width="56" height="56" />
        </div>
        <div className="all2" >
           <div className="ton">Toncoin</div>
          <div className="three">
            <span>USD $7.50</span> / 1 $Ton
          </div>
        </div>
        <div>
          <button type="submit" className="buttton">
            Buy 
          </button>
        </div>
        
      </div>
    </div>
  );
};
export default Home;

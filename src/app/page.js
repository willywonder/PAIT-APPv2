"use client";
import React from "react";
import Image from "next/image";
import "./Home/home.css";
import Loading from "./loading";
import { useState, useEffect } from "react";
import Homelayout from "./Layout/homelayout";
import { useRouter } from "next/navigation";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();
  const handleConnectWallet = () => {
    router.push("/Homewithwallet");
  };

  useEffect(() => {
    const splashScreenShown = localStorage.getItem("splashScreenShown");
    if (!splashScreenShown) {
      localStorage.setItem("splashScreenShown", "true");
      setTimeout(() => setShowSplash(false), 3000);
    } else {
      setShowSplash(false);
    }
  }, []);

  if (showSplash) return <Loading />;

  return (
    <Homelayout>
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
            <button className="buybutton">
              <div className="Buyy-btn">
                <span>Buy Now </span>
                <Image
                  src="/blackright.png"
                  alt="image"
                  width="16"
                  height="17"
                />
              </div>
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
          <div className="all">
            <div className="sol">Solana</div>
            <div className="two">
              <span>USD $140.90</span> / 1 $SOL
            </div>
          </div>
          <div className="sol-btn">
            <button type="submit" className="buttton">
              <div className="Inside-btn">
                <span>Buy</span>
                <Image
                  src="/chevronright.png"
                  alt="image"
                  width="16"
                  height="17"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="toncoin">
          <div className="logo3">
            <Image src="/image 1.png" alt="image" width="56" height="56" />
          </div>
          <div className="all2">
            <div className="ton">Toncoin</div>
            <div className="three">
              <span>USD $7.50</span> / 1 $Ton
            </div>
          </div>
          <div className="ton-btn">
            <button type="submit" className="buttton">
              <div className="Inside-btn">
                <span>Buy</span>
                <Image
                  src="/chevronright.png"
                  alt="image"
                  width="16"
                  height="17"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="button-container">
          <button className="walletbtn" onClick={handleConnectWallet}>
            <div className="wallet">
              <Image src="/link.png" alt="image" width="16" height="16" />
              <span>Connect Wallet</span>
            </div>
          </button>
        </div>
      </div>
    </Homelayout>
  );
};
export default Home;

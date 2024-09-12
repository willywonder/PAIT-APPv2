"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Home/home.css";
import Loading from "./loading";
import Homelayout from "./Layout/homelayout";
import { useRouter } from "next/navigation";
import { HiChevronRight } from "react-icons/hi";
import Walletcreation1 from "../Components/Walletcreation1/page";

const coins = [
  {
    name: "Solana",
    price: "USD $140.90",
    symbol: "SOL",
    logo: "/logo3.png",
  },
  {
    name: "Toncoin",
    price: "USD $7.50",
    symbol: "Ton",
    logo: "/image 1.png",
  },
];

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const splashScreenShown = localStorage.getItem("splashScreenShown");
    if (!splashScreenShown) {
      localStorage.setItem("splashScreenShown", "true");
      setTimeout(() => setShowSplash(false), 3000);
    } else {
      setShowSplash(false);
    }
  }, []);

  const handleConnectWallet = () => {
    setShowWalletModal(true);
  };

  const handleCloseModal = () => {
    setShowWalletModal(false);
  };

  if (showSplash) return <Loading />;

  return (
    <Homelayout>
      <div className="Main-container">
        <div className="home-logo">
          <Image src="/Group.svg" alt="image" width="121" height="33" />
        </div>
        <div className="coins-container">
          <div className="pait">
            <div className="wordings">
              <h2>Buy PAiT</h2>
              <p>Unlock profits exclusive to PAiT holders.</p>
              <div className="one">
                <span>USD $0.50</span> / 1 $PAIT
              </div>
              <button className="buybutton">
                Buy Now <HiChevronRight width={16} height={16} />{" "}
              </button>
            </div>
            <div className="logo">
              <Image src="/Logo.png" alt="image" width="88" height="88" />
            </div>
          </div>
          <div className="coins-header">Other Tokens</div>
          {coins.map((coin, index) => (
            <div className="coinscard" key={index}>
              <div className="wrapper">
                <Image
                  src={coin.logo}
                  alt={`${coin.name} logo`}
                  width="56"
                  height="56"
                />
                <div className="all">
                  <div className="name">{coin.name}</div>
                  <div className="two">
                    <span>{coin.price}</span> / 1 ${coin.symbol}
                  </div>
                </div>
              </div>
               <button type="submit" className="token-button">
                <span>Buy</span>
                <Image
                  src="/chevronright.png"
                  alt="buy chevron"
                  width="16"
                  height="17"
                />
              </button>
            </div>
          ))}
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
      {showWalletModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Walletcreation1 onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </Homelayout>
  );
};

export default Home;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./walletcreate2.css";
import { useRouter } from "next/navigation";
import Walletcreation3 from "../Walletcreation3/page";

const Walletcreation2 = ({ closeModal }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showWalletcreation3Modal, setShowWalletcreation3Modal] = useState(false);

  const handleGenerateSecretPhrase = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowWalletcreation3Modal(true);
    }, 2000);
  };

  const closeWalletcreation3Modal = () => {
    setShowWalletcreation3Modal(false);
    closeModal();
  };

  return (
    <div className="createwallet">
      <div className="createwallet-container">
        <div className="top">
          <div className="logo">
            <Image src="/pait.png" alt="image" width="86" height="24" />
          </div>
          <div className="logo2" onClick={closeModal}>
            <Image src="/circlex.png" alt="image" width="24" height="24" />
          </div>
        </div>
        <div className="create">Create New Wallet</div>
        <div className="Tips-container">
          <div className="tip1">
            <div>
              <Image src="/badge.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              These are your wallet's secret phrases.{" "}
              <span>They let you access the wallet.</span>
            </div>
          </div>
          <div className="tip1">
            <div>
              <Image src="/book.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              Store them in a secure place{" "}
              <span>to keep your wallet safe. Never share them</span>
            </div>
          </div>
          <div className="tip1">
            <div>
              <Image src="/triangle-alert.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              Your wallet cannot be recovered{" "}
              <span>if you lose these phrases.</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleGenerateSecretPhrase}
          className={`phrase-loading ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          <div className="Inside-phrasebtn">
            <Image
              src="/loader-circle.png"
              alt="image"
              width="24"
              height="24"
              className={isLoading ? "rotating" : ""}
            />
            <span>{isLoading ? "Creating Wallet" : "Create Wallet"}</span>
          </div>
        </button>
      </div>

      {showWalletcreation3Modal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Walletcreation3 closeModal={closeWalletcreation3Modal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Walletcreation2;
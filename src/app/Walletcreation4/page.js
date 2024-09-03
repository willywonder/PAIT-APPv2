"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./walletcreate4.css";

const Walletcreation4 = () => {
  const phrases = ["first", "second", "last"];
  
  // Updated 2D array with different words for each phrase
  const words = [
    ["dreams", "vision", "future"],  // Words for the first phrase
    ["quantum", "velvet", "galactic"],  // Words for the second phrase
    ["shine", "rainbow", "serenade"]  // Words for the last phrase
  ];

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/Walletcreation3");
  };

  const handleFinish = () => {
    router.push("/Walletcreation5");
  };

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
          Confirm that you have saved the phrase by selecting the correct options.
        </div>

        {phrases.map((phrase, index) => (
          <div key={index}>
            <div className="header">
              What is the <span>{phrase}</span> phrase?
            </div>
            <div className="word-container">
              {words[index].map((word, i) => (
                <span key={i} className="word">
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="forgot-text" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faArrowLeft} /> I forgot to write them down, go back
        </div>
        <button className="finish-btn" onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};

export default Walletcreation4;

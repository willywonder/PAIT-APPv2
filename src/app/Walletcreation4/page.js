"use client";
import React from "react";
import Image from "next/image";
import "./walletcreate4.css";
import { useRouter } from "next/navigation";

const Walletcreation4 = () => {
  const phrases = ["first", "second", "last"];
  const words = ["dreams", "Word", "echoes"];
  const handleGoBack = () => {
    router.push("/Walletcreation3");
  };
  const handleFinish = () => {
    router.push("/Walletcreation5");
  };
  const router = useRouter();
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

        {phrases.map((phrase, index) => (
          <div key={index}>
            <div className="header">
              What is the <span>{phrase}</span> phrase?
            </div>
            <div className="word-container">
              {words.map((word, i) => (
                <span key={i} className="word">
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="forgot-text" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          &lt; I forgot to write them down, go back
        </div>
        <button className="finish-btn" onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};

export default Walletcreation4;

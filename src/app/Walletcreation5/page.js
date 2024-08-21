"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./walletcreate5.css";
import { useRouter } from "next/navigation";
const Walletcreation5 = () => {
  const phrases = ["first", "second", "last"];
  const words = ["dreams", "Word", "echoes"];

  // State to keep track of the selected word for each phrase
  const [selectedWords, setSelectedWords] = useState(Array(phrases.length).fill(""));

  const router = useRouter();

  // Function to handle word selection for a specific phrase
  const handleWordClick = (phraseIndex, word) => {
    const newSelectedWords = [...selectedWords];
    newSelectedWords[phraseIndex] = word;
    setSelectedWords(newSelectedWords);
  };
  const handleGoBack =() =>{
    router.push("/Walletcreation4");
  }

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
        {phrases.map((phrase, phraseIndex) => (
          <div key={phraseIndex}>
            <div className="header">
              What is the <span>{phrase}</span> phrase?
            </div>
            <div className="word-container">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={`word ${selectedWords[phraseIndex] === word ? "selected" : ""}`}
                  onClick={() => handleWordClick(phraseIndex, word)}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="forgot-text" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
          &lt; I forgot to write them down, go back
        </div>
        <button className="finish">Finish</button>
      </div>
    </div>
  );
};

export default Walletcreation5;

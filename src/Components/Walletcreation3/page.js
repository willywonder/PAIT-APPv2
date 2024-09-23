"use client";
import React from "react";
import Image from "next/image";
import "./walletcreate3.css";
import { useRouter } from "next/navigation";

const Walletcreation3 = ({ closeModal }) => {
  const router = useRouter();
  const handleVerifySecretPhrase = () => {
    router.push("/Walletcreation4");
    closeModal();
  };

  const words = [
    ['word', 'quantam', 'whimsical', 'echos'],
    ['galactic', 'dream', 'rainbow', 'moonlit'],
    ['velvet', 'bliss', 'serenade', 'shine']
  ];

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
            <div className="">
              <Image src="/badge.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              These are your wallet&apos;s Secret Phrases.{" "}
              <span>They let you access the wallet.</span>
            </div>
          </div>
          <div className="tip1">
            <div className="">
              <Image src="/book.png" alt="image" width="35" height="35" />
            </div>
            <div className="tip1-text">
              Store them in a secure place{" "}
              <span>to keep your wallet safe. Never share them</span>
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
              <span>if you lose these phrases.</span>
            </div>
          </div>
        </div>
        <div className="flex-container">
          {words.map((column, columnIndex) => (
            <div className="column" key={`column-${columnIndex}`}>
              <ul>
                {column.map((word, wordIndex) => (
                  <li key={`word-${columnIndex}-${wordIndex}`}>{word}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button onClick={handleVerifySecretPhrase} className="link-button">
          <div className="link-text">I Have Saved Them, Continue</div>
        </button>
      </div>
    </div>
  );
};

export default Walletcreation3;
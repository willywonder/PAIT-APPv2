"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./walletcreate1.css";
import Walletcreation2 from "../Walletcreation2/page";

const Walletcreation1 = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleCreateNewWallet = () => {
    setShowModal(true);
  };

  const handleLinkExistingWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        console.log("Connected account:", userAddress);
        router.push("/dashboard");
      } catch (err) {
        console.error("Failed to connect wallet", err);
      }
    } else {
      console.log("MetaMask is not installed!");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Inside-container">
      <div className="top">
        <div className="logo">
          <Image src="/pait.png" alt="image" width="86" height="24" />
        </div>
        <div className="logo2" onClick={onClose}>
          <Image src="/circlex.png" alt="image" width="24" height="24" />
        </div>
      </div>

      <div className="content-wrapper">
        <div className="connect">Connect Wallet</div>
        <div className="hand">
          <Image src="/hand.png" alt="image" width="256" height="212" />
        </div>
        <div className="text1">
          Your web3 wallet acts as your user account, and
          <br /> is where you store your assets like coins.
        </div>
      </div>
      <div className="buttons-wrapper">
        <button className="createbtn" onClick={handleCreateNewWallet}>
          <div className="Inside-createbtn">
            <Image src="/plus.png" alt="image" width="24" height="24" />
            <span>Create New Wallet</span>
          </div>
        </button>
        <button
          type="submit"
          className="linkbtn"
          onClick={handleLinkExistingWallet}
        >
          <div className="Inside-linkbtn">
            <Image src="/link2.png" alt="image" width="24" height="24" />
            <span>Link Existing Wallet</span>
          </div>
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <Walletcreation2 closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Walletcreation1;
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./walletcreate1.css";
import * as ethers from 'ethers';

const Walletcreation1 = () => {
  const router = useRouter();

  const handleCreateNewWallet = () => {
    router.push("/Walletcreation2");
  };

  const handleLinkExistingWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an ethers.js provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer (linked wallet)
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        console.log("Connected account:", userAddress);

        // After successful connection, redirect or perform other actions
        router.push("/dashboard"); // Change this route to wherever you want to redirect the user
      } catch (err) {
        console.error("Failed to connect wallet", err);
      }
    } else {
      console.log('MetaMask is not installed!');
    }
  };

  return (
    <div className="Container1" >
      <div className="Inside-container">
        <div className="top">
          <div className="logo">
            <Image src="/pait.png" alt="image" width="86" height="24" />
          </div>
          <div className="logo2">
            <Image src="/circlex.png" alt="image" width="24" height="24" />
          </div>
        </div>
        <div className="connect">Connect Wallet</div>
        <div className="hand">
          <Image src="/hand.png" alt="image" width="256" height="212" />
        </div>
        <div className="text1">
          Your web3 wallet acts as your user account, and is where you store
          your assets like coins.
        </div>
        <button className="createbtn" onClick={handleCreateNewWallet}>
          <div className="Inside-createbtn">
            <Image src="/plus.png" alt="image" width="24" height="24" />
            <span>Create New Wallet</span>
          </div>
        </button>

        <button type="submit" className="linkbtn" onClick={handleLinkExistingWallet}>
          <div className="Inside-linkbtn">
            <Image src="/link2.png" alt="image" width="24" height="24" />
            <span>Link Existing Wallet</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Walletcreation1;

import React from "react";
import Image from "next/image";
import "./homewallet.css";
import Pait from "../../Components/Pait/pait";
import Dock from "../../Components/Dock/dock";

const Homewithwallet = () => {
  return (
    <div className="Main-container">
      <div className="top">
        <div className="balance">My Balance</div>
        <div className="walletimg">
          <Image src="/wallet.png" alt="image" width="16" height="16" />
          <div className="amountleft"> 0x******uio </div>
        </div>
      </div>
      <div className="Usd">USDT $30,704</div>
      <div className="all">
        <div className="row1">
          <div className="numbers">
            54,000.0 <span>PAIT</span>
          </div>
          <div className="numbers">
            <span>USDT</span> $27,000
          </div>
        </div>
        <div className="row2">
          <div className="numbers">
            24.64 <span>SOL</span>
          </div>
          <div className="numbers">
            <span>USDT</span> $3,449
          </div>
        </div>
        <div className="row3">
          <div className="numbers">
            34.04<span>Ton</span>
          </div>
          <div className="numbers">
            <span>USDT</span> $255
          </div>
        </div>
      </div>
      <div className="pait-component">
        <Pait />
      </div>
      <div className="other">Other Tokens</div>
      <div className="solona">
        <div className="logo3">
          <Image src="/logo3.png" alt="image" width="56" height="56" />
        </div>
        <div className="Sol-container">
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
        <div className=" Ton-logo3">
          <Image src="/image 1.png" alt="image" width="56" height="56" />
        </div>
        <div className="Ton-container">
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
      <div className="Dock2">
        <Dock />
      </div>
    </div>
  );
};
export default Homewithwallet;

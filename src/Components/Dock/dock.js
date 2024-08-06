import React from "react";
import Image from "next/image";
import "./dock.css";

const Dock = () => {
  return (
    <div className="Dock-container ">
      <button type="submit" className="button">
        <div className="button-content">
          <Image src="/whitelogo.png" alt="image" width="24" height="16" />
          <span>Home</span>
        </div>
      </button>
      <button type="submit" className="button">
        <div className="button-content2">
          <Image src="/copy.png" alt="image" width="24" height="24" />
          <span>copy</span>
        </div>
      </button>
      <button type="submit" className="button">
        <div className="button-content2">
          <Image src="/candlestick.png" alt="image" width="24" height="24" />
          <span>trade</span>
        </div>
      </button>
      <button type="submit" className="button">
        <div className="button-content2">
          <Image src="/coins.png" alt="image" width="24" height="24" />
          <span>meme</span>
        </div>
      </button>
    </div>
  );
};
export default Dock;

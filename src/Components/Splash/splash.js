import React from "react";
import Image from "next/image";

import "./Splash.css";

const Splash = () => {
  return (
    <div className="Splashcontainer">
      <div className="grpicon">
        <Image src="/Group.svg" alt="image" width="257" height="71" />
      </div>
    </div>
  );
};
export default Splash;

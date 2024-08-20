import Dock from "@/Components/Dock/dock";
import React from "react";

export default function Homelayout({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       
      }}
    >
      <main>{children}</main>
      <footer>
        <Dock />
      </footer>
    </div>
  );
}

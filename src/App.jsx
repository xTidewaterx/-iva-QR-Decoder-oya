import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { FileSelector } from "./components/FileSelector";
//import QrDecoder from './components/QrDecoder';
// ES6 import
import jsQR from "jsqr";

//context imports::
import { createContext } from "react";
import QRDecoder from "./components/QrDecoder";

export const qrContext = createContext();

function App() {
  const [qrCodeInputValue, setQrCodeInputValue] = useState("e");
  const [imageData, setImageData] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const options = {
    inversionAttempts: "dontInvert",
    // try to decode the QR code even if it is not perfectly aligned
    // to the camera. This is useful for QR codes that are not
  };

  useEffect(() => {
    console.log("we got imageData:", imageData);
  }, [imageData, width, height]);
  useEffect(() => {
    if (imageData) {
      const img = new Image();
      img.src = imageData;
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
      };
    }
  }, [imageData]);

  const QrReader = () => {
    console.log(imageData, width, height, options);

    const code = jsQR(imageData, width, height);

    if (code) {
      console.log("Found QR code", code);
    }
  };

  useEffect(() => {
    console.log("qrCodeInputValue: ", qrCodeInputValue);
  }, [qrCodeInputValue]);

  return (
    <qrContext.Provider
      value={{ imageData, setImageData, width, setWidth, height, setHeight }}
    >
      <>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>React QR Scanner</h1>

        <QRCode value={qrCodeInputValue} />
        <div>
          <h2>Add Value for QR Code:</h2>
          <input
            placeholder="value for QR code"
            onChange={(e) => {
              setQrCodeInputValue(e.target.value);
            }}
          />
        </div>

      
      </>

    
<h2>Add QR code for scanning:</h2>
      <QRDecoder />
    </qrContext.Provider>
  );
}

export default App;

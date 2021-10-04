import React, { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <main className="grid">
      <Navigation />
      <div className="sr-wrapper">
        <div className="sr-container">
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  );
}

export default MyApp;

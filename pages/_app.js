import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.css";

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      console.log("if");
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      console.log("elif");
      timeoutId = setTimeout(() => {
        console.log("deltim");
        setShouldRender(false);
      }, delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsmounted] = useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 500);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="grid">
        <Navigation setIsmounted={setIsmounted} />
        {shouldRenderChild && (
          <div
            className={`sr-wrapper ${isMounted === false ? "sr_remove" : null}`}
          >
            <div className="sr-container">
              <Component {...pageProps} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default MyApp;

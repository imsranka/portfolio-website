import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation/Navigation";
import { NavShowContext } from "../utils/context/navContext";
import "../styles/globals.css";

function useDelayUnmount({ isMounted, setIsmounted }, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
        // setIsmounted(true);
      }, delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

function MyApp({ Component, pageProps }) {
  const [isMounted, setIsmounted] = useState(true);
  const shouldRenderChild = useDelayUnmount({ isMounted, setIsmounted }, 500);
  const [showNav, setShowNav] = useState(true);
  console.log({
    Component,
    isMounted,
    shouldRenderChild,
    route: useRouter().pathname,
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavShowContext.Provider value={{ showNav, setShowNav }}>
        <main className={`${showNav ? "grid_with_nav" : "grid_no_nav"}`}>
          {showNav && <Navigation setIsmounted={setIsmounted} />}
          {shouldRenderChild && (
            <div
              className={`sr-wrapper ${
                isMounted === false ? "sr_remove" : null
              }`}
            >
              <div className="sr-container">
                <Component {...pageProps} />
              </div>
            </div>
          )}
        </main>
      </NavShowContext.Provider>
    </>
  );
}

export default MyApp;

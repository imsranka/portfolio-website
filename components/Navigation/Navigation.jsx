import React from "react";
import Link from "next/link";
import navStyles from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  console.log(router);

  return (
    <nav className={navStyles.nav_wrapper}>
      <h3 className={navStyles.logo}>Sakshi Ranka</h3>
      <h1 className={navStyles.nav_title}>Frontend</h1>
      <h1 className={navStyles.nav_title}>Developer</h1>
      <div className={navStyles.nav_menu}>
        <span
          className={`${navStyles.nav_link} ${
            router.pathname === "/"
              ? navStyles.nav_strike
              : navStyles.nav_no_strike
          }`}
        >
          <Link href="/">
            <a>home</a>
          </Link>
        </span>
        {/* <span
          className={`${navStyles.nav_link} ${
            router.pathname === "/about"
              ? navStyles.nav_strike
              : navStyles.nav_no_strike
          }`}
        >
          <Link href="/about">
            <a>about</a>
          </Link>
        </span> */}
        <span
          className={`${navStyles.nav_link} ${
            router.pathname === "/works"
              ? navStyles.nav_strike
              : navStyles.no_strike
          } navStyles.nav_link`}
        >
          <Link href="/works">
            <a>works</a>
          </Link>
        </span>
        <span
          className={`${navStyles.nav_link} ${
            router.pathname === "/contact"
              ? navStyles.nav_strike
              : navStyles.no_strike
          } navStyles.nav_link`}
        >
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;

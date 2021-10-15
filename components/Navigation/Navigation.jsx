import React from "react";
import navStyles from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const Navigation = ({ setIsmounted }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsmounted(false);
    let { href } = e.target;
    let mID = setTimeout(() => {
      router.push(href);
      setIsmounted(true);
      clearInterval(mID);
    }, 500);
  };

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
          {/* <Link href="/"> */}
          <a href={"/"} onClick={handleClick}>
            home
          </a>
          {/* </Link> */}
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
          <a href={"/works"} onClick={handleClick}>
            works
          </a>
        </span>
        <span
          className={`${navStyles.nav_link} ${
            router.pathname === "/contact"
              ? navStyles.nav_strike
              : navStyles.no_strike
          } navStyles.nav_link`}
        >
          <a href={"/contact"} onClick={handleClick}>
            contact
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;

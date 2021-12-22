import React, { useEffect } from "react";
import navStyles from "../../styles/Navigation.module.css";

const Logo = (props) => {
  const { className, ...rest } = props;
  useEffect(() => {
    console.log(props);
  }, [props]);
  return <h3 className={`${navStyles.logo}`}>Sakshi Ranka</h3>;
};

export default Logo;

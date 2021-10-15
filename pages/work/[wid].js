import { useRouter } from "next/dist/client/router";
import React from "react";

const Wid = () => {
  const router = useRouter();
  return <div style={{ color: "black" }}>{router.query.wid}</div>;
};

export default Wid;

import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { NavShowContext } from "../../utils/context/navContext";
import pStyle from "../../styles/Project.module.css";
import Logo from "../../components/Name/Logo";
// import hexOverlay from "../../assets/images/overlays-02.svg";
import { projects } from "../../shared/data";
import Head from "next/head";

function getProjectInfo(wid) {
  console.log(wid);
  return projects.find(
    (element) =>
      element.name.toLowerCase() === wid.replace(/-/g, " ").toLowerCase()
  );
}

const Wid = () => {
  const router = useRouter();
  const { wid } = router.query;
  console.log(wid);
  const { showNav, setShowNav } = useContext(NavShowContext);
  const projInfo = useMemo(() => getProjectInfo(wid), [wid]);

  useEffect(() => {
    setShowNav(false);
    return () => {
      setShowNav(true);
    };
  }, []);

  useEffect(() => {
    // let x = projects.find(
    //   (element) =>
    //     element.name.toLowerCase() === wid.replace(/-/g, " ").toLowerCase()
    // );
    console.log(projInfo);
  }, [projInfo]);

  return (
    <>
      <Head>
        <title>SR | {projInfo.name}</title>
      </Head>
      <div
        className={pStyle.project_wrapper}
        style={{
          color: "black",
          overflow: "auto",
          height: "100vh",
        }}
      >
        <div className={pStyle.logo_wrapper}>
          <Logo />
        </div>

        <div className={pStyle.close_btn} onClick={() => router.push("/work")}>
          X
        </div>
        {/* <h3 className={pStyle.banner}>{router.query.wid}</h3> */}
        <article className={pStyle.outer_container}>
          <section className={pStyle.concept}>
            {/* <Image src={hexOverlay} /> */}
            <div className={`${pStyle.hero_bg}`}>
              <div className={`${pStyle.title} ${pStyle.center}`}>
                <span className={`${pStyle.text_overlay} ${pStyle.center}`}>
                  {projInfo.name}
                </span>
              </div>
            </div>

            {projInfo && (
              <div className={pStyle.content}>
                <p>{projInfo.content[0]}</p>
                <p>{projInfo.content[1]}</p>
              </div>
            )}
          </section>
          <section>
            {projInfo.images?.map((img, i) => (
              <div key={i + img} className={pStyle.image_container}>
                <img src={img.path} alt={img.alt} width="100%" />
                <p className={pStyle.image_caption}>{img.caption}</p>
              </div>
            ))}
          </section>
          <aside>
            <span className={pStyle.credits_main}>Credits</span>
            <div>
              {projInfo.credits.map((name, i) => (
                <p key={i + name} className={pStyle.credit_name}>
                  {name}
                </p>
              ))}
            </div>
          </aside>
        </article>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  return {
    props: {
      wid: context.query.wid,
    }, // will be passed to the page component as props
  };
}

export default Wid;

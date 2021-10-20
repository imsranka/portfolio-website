import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect } from "react";
import { NavShowContext } from "../../utils/context/navContext";
import pStyle from "../../styles/Project.module.css";

const Wid = () => {
  const router = useRouter();
  const { showNav, setShowNav } = useContext(NavShowContext);

  useEffect(() => {
    setShowNav(false);
    return () => {
      setShowNav(true);
    };
  }, []);
  return (
    <div
      style={{
        color: "black",
        overflow: "auto",
        height: "100vh",
      }}
    >
      <div className={pStyle.close_btn} onClick={() => router.push("/works")}>
        X
      </div>
      <h3 className={pStyle.banner}>{router.query.wid}</h3>
      <article className={pStyle.outer_container}>
        <section className={pStyle.concept}>
          <span className={pStyle.title}>Concept</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.design}>
          <span className={pStyle.title}>Design</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.concept}>
          <span className={pStyle.title}>Concept</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.design}>
          <span className={pStyle.title}>Design</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.concept}>
          <span className={pStyle.title}>Concept</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.design}>
          <span className={pStyle.title}>Design</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.concept}>
          <span className={pStyle.title}>Concept</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
        <section className={pStyle.design}>
          <span className={pStyle.title}>Design</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi
            sit amet augue tristique ullamcorper non quis orci. Aenean enim est,
            laoreet fringilla tincidunt et, fringilla non tellus. Fusce molestie
            ex at lacinia auctor. Proin elementum tortor vitae efficitur
            porttitor. Morbi sed finibus nibh. Nullam posuere porta nunc vel
            ullamcorper. Phasellus suscipit mi ac velit aliquet maximus.
          </div>
        </section>
      </article>
    </div>
  );
};

export default Wid;

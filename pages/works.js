import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { projects } from "../shared/data";
import wStyles from "../styles/Works.module.css";

const Works = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [classArr, setClassArr] = useState([]);
  const [initClassArr, setInitClassArr] = useState([]);
  let c1 = wStyles.work_slider;
  let c2 = wStyles.work_slider__active;
  let c3 = wStyles.work_slider__no_transition;
  let c4 = wStyles.work_slider__prev;

  // let classes = useMemo(() => {
  //   let c1 = wStyles.work_slider;
  //   let c2 = wStyles.work_slider__active;
  //   let c3 = wStyles.work_slider__no_transition;
  //   let c4 = wStyles.work_slider__prev;
  //   let x = [];

  //   projects.forEach((proj, i) => {
  //     if (activeSlide === i) {
  //       x[i] = [c1, c2].join(" ");
  //     } else if (activeSlide - 1 === i) {
  //       x[i] = [c1, c4].join(" ");
  //     } else {
  //       x[i] = [c1, c3].join(" ");
  //     }
  //   });
  //   return x;
  // }, [projects]);

  const nextSlide = (curr) => {
    let len = projects.length;
    let x = [];

    curr === len - 1 ? setActiveSlide(0) : setActiveSlide((prev) => ++prev);

    if (curr === 0) {
      x[0] = [c1, c4].join(" ");
      projects.forEach((p, i) => {
        if (i !== 0) {
          x[i] = [c1, c3].join(" ");
        }
      });
    } else {
      projects.forEach((p, i) => {
        if (i === curr) {
          x[i] = [c1, c4].join(" ");
        } else {
          x[i] = [c1].join(" ");
        }
      });
    }
    setClassArr(x);
  };

  const backSlide = (curr) => {
    let len = projects.length;
    let x = [];
    curr === 0 ? setActiveSlide(len - 1) : setActiveSlide((prev) => prev - 1);
    if (curr === 0) {
      x[0] = [c1].join(" ");
      x[len - 1] = [c1, c4, c3].join(" ");

      projects.forEach((p, i) => {
        if (i !== 0 && i !== len - 1) {
          x[i] = [c1];
        }
      });
    } else {
      projects.forEach((p, i) => {
        if (i === curr - 1) {
          x[i] = [c1, c4, c3].join(" ");
        } else x[i] = [c1].join(" ");
      });
    }
    setClassArr(x);
  };

  const classChangeOnTrans = () => {
    let x = [];

    projects.forEach((proj, i) => {
      if (activeSlide === i) {
        x[i] = [c1, c2].join(" ");
      } else {
        x[i] = [c1, c3].join(" ");
      }
    });
    setClassArr(x);
    setTimeout(function () {
      let x = [];

      projects.forEach((proj, i) => {
        if (activeSlide === i) {
          x[i] = [c1, c2].join(" ");
        } else {
          x[i] = [c1].join(" ");
        }
      });
      setClassArr(x);
    }, 100);
  };

  useLayoutEffect(() => {
    let x = [];

    projects.forEach((proj, i) => {
      if (activeSlide === i) {
        x[i] = [c1, c2].join(" ");
      } else if (activeSlide - 1 === i) {
        x[i] = [c1, c3].join(" ");
      } else {
        x[i] = [c1, c3].join(" ");
      }
    });
    setClassArr(x);
  }, []);

  return (
    <div className={wStyles.work_wrapper}>
      <ul className={wStyles.work_container}>
        <button
          className={wStyles.button_left}
          onClick={() => backSlide(activeSlide)}
        >
          &lt;
        </button>
        <button
          className={wStyles.button_right}
          onClick={() => nextSlide(activeSlide)}
        >
          &gt;
        </button>
        {projects.map((proj, i) => (
          <li
            className={classArr[i]}
            key={proj.name}
            onTransitionEnd={classChangeOnTrans}
            onLoad={(i) => console.log("hi", i)}
          >
            <article
              className={wStyles.work_slider__content}
              style={{ background: `${proj.color}` }}
            >
              <span>{proj.id}</span>
              <p>{proj.name}</p>
              <p>{proj.role}</p>
              <p>{proj.org}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;

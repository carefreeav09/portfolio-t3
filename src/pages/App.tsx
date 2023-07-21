/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { gsap } from "gsap";
import { Timeline, Tween } from "react-gsap";

import Image from "next/image";

import ProjectList from "~/components/Projects";

import logo from "../assets/images/newlogo.png";

const App = () => {
  const [openedId, setOpenedId] = React.useState<number | null>(null);
  const handleClose = () => {
    const opened = openedId;
    setOpenedId(null);
    const timeline = gsap.timeline();

    timeline.to(`.close-icon`, {
      opacity: 0,
    });
    timeline.to(`.item-content`, {
      opacity: 0,
      duration: 0.1,
    });

    timeline.to(
      `.page-item`,
      {
        height: "200px",
        width: "200px",
        duration: 1.5,
        ease: "expo.inOut",
      },
      ">"
    );

    timeline.to(".page-item", {
      opacity: 0,
      display: "flex",
      duration: 0,
    });

    timeline.to(`.item-wrapper`, {
      opacity: 0,
      display: "none",
      duration: 0,
    });

    timeline.to(`.item-logo`, {
      display: "flex",
      duration: 0.1,
      opacity: 1,
    });

    timeline.to(".page-item", {
      opacity: 1,
      duration: 0.5,
    });
  };

  const handleGSAPTransitionFunctions = (id: number, array: number[]) => {
    setOpenedId(id);
    const timeline = gsap.timeline();

    // control the view inside the box;
    timeline.to(`.item-logo`, {
      opacity: 0,
      duration: 0.5,
    });
    timeline.to(`.item-logo`, {
      display: "none",
      duration: 0.1,
    });

    timeline.to(".item-content", {
      opacity: 0,
    });

    timeline.fromTo(
      `#page-item-${id}`,
      {
        height: "200px",
        width: "200px",
        backgroundColor: "#121212",
      },
      {
        height: "100vh",
        width: "100vw",
        duration: 1.5,
        ease: "expo.inOut",
        backgroundColor: "#121212",
      }
    );

    timeline.to(`.item-wrapper`, {
      display: "block",
      duration: 0.1,
      height: "100vh",
      width: "100vw",
      opacity: 1,
      backgroundColor: "#121212",
    });

    timeline.to(
      `.item-content`,
      {
        opacity: 1,
      },
      ">"
    );

    timeline.to(
      `.item-wrapper`,
      {
        opacity: 1,
        duration: 0.5,
      },
      ">"
    );

    //control the animation going up

    array.forEach((item) => {
      void gsap.to(`#page-item-${item}`, {
        display: "none",
        duration: 0,
      });
    });

    // control the close icon

    timeline.to(`.close-icon`, {
      opacity: 1,
    });
  };
  return (
    <div className="main-container main-container-scroll">
      <Timeline
        target={
          <React.Fragment>
            <div className="page-section">
              <div className="navbar-wrapper">
                <div className="navbar-brand">
                  <Image
                    src={logo}
                    alt="new-logo"
                    style={{
                      height: "60px",
                      width: "60px",
                    }}
                  />
                </div>
              </div>
              <div className="page-items-container">
                <div
                  className="close-icon text-lg font-bold"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  X
                </div>

                <div
                  id="page-item-1"
                  onClick={(event) => {
                    handleGSAPTransitionFunctions(1, [2]);
                    event.stopPropagation();
                  }}
                  className="page-item"
                >
                  <div className="item-logo">Projects</div>

                  <div
                    className="item-wrapper"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ProjectList />
                  </div>
                </div>
                <div
                  id="page-item-2"
                  className="page-item"
                  onClick={() => {
                    handleGSAPTransitionFunctions(2, [1]);
                  }}
                >
                  <div className="item-logo">Tech Stacks</div>

                  <div
                    className="item-wrapper"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ProjectList />
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      >
        <Tween
          target={0}
          from={{
            opacity: 0,
            scale: 0.001,
          }}
          to={{
            opacity: 1,
            scale: 1,
          }}
          duration={1}
        />
      </Timeline>
    </div>
  );
};

export default App;

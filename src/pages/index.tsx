import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap } from "gsap";
import { Timeline, Tween } from "react-gsap";

const Home = () => {
  return (
    <>
      <Timeline
        target={
          <React.Fragment>
            <div className="hello-world"> Hello world </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                background: "#121212",
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                borderRadius: "50%",
              }}
            />

            <div className="nightmare-div">
              <div>XD</div>
              <div>XDXD</div>
            </div>
          </React.Fragment>
        }
        wrapper={
          <div
            style={{
              width: "100%",
              height: "100vh",
              background: "#f9f9f9",
              position: "relative",
            }}
          />
        }
      >
        <Tween to={{ opacity: 1 }} duration={3} delay={1} target={0} />
        <Tween
          to={{
            opacity: 0,
          }}
          target={0}
          duration={1}
          delay={1}
        />
        <Tween
          target={1}
          to={{
            opacity: 1,
          }}
        />
        <Tween
          target={1}
          to={{
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            transform: "translate(0%, 0%)",
            borderRadius: "0%",
          }}
          duration={1}
        />

        <Tween
          target={2}
          from={{
            x: -200,
          }}
          to={{ x: 0, opacity: 1 }}
          duration={2}
        />
      </Timeline>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Timeline, Tween } from "react-gsap";
import App from "./App";

const Home = () => {
  // 8 seconds for full animation, 0 for none.
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  if (timer > 0) {
    return (
      <>
        <Timeline
          target={
            <React.Fragment>
              <div className="hello-world"> Welcome </div>
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

              <div className="main-container main-container-animated">
                Loading...
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
          <Tween to={{ opacity: 1 }} duration={2} delay={1} target={0} />
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

          <Tween target={2} to={{ x: 0, opacity: 1 }} duration={1} />
        </Timeline>
      </>
    );
  }

  return <App />;
};

export default Home;

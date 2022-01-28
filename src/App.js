import React from "react";
import LeftContainer from "./pages/LeftContainer";
import RightContainer from "./pages/RightContainer";
import styles from "./App.module.css";

function App() {
  function test() {
    let ball = document.getElementById("ball");

    document.body.onmouseenter = function (event) {
      ball.style.position = "absolute";
      ball.style.zIndex = 100;

      document.body.append(ball);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + "px";
        ball.style.top = pageY - ball.offsetHeight / 2 + "px";
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      // (2) move the ball on mousemove
      document.addEventListener("mousemove", onMouseMove);

      // (3) drop the ball, remove unneeded handlers
      document.onmouseleave = function () {
        document.removeEventListener("mousemove", onMouseMove);
        ball.onmouseup = null;
      };
    };
  }

  React.useEffect(() => {
    test();
  }, []);

  return (
    <div className={styles.cc}>
      {console.log("RENDERING APP")}
      <div id="ball" className={styles.pointerContainer}></div>
      <LeftContainer />

      <RightContainer />
    </div>
  );
}

export default App;

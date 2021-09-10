import rocket from "./rocket.png";
import fire from "./fire.png";
import classes from "./rocket.module.scss";
import React, { useEffect, useRef, useState } from "react";

const Rocket = () => {
  const ref: React.RefObject<HTMLInputElement> = useRef(null);
  const MoveSpeed = 40;
  const [position, setPosition] = useState({
    top: 550,
    left: window.innerWidth / 2 - 80,
  });
  const [effect, setEffect] = useState({});
  const checkZero = (number: number) => {
    if (number < 0) return 0;
    return number;
  };
  const moveDown = () => {
    setPosition((prev) => ({
      left: prev.left,
      top: prev.top + MoveSpeed,
    }));
  };

  const moveTop = () => {
    setPosition((prev) => ({
      left: prev.left,
      top: checkZero(prev.top - MoveSpeed),
    }));
  };
  const moveLeft = () => {
    setEffect({
      transform: "rotateY(45deg)",
    });

    setPosition((prev) => ({
      left: prev.left + MoveSpeed,
      top: prev.top,
    }));
  };
  const moveRight = () => {
    setEffect({
      transform: "rotateY(-45deg)",
    });

    setPosition((prev) => ({
      left: checkZero(prev.left - MoveSpeed),
      top: prev.top,
    }));
  };

  const [controller, setController] = useState<any>({
    s: { pressed: false, func: moveDown },
    w: { pressed: false, func: moveTop },
    d: { pressed: false, func: moveLeft },
    a: { pressed: false, func: moveRight },
  });

  useEffect(() => {
    Object.keys(controller).forEach(
      (value: keyof typeof controller, key: number) => {
        controller[value].pressed && controller[value].func();
      }
    );

    const handleDown = (e: any) => {
      setController((prev: any) => {
        if (Object.keys(prev).indexOf(e.key) !== -1) {
          prev[e.key].func();
          return {
            ...prev,
            [e.key]: { ...prev[e.key], pressed: true },
          };
        }
        return prev;
      });
    };

    const handleUp = (e: any) => {
      setEffect({});

      setController((prev: any) => {
        if (Object.keys(prev).indexOf(e.key) !== -1) {
          prev[e.key].pressed = false;
        }

        return prev;
      });
    };

    window.addEventListener("keypress", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keypress", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, [controller]);

  return (
    <div
      className={classes.ObjectRocket}
      ref={ref}
      style={{ ...position, ...effect }}
    >
      <img src={rocket} alt={"rocket"} className={classes.Rocket} />
      <img src={fire} alt={"fire"} className={classes.Fire} />
    </div>
  );
};

export default Rocket;

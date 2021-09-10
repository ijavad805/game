import meteorite1 from "./assets/meteorite.png";
import fire1 from "./assets/fire.png";
import classes from "./style.module.scss";
import { useEffect, useState } from "react";

function toDegrees(angle: number) {
  return angle * (180 / Math.PI);
}

interface Iprops {
  startPosition: any;
  endPosition: any;
}

const MeteoriteOne = ({ startPosition, endPosition }: Iprops) => {
  const deg = (): number => {
    const initial = -42;
    let data = {
      x: endPosition.right - startPosition.right,
      y: endPosition.top - startPosition.top,
    };

    const z = () => {
      return Math.pow(data.x, 2) + Math.pow(data.y, 2);
    };

    return initial + toDegrees(data.x / Math.sqrt(z()));
  };

  const [position, setPosition] = useState({
    top: startPosition.top,
    right: startPosition.right,
    transform: `rotate(${deg()}deg)`,
  });

  useEffect(() => {
    setPosition((prev) => ({
      ...prev,
      top: endPosition.top,
      right: endPosition.right,
    }));
  }, []);

  return (
    <div className={classes.ObjectMeteorite} style={position}>
      <img src={fire1} alt={"fire"} className={classes.Fire} />
      <img src={meteorite1} alt={"meteorite"} className={classes.Meteorite} />
    </div>
  );
};

export { MeteoriteOne };

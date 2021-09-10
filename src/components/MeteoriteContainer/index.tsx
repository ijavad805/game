import { ReactElement, useEffect, useState } from "react";
import { MeteoriteOne } from "../../objects/meteorite";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MeteoriteContainer = () => {
  const MakeMeteorite = () => {
    return (
      <MeteoriteOne
        startPosition={{
          top: -100,
          right: Math.random() * 1300,
        }}
        endPosition={{
          top: 2000,
          right: Math.random() * 1300,
        }}
      />
    );
  };

  const [components, setComponents] = useState<ReactElement[]>([]);

  useEffect(() => {
    (async () => {
      await sleep(200);
      if (components.length < 20)
        setComponents((prev) => {
          return [...prev, <MakeMeteorite />];
        });
      else {
        await sleep(2000);
        setComponents((prev) => {
          return [<MakeMeteorite />];
        });
      }
    })();
  }, [components]);

  return (
    <div>
      {components.map((Item, key) => (
        <div key={key}>{Item}</div>
      ))}
    </div>
  );
};
export default MeteoriteContainer;

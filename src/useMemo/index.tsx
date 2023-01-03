import React from "react";
import { getHours } from "date-fns";

import Clock from "./Clock";
import PrimeCalculator from "./PrimeCalculator";

// Transform our PrimeCalculator into a pure component:
const PurePrimeCalculator = React.memo(PrimeCalculator);

function App() {
  const time = useTime();

  // Come up with a suitable background color,
  // based on the time of day:
  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div style={{ backgroundColor }}>
      <Clock time={time} />
      <PurePrimeCalculator />
    </div>
  );
}

const getBackgroundColorFromTime = (time: Date) => {
  const hours = getHours(time);

  if (hours < 12) {
    // A light yellow for mornings
    return "hsl(50deg 100% 90%)";
  } else if (hours < 18) {
    // Dull blue in the afternoon
    return "hsl(220deg 60% 92%)";
  } else {
    // Deeper blue at night
    return "hsl(220deg 100% 80%)";
  }
};

function useTime() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

export default App;

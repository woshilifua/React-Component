import React from "react";
import format from "date-fns/format";

interface Props {
  time: Date;
}
function Clock({ time }: Props) {
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
}

export default Clock;

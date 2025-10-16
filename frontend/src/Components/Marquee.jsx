import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = () => {
  const Marquee = ["./01.svg", "./02.svg", "./03.svg", "./04.svg"];

  return (
    <div className="container mx-auto">
      <MarqueeItem images={Marquee} from={0} to={"-100%"} />
    </div>
  );
};

export default Marquee;

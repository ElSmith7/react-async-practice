import React, { useState } from "react";
import { getRiverInformation } from "../../services/rivers";

export default function RiverInfo() {
  const [riverInformation, setRiverInformation] = useState({});

  getRiverInformation().then((d) => {
    setRiverInformation(d);
  });
  return (
    <div>
      <h2>River Information</h2>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getRiverInformation } from "../services/rivers";

export default function RiverInfo() {
  const [riverInformation, setRiverInformation] = useState({});

  useEffect(() => {
    getRiverInformation().then((data) => setRiverInformation(data));
  }, []);
  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation.continent}</li>
        <li>Length: {riverInformation.length}</li>
        <li>Outflow: {riverInformation.outflow}</li>
      </ul>
    </div>
  );
}

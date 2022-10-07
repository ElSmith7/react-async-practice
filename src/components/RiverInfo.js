import React, { useEffect, useState } from "react";
import { getRiverInformation } from "../services/rivers";
import PropTypes from "prop-types";

export default function RiverInfo(props) {
  const [riverInformation, setRiverInformation] = useState();

  useEffect(() => {
    let mounted = true;
    getRiverInformation(props.name).then((data) => {
      if (mounted) {
        setRiverInformation(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, [props.name]);

  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  );
}

RiverInfo.propTypes = { name: PropTypes.string.isRequired };

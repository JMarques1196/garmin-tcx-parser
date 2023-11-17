import React from "react";
import { useState, useEffect } from "react";

const Parser = () => {
  const [xml, setXMl] = useState("");
  let maxHeartRate = "";

  useEffect(() => {
    fetch("./activity_12740341707.tcx") // grabs the tcx file from the public folder
      .then((response) => response.text()) // converts content to string
      .then((data) => {
        setXMl(data);
      });
  }, []);

  if (xml) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "text/xml"); // parse string to DOM
    maxHeartRate = doc.querySelector("MaximumHeartRateBpm").textContent;
  }

  return <div>console.log({maxHeartRate})</div>;
};

export default Parser;

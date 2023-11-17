import axios from "axios";
import { useState, useEffect } from "react";

function Pun(props) {
  const [pun, setPun] = useState("");

  useEffect(() => {
    axios.get("https://www.punapi.rest/api/pun")
      .then((response) => {
        setPun(response.data.pun);
      })
      .catch((error) => {
        setPun("Something bad happened.");
      });
  }, []);

  return (
    <div id="pun-container">
      <h2>{props.header}</h2>
      <p id="pun">{pun.length > 0 ? pun : "Loading..."}</p>
    </div>
  );
}

export default Pun;
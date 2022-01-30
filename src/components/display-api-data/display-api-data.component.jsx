import { useState } from "react";

function DisplayApiData(props) {
  const [askData, setAskData] = useState();

  console.log("rendered in DisplayApiData.js ");

  return (
    <div>
      <div id="output-box">
        {/* {finalData.length == null ? "No API calls yet" : console.log(finalData)} */}
        {/* set and get the text field word from local storage, or find a way to callback just that somehow */}
        <h3>Fetched word: </h3> {props.dis}
      </div>
    </div>
  );
}

export default DisplayApiData;

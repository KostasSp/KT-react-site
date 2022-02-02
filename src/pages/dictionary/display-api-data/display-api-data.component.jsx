import "./display-api-data.styles.scss";

function DisplayApiData(props) {
  console.log("rendered in DisplayApiData.js ");

  return (
    <div>
      <div className="output-box">
        <h3>Fetched word: </h3> {props.dis}
      </div>
    </div>
  );
}

export default DisplayApiData;

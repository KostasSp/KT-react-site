import { useState, useEffect, useRef, useCallback } from "react";
import TextField from "./TextFieldComponent";
import { Button } from "@material-ui/core";

function Fetch(props) {
  const [apiData, setApiData] = useState({});
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  //   const updateFetchedForApp = () => {
  //     props.callback({ apiData });
  //   };

  //add "education" as default?
  const fetchAPIdata = (data) =>
    fetch(`http://api.dictionaryapi.dev/api/v2/entries/en/${data}`)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
      });

  //then create new component and pass these as props and use .map for create table of data

  return (
    <div>
      <Button onClick={() => fetchAPIdata(props.callback)}>
        Request to fetch
      </Button>
    </div>
  );
}

export default Fetch;

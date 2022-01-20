import { useState, useEffect, useRef, useCallback } from "react";
import TextField from "./TextFieldComponent";
import { Button } from "@material-ui/core";
import DisplayApiData from "./DisplayApiData";
import TextFieldComponent from "./TextFieldComponent";

function Fetch() {
  const [apiData, setApiData] = useState({});
  const [finalData, setFinalData] = useState();
  const [askData, setAskData] = useState();
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  const textFieldCallbacked = (params) => {
    setAskData(params);
  };

  const fetchAPIdata = (data) => {
    fetch(`http://api.dictionaryapi.dev/api/v2/entries/en/${data}`)
      .then((response) => response.json())
      .then((data2) => {
        setFinalData(data2[0].meanings[0].definitions[0].definition);
      });
    //.then(modifyJson(apiData));
  };

  useEffect(() => {
    fetchAPIdata("education");
  }, []);

  return (
    <div>
      Get definition for any word<br></br>
      <TextFieldComponent textField={textFieldCallbacked} />
      <Button onClick={() => fetchAPIdata(askData)}>Request to fetch</Button>
      <DisplayApiData dis={finalData} />
    </div>
  );
}

export default Fetch;

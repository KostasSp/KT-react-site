import { useState, useEffect, useRef, useCallback } from "react";
import TextField from "../../TextFieldComponent";
import { Button } from "@material-ui/core";
import DisplayApiData from "../../components/display-api-data/display-api-data.component";
import TextFieldComponent from "../../TextFieldComponent";

export const Fetch = () => {
  const [apiData, setApiData] = useState({ api: [] });
  const [finalData, setFinalData] = useState();
  const [askData, setAskData] = useState();
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  console.log("rendered in Fetch.js ");

  const textFieldCallbacked = (params) => {
    setAskData(params);
  };

  const fetchAPIdata = (data) => {
    fetch(`http://api.dictionaryapi.dev/api/v2/entries/en/${data}`)
      .then((response) => response.json())
      .then((data2) => {
        setFinalData(data2[0].meanings[0].definitions[0].definition);
        //below works, but care bcs some wonky stuff happening with first call - calling education
        // setApiData({ api: data2 });
        // console.log(apiData.api.map((el) => el.word));
      });
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
};

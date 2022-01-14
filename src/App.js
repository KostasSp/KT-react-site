import "./App.css";
import React from "react";
import MUIcomponent from "./MUIcomponent";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import About from "./About";
import Fetch from "./Fetch";
import DisplayApiData from "./DisplayApiData";
import TextFieldComponent from "./TextFieldComponent";
//add one of those round small pics of her next to an fb/insta link?

const App = () => {
  const [currState, setCurrState] = useState(<MUIcomponent />); //FB people say not to use state for my static app
  const [askData, setAskData] = useState();
  const [data, setData] = useState({ fdata: [] });
  //add all components in this list, to keep it DRY
  const components = [<About />, <MUIcomponent />];

  const receiveFetched = (item) => {
    let fetchedData = data["fdata"];

    fetchedData.push(item);
    if (!askData[0]) return item;
    return fetchedData;
  };

  const textFieldCallbacked = (params) => {
    console.log(params);
    setAskData(params);
  };

  const apiDataCallbacked = (params) => {
    console.log(params);
    setAskData(params);
    console.log(askData);
  };

  const homeState = () => {
    setCurrState(components[1]);
  };

  const aboutState = () => {
    setCurrState(components[0]);
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  return (
    //add a message box somewhere, that can send message directly to her email
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <NavBar AboutClick={aboutState} HomeClick={homeState} />
          {/* check around min 33 in video, "useStyles", to (potentially) see how to align these */}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "5rem" }}>
        <div>{currState} </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        Get definition for any word
        <Fetch callback={askData} />{" "}
        <TextFieldComponent textField={textFieldCallbacked} />
        <DisplayApiData display={receiveFetched} />
        {/* {apiData === null ? askData : apiData[0].word} */}
      </div>
    </div>
  );
};

export default App;

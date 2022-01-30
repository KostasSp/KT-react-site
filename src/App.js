import "./App.css";
import React from "react";
import MUIcomponent from "./MUIcomponent";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import About from "./About";
//difference between below and above is that below I'm destructuring just the arrow function?
import { Fetch } from "./Fetch";
import { Routes, Route, useRoutes } from "react-router-dom";

//add one of those round small pics of her next to an fb/insta link?

const App = () => {
  const [currState, setCurrState] = useState(<MUIcomponent />); //FB people say not to use state for my static app
  const [askData, setAskData] = useState({});
  const [data, setData] = useState({ fdata: [] });
  const imageUrl = `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80`;
  //add all components in this list, to keep it DRY
  const components = [<About />, <MUIcomponent />];

  const receiveFetched = (item) => {
    let fetchedData = data["fdata"];

    fetchedData.push(item);
    if (!askData[0]) return item;
    return fetchedData;
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

  console.log("rendered in App.js");

  return (
    //add a message box somewhere, that can send message directly to her email
    <div
      className="App"
      style={{
        backgroundImage: "url(" + imageUrl + ")",
        height: "100%",

        /* Center and scale the image nicely */
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Routes>
        <Route exact path="/" component={MUIcomponent} />
      </Routes>
      <AppBar position="relative">
        <Toolbar>
          <NavBar AboutClick={aboutState} HomeClick={homeState} />
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "5rem" }}>
        <div>{currState} </div>
      </div>
      <div style={{ marginTop: "5rem" }}>
        <Fetch callbackz={askData} />
      </div>
    </div>
  );
};

export default App;

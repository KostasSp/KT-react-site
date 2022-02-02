import "./App.css";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import NavBar from "./components/navbar/navbar.component.jsx";
import { useState, useEffect } from "react";
import About from "./pages/about/about.component";
//difference between below and above is that below I'm destructuring just the arrow function?
import { Fetch } from "./pages/dictionary/api-call/api-call.component";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { ReactComponent as Logo } from "./assets/blackboard.svg";

//add one of those round small pics of her next to an fb/insta link?

const App = () => {
  const [currState, setCurrState] = useState(); //FB people say not to use state for my static app
  const [askData, setAskData] = useState({});
  const [data, setData] = useState({ fdata: [] });
  //maybe use blackboard only in a small part of the page, for the dictionary
  const imageUrl =
    "https://cdn.pixabay.com/photo/2021/07/28/03/37/blackboard-6498216_960_720.jpg";

  const receiveFetched = (item) => {
    let fetchedData = data["fdata"];

    fetchedData.push(item);
    if (!askData[0]) return item;
    return fetchedData;
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

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
      <BrowserRouter>
        {/* <AppBar position="relative">
          <Toolbar>
          <NavBar />
          </Toolbar>
        </AppBar> */}
        <Routes>
          {/* I believe these have to be in < /> because they're not class component */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/dictionary" element={} /> */}
        </Routes>
      </BrowserRouter>

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

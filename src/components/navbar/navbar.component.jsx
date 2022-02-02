import PhotoCamera from "@material-ui/icons/PhotoCamera";
import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.styles.scss";
import { Grid, Toolbar, createSvgIcon } from "@material-ui/core";

// const HomeIcon = createSvgIcon(
//   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
//   "Home"
// );

function NavBar(props) {
  return (
    <>
      {/* <Toolbar> */}
      {/* maybe move the icons in the state, ie camera next to insta link */}
      {/* <Grid container direction="row" alignItems="center"> */}
      <Link className="home-link" to="/">
        <HomeIcon className="home-icon" />
        Home
      </Link>
      <PhotoCamera color="action" />
      Gallery
      {/* temporary css fix */}
      <Link className="home-link" to="/about">
        <InfoIcon className="home-icon" color="warning" />
        About
      </Link>
      <EmailIcon color="info" />
      Contact info
      {/* </Grid> */}
      {/* </Toolbar> */}
    </>
  );
}

export default NavBar;

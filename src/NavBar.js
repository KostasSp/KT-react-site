import PhotoCamera from "@material-ui/icons/PhotoCamera";
import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import About from "./About.js";
import { useState } from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  createSvgIcon,
} from "@material-ui/core";

// const HomeIcon = createSvgIcon(
//   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
//   "Home"
// );

function NavBar(props) {
  const [navState, setNavState] = useState();

  const homeClick = (data) => {
    props.HomeClick(data);
  };

  const aboutClick = (data) => {
    props.AboutClick(data);
  };

  return (
    <>
      <Toolbar>
        {/* maybe move the icons in the state, ie camera next to insta link */}
        <Grid container direction="row" alignItems="center">
          <HomeIcon onClick={homeClick} />
          Home
          <PhotoCamera color="action" />
          Gallery
          <InfoIcon color="warning" onClick={aboutClick} />
          About
          <EmailIcon color="info" />
          Contact info
        </Grid>
      </Toolbar>
    </>
  );
}

export default NavBar;

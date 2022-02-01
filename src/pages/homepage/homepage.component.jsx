// import MUIcomponent from "../../MUIcomponent";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { useEffect } from "react";
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
} from "@material-ui/core";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="homepage">
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <PhotoCamera />
              Hello, I'm Kat
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              I'm a classical studies tutor, with a master's degree in online
              teaching
            </Typography>
          </Container>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

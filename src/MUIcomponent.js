import PhotoCamera from "@material-ui/icons/PhotoCamera";

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

function MUIcomponent() {
  return (
    <>
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
    </>
  );
}

export default MUIcomponent;

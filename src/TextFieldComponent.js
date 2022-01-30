import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRef, useState, useEffect } from "react";

function TextFieldComponent(props) {
  const [textValue, setTextValue] = useState();
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const chart = useRef(null);

  console.log("rendered in TextFieldComponent.js ");

  useEffect(() => {
    if (input.length < 2 || /\d/.test(input)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [input]);

  props.textField(textValue);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form>
        <TextField
          value={textValue}
          id="input"
          onChange={(e) => [
            setTextValue(e.target.value),
            setInput(e.target.value),
          ]}
          label="type here"
          variant="filled"
        />
      </form>
      <span style={{ fontSize: "13px" }} ref={chart}>
        {isValid ? (
          <CheckCircleIcon></CheckCircleIcon>
        ) : (
          "At least two characters and no numbers"
        )}
      </span>
    </Box>
  );
}

export default TextFieldComponent;

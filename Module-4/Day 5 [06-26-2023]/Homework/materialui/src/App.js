import { FormControl, TextField, Button } from "@mui/material";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Hello ${name}`);
  }, [name]);

  return (
    <div className="App">
      <div className="flex-centered">
        <FormControl>
          {" "}
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            multiline={true}
          />
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            required={true}
          />
          <Button
            variant="contained"
            type="submit"
            onClick={() => console.log("click event")}
          >
            First MUI Component
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default App;

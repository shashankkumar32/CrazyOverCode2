import React from "react";
import { TextField, Box, Button } from "@mui/material";

interface props {
  children: React.ReactNode;
  input: any;
  setInput: any;
}

const Search: React.FC<props> = ({ children, input, setInput }) => {
  //using formik for validation , check whether textfield is empty or not or someone's input is a number instead of a string

  return (
    <Box>
      <TextField
        onChange={(e: any) => setInput(e.target.value.toLowerCase())}
        placeholder="Search"
        sx={{
          width: {
            lg: "550px",
            sm: "450px",
            md: "380px",
            xs: "220px",
          },
        }}
      />
      {/* {JSON.stringify(input)} */}
      {children}
    </Box>
  );
};

export default Search;

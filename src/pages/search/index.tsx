import React, { useEffect } from "react";
import logo from "./logo.svg";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";

import { json } from "stream/consumers";
import { url } from "inspector";
import Search from "./inc/search";
import PokemonCards from "@/components/Ui-common/card";

const App = () => {
  const [input, setInput] = React.useState("");
  const [pokemon, setPokemon] = React.useState();
  const [allpokedata, setallpokedata] = React.useState([]);
  const onSubmit = () => {
    console.log("working");
    getPokemonData();
  };
  const getPokemonData = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${input}`
    );
    setPokemon(response.data);

    console.log("pokemon", pokemon);
    console.log(response.data.name);
  };

  const getAllPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?_limit=10`
    );

    setallpokedata(response.data.results);
    console.log(allpokedata);
  };
  useEffect(() => {
    getAllPokemon();
  });
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex ",
        justifyContent: "center",
        pt:4
      }}
      className="App"
    >
      <Stack>
        <Search input={input} setInput={setInput}>
          <Button
            variant="contained"
            onClick={() => onSubmit()}
            sx={{ height: "54px" }}
          >
            Search
          </Button>
        </Search>
        <Box sx={{py:4,display:"flex",justifyContent:"center"}}>
        

        <PokemonCards
          pokemon={pokemon}
     
        />
          </Box>
          {
            JSON.stringify(

              pokemon.types.type
            )
          
          }
      </Stack>

    </Box>
  );
};

export default App;

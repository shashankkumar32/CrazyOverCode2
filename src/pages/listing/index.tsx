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
  const [pokemon, setPokemon] = React.useState([]);
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
    <Box>
      {/* <Stack>
        <Search input={input} setInput={setInput}>
          <Button
            variant="contained"
            onClick={() => onSubmit()}
            sx={{ height: "54px" }}
          >
            Search
          </Button>
        </Search>
        <PokemonCards
          pokemon={pokemon}
          // name={pokemon?.name}
          // abilities={pokemon?.abilities}
          // stats={pokemon.stats}
        />
      </Stack> */}
      <Box>
        <Grid container lg={10} spacing={2}>
          {/* {JSON.stringify(allpokedata)} */}
          {allpokedata?.map((d: any, index) => (
            <Grid item lg={3}>
              {" "}
              <Box sx={{ boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", p: 1 }}>
                <Box
                  sx={{
                    // backgroundImage: `url(
                    //   https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index}.svg)`,
                    objectFit: "cover",

                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    height: "220px",
                    width: "120px",
                  }}
                >
                  <img
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
                      index + 1
                    }.svg`}
                    alt="React Image"
                    width={120}
                    height={220}
                  />
                </Box>
                {d.name}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default App;

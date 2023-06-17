import React, { ReactElement } from "react";

import { Box, Button, Stack } from "@mui/material";
import axios from "axios";

import Search from "./inc/search";
import PokemonCards from "@/components/Ui-common/card";
import { NextPageWithLayout } from "../_app";
import ResponsiveAppBar from "../../../layout/appbar";

const Page: NextPageWithLayout = () => {
  const [input, setInput] = React.useState("");
  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const onSubmit = () => {
    setActive(true);
    setError(false);
    console.log("working");
    getPokemonData();
  };
  const getPokemonData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );
      setLoading(false);
      setPokemon(response.data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        // width: "100vw",
        display: "flex ",
        justifyContent: "center",
        pt: 4,
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
        {active ? (
          <>
            {error ? (
              <Box>Please Type Correctly</Box>
            ) : (
              <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
                {!loading ? <PokemonCards pokemon={pokemon} /> : "loading"}
              </Box>
            )}
          </>
        ) : (
          <Box>No query Yet</Box>
        )}
      </Stack>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {" "}
      <ResponsiveAppBar />
      {page}
    </>
  );
};
export default Page;

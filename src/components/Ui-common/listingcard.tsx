// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import React, { useEffect } from "react";
// import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
interface props {
  pokemon?: any;
  index?: any;
  color?: any;
}

const PokemonListingCards: React.FC<props> = ({ pokemon, index, color }) => {
  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        m: 1,
        width: "340px",
        backgroundColor: color,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {pokemon?.name}
          </Typography>

          <img
            src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
            width="150"
            alt="3D Pokeball Pokémon Go Png"
          />
          <Button sx={{ mt: 2 }} variant={"contained"}>
            View Profile
          </Button>
        </CardContent>
      </Box>
      <CardMedia sx={{ width: 121, mr: 2 }}>
        {" "}
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${
            index > 9 ? index - 9 : index + 1
          }.svg`}
          alt="React Image"
          width={120}
          height={220}
        />
      </CardMedia>
    </Card>
  );
};
export default PokemonListingCards;
// import * as React from "react";

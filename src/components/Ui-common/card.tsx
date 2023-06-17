import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
interface props {
  pokemon?: any;
}

const PokemonCards: React.FC<props> = ({ pokemon }) => {
  const theme = useTheme();
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  console.log(pokemon);
  // const d = pokemon.id;

  console.log("its the array", pokemon?.abilities);
  // const color=randomColor()

  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        // border:`solid 0.4px ${color}`,
        m: 1,
        width: "340px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {pokemon?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mr: 4 }}
          >
            Height:{pokemon?.height}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mr: 4 }}
          >
            Weight:{pokemon?.weight}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mr: 4 }}
          >
            Experience:{pokemon?.base_experience}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={pokemon?.base_experience / 10}
          />
          <Button sx={{ mt: 2 }} variant={"contained"}>
            View Profile
          </Button>
        </CardContent>
      </Box>
      <CardMedia sx={{ width: 121 }}>
        {" "}
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          alt="React Image"
          width={120}
          height={220}
        />
      </CardMedia>
    </Card>
  );
};
export default PokemonCards;
// import * as React from "react";

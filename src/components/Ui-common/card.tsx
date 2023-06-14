// import * as React from "react";
// // import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

interface props {
  pokemon?: any;
}

const PokemonCards: React.FC<props> = ({ pokemon }) => {
  const theme = useTheme();
  console.log(pokemon);
  const d = pokemon.id;
  //   const array = pokemon.abilities.ability;
  console.log("its the array", pokemon.abilities);

  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        m: 1,
        width: "340px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {pokemon.name}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mr: 4 }}
          >
            Base Experience:{pokemon.base_experience}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        // component="img"
        sx={{ width: 151 }}
        // image="/static/images/cards/live-from-space.jpg"
        // alt="Live from space album cover"
      >
        {" "}
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt="React Image"
          width={120}
          height={220}
        />
      </CardMedia>
    </Card>
    //     <Box sx={{ display: "flex", flexDirection: "column" }}>
    //       <Typography component="div" variant="h6">
    //         {pokemon?.name}
    //       </Typography>
    //       {/* <Typography variant="subtitle1" color="text.secondary" component="div"> */}

    //       {/* <CardMedia
    //         component="img"
    //         sx={{ width: 151 }}
    //         image={pokemon?.sprites?.front_default}
    //         // image="/static/images/cards/live-from-space.jpg"
    //         alt="Live from space album cover"
    //       /> */}
    //       {/* <img src={pokemon?.sprites?.front_default} /> */}
    //     </Box>
  );
};
export default PokemonCards;
// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
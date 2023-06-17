import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import randomColor from "randomcolor";
import { Button, Chip } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Image from "next/image";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
interface props {
  name?: any;
  index?: any;
}

const PokemonCards: React.FC<props> = ({ name, index }) => {
  const theme = useTheme();
  const [pokemon, setPokemon] = React.useState<any | []>();
  const getPokemonData = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    setPokemon(response.data);
  };
  useEffect(() => {
    getPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  //   console.log(pokemon);
  // const d = pokemon.id;

  //   console.log("its the array", pokemon?.abilities);

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
            {/* {pokemon?.name}
             */}
            {name}
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
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Ability
          </Typography>
          {pokemon?.abilities.map((data: any, i: any) => {
            return (
              <Chip
                key={i}
                sx={{
                  m: 1,
                  borderRadius: "0px",
                  backgroundColor: randomColor(),
                }}
                label={data.ability.name}
              />
            );
          })}
          <Typography sx={{ fontWeight: 400, fontSize: "19px" }}>
            Type
          </Typography>
          {pokemon?.types.map((data: any, i: any) => {
            return (
              <Chip
                key={i}
                sx={{
                  m: 1,
                  borderRadius: "0px",
                  backgroundColor: randomColor(),
                }}
                label={data.type.name}
              />
            );
          })}
          <Button sx={{ mt: 2 }} variant={"contained"}>
            View Profile
          </Button>
        </CardContent>
      </Box>
      <CardMedia sx={{ width: 121 }}>
        {" "}
        <Image
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          alt="React Image"
          width={120}
          height={220}
        />
        <img
          src="https://www.freeiconspng.com/uploads/3d-pokeball-pok-mon-go-png-24.png"
          width="150"
          alt="3D Pokeball Pokémon Go Png"
        />
      </CardMedia>
    </Card>
  );
};
export default PokemonCards;
// import * as React from "react";

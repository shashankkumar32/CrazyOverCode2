import React, { useEffect } from "react";
import logo from "./logo.svg";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from 'next/link'

import { json } from "stream/consumers";
// import { url } from "inspector";
import Search from "./inc/search";
import PokemonListingCards from "@/components/Ui-common/listingcard";

const App = () => {
  const [input, setInput] = React.useState("");
  const [allpokedata, setallpokedata] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  const getCardData = async () => {
    const res = await axios.get(
      ` https://pokeapi.co/api/v2/pokemon?limit=10&offset=${10*(page-1)})}`
    );
    const data = res.data.results;
    console.log(res.data.results);
   
    setallpokedata((prev) => [...prev, ...data])
    
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 2 >=
        document.documentElement.scrollHeight
      ) {
        
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

 
  return (
    <Box sx={{mt:16}}>
     
      <Box  sx={{display:"flex",justifyContent:"center"}}>
        <Grid container lg={12} spacing={2}>
          {/* {JSON.stringify(allpokedata)} */}
          {allpokedata?.map((d: any, index) => (
            
            <Grid item lg={3} sx={{display:"flex",justifyContent:"center"}}>
              {" "}
               <Link style={{ textDecoration: "none" }} href={`pokemon/${d.name}`}>
                <PokemonListingCards pokemon={d} index={index}/>
           
               </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default App;

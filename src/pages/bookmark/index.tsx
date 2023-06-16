// // i am using redux for state management
// import React from 'react'
// import { useSelector } from "react-redux";

// const BookmarkDisplay = () => {
  
//         const Data = useSelector((state) => state);
//   return (<>
//   {
//     Data?.array.map((d)=>{
//         return(<h1>{
//         d.name}</h1>)
//     })
//   }


//     <div>{
//         JSON.stringify(Data.array)
// }</div>
//     </>
//   )
// }

// export default BookmarkDisplay
import React, { useEffect } from "react";
import logo from "./logo.svg";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from 'next/link'

import { json } from "stream/consumers";
// import { url } from "inspector";
import Search from "./inc/search";
import PokemonListingCards from "@/components/Ui-common/BookmarkCard"
import { useSelector } from "react-redux";
 
const BookmarkDisplay = () => {
    
    
        const Data = useSelector((state) => state);
  return (
    <Box sx={{mt:16}}>
           <Link style={{ textDecoration: "none" }} href={`bookmark`}>
      <Typography>
        Bookmark
        </Typography>
        </Link>
     
      <Box  sx={{display:"flex",justifyContent:"center"}}>
        <Grid container lg={12} spacing={2}>
          {/* {JSON.stringify(allpokedata)} */}
          {Data?.array?.map((d: any, index) => (
            
            <Grid item lg={3} sx={{display:"flex",justifyContent:"center"}}>
              {" "}
               <Link style={{ textDecoration: "none" }} href={`pokemon/${d.name}`}>
                <PokemonListingCards name={d.name} index={index}/>
                
                 {
                    JSON.stringify(d)
                 }
           
               </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookmarkDisplay;

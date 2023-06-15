// import React from 'react'
// import axios from 'axios'

// const index = () => {
//     const[pokedata,setpokedata]=React.useState([])
//     const getData = async () => {
//         const res = await axios.get(
//           ` https://pokeapi.co/api/v2/pokemon/ditto`
//         );
//         const res2=await fetch(` https://pokeapi.co/api/v2/pokemon/ditto`);
//         const data2 = await res2.json();
//         const data = res.data.results;
//         console.log("axios",res.data.types[0]);
//         console.log("normal fetch",data2.abilities[0].ability.name)
//         setpokedata(data2.abilities)
//         console.log("pokedata",pokedata)
       
        
       
//       };
// React.useEffect( ()=>{
//      getData()
// })
//   return (
//     <>

//     <div>index{pokedata[0].ability.name}</div>
//         {
//           pokedata.map((abilities,index)=>{
//             {
//                 abilities.ability.name
//             }
//           })
//         }
//     </>
//   )
// }

// export default index
import React from "react";
import { Router, useRouter } from "next/router";
import { Box, Button, Grid, Stack, Typography,Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


const Details = ({ pokeman }) => {
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
  console.log(pokeman);
  return (
    <Box sx={{
        height:"100vh",
        width:"100vw",
        display:"flex",
        justifyContent:"center"
    }}>
    <Grid container lg={8} sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <Grid item lg={6}>
            <Box sx={{display:"flex",just}}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeman?.id}.svg`}
          alt="React Image"
          
          />
          </Box>

            </Grid>
            <Grid item lg={6}>
                <Box sx={{borderBottom:"solid 0.4px grey"}}>
            <Typography sx={{fontWeight:600,fontSize:"19px"}}>{pokeman.name}</Typography>
                </Box>

                <Box>
                <Typography sx={{fontWeight:600,fontSize:"19px"}}>Height</Typography>
                {pokeman.height}

                <Typography sx={{fontWeight:600,fontSize:"19px"}}>weight</Typography>
                {pokeman.weight}
                

                <Typography sx={{fontWeight:600,fontSize:"19px"}}>Ability</Typography>
    {
        pokeman.abilities.map((data,i)=>{
            return <Chip label={data.ability.name} color="primary" />
        })
    }
     <Typography sx={{fontWeight:600,fontSize:"19px"}}>Type</Typography>
       {
        pokeman.types.map((data,i)=>{
            return <Chip label={data.type.name} color="primary" />
        })
    }

      {
        pokeman.stats.map((data,i)=>{
            
           return( <Box>{data.stat.name}<BorderLinearProgress
                  variant="determinate"
                  value={data.base_stat}
                /></Box>)
        })
    }

    
                    </Box>

            </Grid>


        
    {/* {pokeman.name}
    index
    {
        JSON.stringify(pokeman)
    } */}
    </Grid>
    </Box>
  );
};

export async function getServerSideProps({query}) {
  try {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.id}`);
    const data = await res.json();
    return {
      props: {
        pokeman: data,
     
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Details;
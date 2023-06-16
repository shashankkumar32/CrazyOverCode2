
import React from "react";
import { Router, useRouter } from "next/router";
import { Box, Button, Grid, Stack, Typography,Chip,IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import randomColor from "randomcolor";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useDispatch } from "react-redux";
import { addToArray } from "../../../../slice/rootReducer";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


const Details = ({ pokeman }) => {
        const [name,setName]=React.useState('')
      const dispatch=useDispatch()
      const AddCartItem = (text:any) => {
    dispatch(addToArray({ name:text}));
  };
    
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: randomColor()
        },
      }));
  console.log(pokeman);
  return (
    <Box sx={{
        // height:"100vh",
        // width:"100vw",
        display:"flex",
        justifyContent:"center"
        
    }}>
    <Grid container lg={8} md={10} xs={10} spacing={2} sx={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",pb:6,mt:3,mb:3}}>
        <Grid xs={12}>

                <Box sx={{py:1.2,boxShadow:" rgba(0, 0, 0, 0.24) 0px 0.4px 0.8px",display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontWeight:500,fontSize:"22px",pl:2}}>{pokeman.name}</Typography>
            <Box>
                <IconButton sx={{mr:2}} onClick={()=>AddCartItem(pokeman.name)}>
            <BookmarkBorderIcon sx={{height:"28px",width:"28px"}}/>
            </IconButton>
            </Box>

                </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
            <Box sx={{display:"flex",justifyContent:"center",}}>
                <Box sx={{ boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",p:1,borderRadius:"100%"}}>
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeman?.id}.svg`}
          alt="React Image"
          height={240}
          width={240}
          
          />
          </Box>
          </Box>

            </Grid>
            <Grid item lg={6} md={6} xs={12}>
                {/* <Box sx={{borderBottom:"solid 0.4px grey"}}>
            <Typography sx={{fontWeight:400,fontSize:"19px"}}>{pokeman.name}</Typography>
                </Box> */}

                <Box>
                <Typography sx={{fontWeight:400,fontSize:"19px"}}>Height</Typography>
                <Typography sx={{pl:2}}>{pokeman.height}</Typography>

                <Typography sx={{fontWeight:400,fontSize:"19px"}}>weight</Typography>
                <Typography sx={{pl:2}}>{pokeman.weight}</Typography>
                

                <Typography sx={{fontWeight:400,fontSize:"19px"}}>Ability</Typography>
    {
        pokeman.abilities.map((data,i)=>{
            return <Chip sx={{m:1,borderRadius:"0px",backgroundColor:randomColor()}} label={data.ability.name} />
        })
    }
     <Typography sx={{fontWeight:400,fontSize:"19px"}}>Type</Typography>
       {
        pokeman.types.map((data,i)=>{
            return <Chip sx={{m:1,borderRadius:"0px",backgroundColor:randomColor()}} label={data.type.name} />
        })
    }
    <Typography sx={{fontWeight:400,fontSize:"19px"}}>Stats</Typography>
    <Stack sx={{mr:1,border:"dashed 0.1px #A2A9AE",boxShadow:" rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",py:2,borderRadius:"0px"}}>

      {
        pokeman.stats.map((data,i)=>{
            
           return( <Box sx={{mx:1}}>
            <Typography sx={{fontSize:"16px",fontWeight:400,my:0.3,pl:0.4, }}>


            {data.stat.name}:{data.base_stat}
            </Typography>
            <BorderLinearProgress
                  variant="determinate"
                  value={data.base_stat}
                />
                </Box>)
        })
    }
    </Stack>

    
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
import React, { useEffect } from "react";
import logo from "./logo.svg";

import { Box, Button, Grid, Stack, Typography,Chip } from "@mui/material";
import axios from "axios";
import Link from 'next/link'
import randomColor from "randomcolor";
import ResponsiveAppBar from "../../../layout/appbar"


// import { url } from "inspector";
import Search from "./inc/search";
import PokemonListingCards from "@/components/Ui-common/listingcard";
import PokemonCards from"@/components/Ui-common/BookmarkCard"
 const results= [
  {
  "name": "normal",
  "url": "https://pokeapi.co/api/v2/type/1/"
  },
  {
  "name": "fighting",
  "url": "https://pokeapi.co/api/v2/type/2/"
  },
  {
  "name": "flying",
  "url": "https://pokeapi.co/api/v2/type/3/"
  },
  {
  "name": "poison",
  "url": "https://pokeapi.co/api/v2/type/4/"
  },
  {
  "name": "ground",
  "url": "https://pokeapi.co/api/v2/type/5/"
  },
  {
  "name": "rock",
  "url": "https://pokeapi.co/api/v2/type/6/"
  },
  {
  "name": "bug",
  "url": "https://pokeapi.co/api/v2/type/7/"
  },
  {
  "name": "ghost",
  "url": "https://pokeapi.co/api/v2/type/8/"
  },
  {
  "name": "steel",
  "url": "https://pokeapi.co/api/v2/type/9/"
  },
  {
  "name": "fire",
  "url": "https://pokeapi.co/api/v2/type/10/"
  },
  {
  "name": "water",
  "url": "https://pokeapi.co/api/v2/type/11/"
  },
  {
  "name": "grass",
  "url": "https://pokeapi.co/api/v2/type/12/"
  },
  {
  "name": "electric",
  "url": "https://pokeapi.co/api/v2/type/13/"
  },
  {
  "name": "psychic",
  "url": "https://pokeapi.co/api/v2/type/14/"
  },
  {
  "name": "ice",
  "url": "https://pokeapi.co/api/v2/type/15/"
  },
  {
  "name": "dragon",
  "url": "https://pokeapi.co/api/v2/type/16/"
  },
  {
  "name": "dark",
  "url": "https://pokeapi.co/api/v2/type/17/"
  },
  {
  "name": "fairy",
  "url": "https://pokeapi.co/api/v2/type/18/"
  },
  {
  "name": "unknown",
  "url": "https://pokeapi.co/api/v2/type/10001/"
  },
  {
  "name": "shadow",
  "url": "https://pokeapi.co/api/v2/type/10002/"
  }
  ]

const App = () => {
  const [input, setInput] = React.useState("");
  const [allpokedata, setallpokedata] = React.useState([]);
  const [dynamicpokedata,setalldynamicpokedata]=React.useState([])
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [select,setSelect]=React.useState('')
  const [url,setUrl]=React.useState("")

  const onClickHandler= (name,url)=>{
    setSelect(name)
    setUrl(url)
    // const res = await axios.get(
    //   url
    // );
   
    // console.log(res.data.pokemon);
  }
  const deltafetcher=async()=>{
    const res = await axios.get(
      `${url}?limit=10&offset=${10*(page-1)}`
    );
   setalldynamicpokedata(res.data.pokemon)


    console.log("delta fetcher",res.data.pokemon);
  }

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
  useEffect(() => {
    deltafetcher();
  }, [url]);

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

 
  return (<>
  <ResponsiveAppBar/>
  
    <Box sx={{mt:16}}>
    {
  results.map((d,i)=>{return(<Chip onClick={()=>onClickHandler(d.name,d.url)}label={d.name}/>)

  })
}
           {/* <Link style={{ textDecoration: "none" }} href={`bookmark`}>
      <Typography>
        Bookmark
        </Typography>
        </Link> */}
     
      <Box  sx={{display:"flex",justifyContent:"center"}}>
        {
          // JSON.stringify(dynamicpokedata)
        }
        {
          !url.length?
        <>
        <Grid container lg={12} spacing={2}>
          {/* {JSON.stringify(allpokedata)} */}
          {}
          
          {allpokedata?.map((d: any, index) => (
            
            <Grid item lg={3} sx={{display:"flex",justifyContent:"center"}}>
              {" "}
               <Link style={{ textDecoration: "none" }} href={`pokemon/${d.name}`}>
                
                {/* <PokemonListingCards pokemon={d} index={index} color={()=>randomColor()}/> */}
                <PokemonCards name={d.name} index={index}/>
           
               </Link>
            </Grid>
          ))}
        </Grid>
        </>:
               <>
               <Grid container lg={12} spacing={2}>
                 {/* {JSON.stringify(allpokedata)} */}
                 {}
                 
                 {dynamicpokedata?.map((d: any, index) => (
                   
                   <Grid item lg={3} sx={{display:"flex",justifyContent:"center"}}>
                     {" "}
                      <Link style={{ textDecoration: "none" }} href={`pokemon/${d.pokemon.name}`}>
                       
                       {/* <PokemonListingCards pokemon={d} index={index} color={()=>randomColor()}/> */}
                       <PokemonCards name={d.pokemon.name} index={index}/>
                  
                      </Link>
                   </Grid>
                 ))}
               </Grid>
               </>
        }
      </Box>
    </Box>
    </>
  );
};

export default App;

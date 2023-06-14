import React from 'react'
import axios from 'axios'

const index = () => {
    const getData = async () => {
        const res = await axios.get(
          ` https://pokeapi.co/api/v2/pokemon/ditto`
        );
        const res2=await fetch(` https://pokeapi.co/api/v2/pokemon/ditto`);
        const data2 = await res2.json();
        const data = res.data.results;
        console.log(res.data.results);
        console.log(data2)
       
        
       
      };

  return (
    <div>index</div>
  )
}

export default index
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


const Details = ({ pokeman }) => {
  console.log(pokeman);
  return (
    <>
    {pokeman.name}
    index
    {
        JSON.stringify(pokeman.abilities)
    }
    {
        pokeman.abilities.map((data,i)=>{
            return data.ability.name
        })
    }
    </>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
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
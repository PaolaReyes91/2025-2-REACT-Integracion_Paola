import { useEffect, useState } from "react";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState ([]);

    useEffect (() =>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then((response) =>response.json())
                .then(data => {
                    console.log(data);
                    setPokemons(data.results);
                    }) 
            },[]);

return(
    <div>
        <ul>
            {pokemons.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
)
};

export default Pokedex;
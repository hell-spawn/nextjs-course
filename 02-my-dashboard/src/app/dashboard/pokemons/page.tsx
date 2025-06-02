import { PokemonApiResponse } from "@/app/interfaces";
import { PokemonGrid } from "@/app/pokemons";

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <PokemonGrid pokemons={pokemons} />
  );
}


const getPokemons = async (limit = 20, offset = 0) => {

  const data: PokemonApiResponse = await fetch(`https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`)
    .then(response => response.json());

  console.log(data);
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name
  }));

  //throw new Error("Error fetching pokemons");

  return pokemons;
}

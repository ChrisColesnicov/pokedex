import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <>
      {pokemonIndex > 0 && (
        <button
          type="button"
          onClick={() => setPokemonIndex((pokemonIndex) => pokemonIndex - 1)}
        >
          Précédent
        </button>
      )}

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex < pokemonList.length - 1 && (
        <button
          type="button"
          onClick={() => setPokemonIndex((pokemonIndex) => pokemonIndex + 1)}
        >
          Suivant
        </button>
      )}
    </>
  );
}

export default App;

export default function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
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

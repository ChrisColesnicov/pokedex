/* eslint-disable react/prop-types */
export default function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
  return (
    <>
    {pokemonList.map((pokemon , index) => (
        <button
          key={index}
          type="button"
          onClick={ () => setPokemonIndex(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

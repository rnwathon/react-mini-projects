import * as React from 'react';
import Button from './Components/Button';
import Card from './Components/Card';
import Container from './Components/Container';
import Modal from './Components/Modal';
import { useModal } from './Hooks';
import './index.css';

const API_URL = 'https://pokeapi.co/api/v2';
const limit = 20;

function Pokedex() {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [pokemonDetails, setPokemonDetails] = React.useState({});
  const [pokemonDetailsLoading, setPokemonDetailsLoading] = React.useState(false);
  const [totalPage, setTotalPage] = React.useState();
  const [page, setPage] = React.useState(1);
  const [prevUrl, setPrevUrl] = React.useState();
  const [nextUrl, setNextUrl] = React.useState();

  const [isModalOpen, setIsModalOpen] = useModal(false);

  const getPokemonList = React.useCallback((url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { count, next, previous, results } = data;
        setPokemonList(results);
        setTotalPage(Math.ceil(count / limit));
        setPrevUrl(previous);
        setNextUrl(next);
      });
  }, []);

  const getPokemonDetails = (name) => {
    setPokemonDetailsLoading(true);
    fetch(`${API_URL}/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        const { sprites, stats, types } = data;
        setPokemonDetails({ name, sprites, stats, types });
        setPokemonDetailsLoading(false);
      });
  };

  const handleClickPokemon = (name) => {
    setIsModalOpen(true);
    getPokemonDetails(name);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    if (prevUrl) {
      getPokemonList(prevUrl);
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if (nextUrl) {
      getPokemonList(nextUrl);
      setPage((prevPage) => prevPage + 1);
    }
  };

  React.useEffect(() => {
    getPokemonList(`${API_URL}/pokemon?limit=${limit}`);
  }, [getPokemonList]);

  return (
    <div className="bg-orange-100">
      <div className="pixel max-w-2xl h-screen mx-auto flex flex-col gap-2 px-5 py-20">
        <Container className="grow-1 h-full">
          <Container.Title className="bg-orange-100">Pokedex</Container.Title>
          <Container.Content className="flex flex-col sm:grid-cols-3 gap-4 p-2 h-full overflow-scroll">
            {pokemonList?.length &&
              pokemonList.map((pokemon, idx) => (
                <Card
                  key={`pokemon-${idx}`}
                  className="px-4 py-2 text-center cursor-pointer bg-orange-200 hover:bg-orange-300"
                  onClick={() => handleClickPokemon(pokemon.name)}
                >
                  {pokemon.name}
                </Card>
              ))}
          </Container.Content>
        </Container>
        <div className="flex justify-between">
          <p>
            Page {page} of {totalPage}
          </p>
          <div className="flex gap-4">
            <Button color="primary" onClick={handlePrevPage}>
              {'<'}
            </Button>
            <Button color="primary" onClick={handleNextPage}>
              {'>'}
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Modal.Header> Pokemon Details </Modal.Header>
          <Modal.Body>
            {pokemonDetailsLoading ? (
              <div className="grid justify-center items-center"> Loading... </div>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    src={pokemonDetails?.sprites?.front_default}
                    alt="pokemon sprite"
                    className="w-36"
                  />
                </div>
                <p className="text-center">{pokemonDetails?.name}</p>
              </>
            )}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Pokedex;

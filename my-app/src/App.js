import './App.css';
import CharacterCard from './components/Card';
import React, { useState, useEffect } from 'react';

const initialCards = (() => {
  const cards = [];
  for (let i = 1; i <= 40; i++) {
    cards.push({ id: i }); // Push objects into the array
  }
  return cards; // Return the populated array
})();

function App() {
  const [characterData, setCharacterData] = useState([]);
  const [filters, setFilters] = useState({
    alive: true,
    dead: true,
    unknown: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const promises = initialCards.map(card =>
        fetch(`https://rickandmortyapi.com/api/character/${card.id}`)
          .then(response => response.json())
      );
      const results = await Promise.all(promises);
      setCharacterData(results); // Set character data after fetching
    };

    fetchData();
  }, []);

  const sortCards = () => {
    const sortedData = [...characterData].sort((a, b) => {
      return a.name.localeCompare(b.name); // Sort by name
    });
    setCharacterData(sortedData); // Update state with sorted data
  };

  const sortCardsByDate = () => {
    const sortedData = [...characterData].sort((a, b) => {
      return new Date(a.created) - new Date(b.created); // Sort by date
    });
    setCharacterData(sortedData); // Update state with sorted data
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filteredCharacters = characterData.filter(character => {
    if (filters.alive && character.status === 'Alive') return true;
    if (filters.dead && character.status === 'Dead') return true;
    if (filters.unknown && character.status === 'unknown') return true;
    return false;
  });

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <h2 className='author'>Created by Katie Huntley</h2>
      <h3 className='date'>September 29th, 2024</h3>
      <div className='filter'>
        <div className="buttons">
          <button onClick={sortCards}>Sort Alphabetically</button>
          <button onClick={sortCardsByDate}>Sort by Date Created</button>
        </div>

        <div>
          <h2 className='filterStatus'>Filter Characters by Status:</h2>
          <div className='labels'>
            <label>
              <input
                type="checkbox"
                name="alive"
                checked={filters.alive}
                onChange={handleFilterChange}
              />
              Alive
            </label>
            <label>
              <input
                type="checkbox"
                name="dead"
                checked={filters.dead}
                onChange={handleFilterChange}
              />
              Dead
            </label>
            <label>
              <input
                type="checkbox"
                name="unknown"
                checked={filters.unknown}
                onChange={handleFilterChange}
              />
              Unknown
            </label>
          </div>
        </div>
      </div>

      <div className='cardHolder'>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <CharacterCard key={character.id} id={character.id} />
          ))
        ) : (
          <p className='error'>No characters found</p> // Message when no characters match the filter
        )}
      </div>
    </>
  );
}

export default App;

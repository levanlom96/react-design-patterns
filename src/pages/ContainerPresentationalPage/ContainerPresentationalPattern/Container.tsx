import React, { useEffect, useState } from "react";
import CharacterList, { Character } from "./CharacterList";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/assets/data.json");
      const data = await response.json();
      setIsLoading(false);
      if (!data) return;
      setCharacters(data);
    } catch (err) {
      setError(true);
    } finally {  
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterList loading={isLoading} error={error} characters={characters} />
  );
};

export default StarWarsCharactersContainer;
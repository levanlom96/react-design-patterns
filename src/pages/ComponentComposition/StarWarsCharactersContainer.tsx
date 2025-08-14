import React from "react";
import CharacterList from "../ContainerPresentationalPage/ContainerPresentationalPattern/CharacterList";
import { useFetchStarWarsCharacters } from "./useFetchStarWarsCharacters";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, isLoading, error] = useFetchStarWarsCharacters();

  return (
    <CharacterList 
        loading={isLoading} 
        error={error} 
        characters={characters} 
    />
  );
};

export default StarWarsCharactersContainer;
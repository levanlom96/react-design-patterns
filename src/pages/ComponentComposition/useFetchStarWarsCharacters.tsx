// creating a custom hook that fetches star wars characters

import { useEffect, useState } from "react";
import { Character } from "../ContainerPresentationalPage/ContainerPresentationalPattern/CharacterList";

export const useFetchStarWarsCharacters = (): [Character[], boolean, boolean] => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(false);
    const controller = new AbortController();
  
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
      return () => {
        controller.abort();
      };
    }, []);
  
    return [characters, isLoading, error];
  };
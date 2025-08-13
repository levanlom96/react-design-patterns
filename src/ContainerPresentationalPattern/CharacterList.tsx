import React from "react";

export interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CharacterListProps {
  loading: boolean;
  error: boolean;
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({
  loading,
  error,
  characters,
}) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error)
    return <div>error occurred.unable to load characters</div>;
  if (!characters) return null;

  return (
    <ul>
      {characters.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
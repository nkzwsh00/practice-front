import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

interface Character {
  name: string;
  class: string;
  level: number;
}

interface CharacterListProps {
  token: string;
}

export const CharacterList: React.FC<CharacterListProps> = ({ token }) => {
  const { data, isLoading, error } = useQuery<Character[]>(
    "characters",
    async () => {
      const response = await axios.get(
        "https://api.pathofexile.com/character-window/get-characters",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    }
  );

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">キャラクター一覧</h2>
      <ul className="space-y-2">
        {data?.map((character) => (
          <li key={character.name} className="p-2 bg-gray-100 rounded">
            <p className="font-bold">{character.name}</p>
            <p>クラス: {character.class}</p>
            <p>レベル: {character.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useState } from "react";
import { foods, Food, filterItems } from "./data";

export default function FilterableList() {
  return (
    <>
      <SearchBar />
      <hr />
      <List items={foods} />
    </>
  );
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
};

const List = ({ items }: { items: Food[] }) => (
  <table>
    <tbody>
      {items.map((food: Food) => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

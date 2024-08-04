import { useState } from "react";
import { foods, Food, filterItems } from "./data";

export default function FilterableList() {
  const [query, setQuery] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filterItems(foods, query)} />
    </>
  );
}

const SearchBar = ({
  query,
  handleChange,
}: {
  query: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
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

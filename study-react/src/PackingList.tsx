export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
}: {
  items: ItemType[];
  onChangeItem: (item: ItemType) => void;
  onDeleteItem: (id: number) => void;
}) {
  return (
    <ul>
      {items.map((item: ItemType) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{" "}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

type ItemType = {
  id: number;
  packed: boolean;
  title: string;
};

import { useState, useRef } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToCatList = (index) => {
    itemsRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
            scrollToCatList(index);
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={(el) => {
                if (el) {
                  getMap().set(i, el);
                } else {
                  getMap().delete(i);
                }
              }}
            >
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

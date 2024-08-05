import { useState } from "react";

type Image = {
  place: string;
  src: string;
};

const Gallery = () => {
  const [index, setIndex] = useState<number>(0);
  const hasNext: boolean = index < images.length - 1;

  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const image: Image | undefined = images[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      {image && <img src={image.src} />}
      {image && <p>{image.place}</p>}
    </>
  );
};

const images: Image[] = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];

export default Gallery;

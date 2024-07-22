import { getImageUrl } from './utils.js';

function Card({ title, imageId, profession, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{title}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={title}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Card
        title="Katherine Johnson"
        imageId="MK3eW3A"
        profession="mathematician"
        awards={['Presidential Medal of Freedom', 'NASA Group Achievement Award']}
        discovery="mathematical calculations for orbital mechanics"
      />
      <Card
        title="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovery="polonium (chemical element)"
      />
      <Card
        title="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

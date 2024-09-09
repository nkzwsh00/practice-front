import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Contents } from "./Contents";
import { PrimaryButton } from "./PrimaryButton";

export const App = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(data);
  const [formData, setFormData] = useState({ name: "", age: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline p-2 m-2 ">Hello world!</h1>
      <div className="p-2 m-2 container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br />
      <Contents />
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rouded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rouded-full sm:mx-0 sm:shrink-o"
          src="/vite.svg"
          alt="Vite logo"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rouded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outlin-none focus:ring-2 focus:ring-puple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <div className="flex p-2">
        <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
          Save changes
        </button>
      </div>
      <PrimaryButton>Click me</PrimaryButton>
      <div className="">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          className="border border-slate-300 p-2 m-2"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          className="border border-slate-300 p-2 m-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          className="border border-slate-300 p-2 m-2"
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setUsers([...users, { ...formData, age: parseInt(formData.age) }]);
            // formDataを初期化する
            setFormData({ name: "", age: "", email: "" });
          }}
        >
          ADD
        </button>
        <section className="flex flex-row p-3 gap-4 flex-nowrap items-stretch justify-items-center">
          <article className="basis-1/4">
            <h2>First article</h2>

            <p>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>
          </article>

          <div className="flex flex-col basis-1/2">
            <caption className="flex caption-top justify-end">
              Table caption
            </caption>
            <table className="flex-col">
              <thead className="border-y border-slate-300 bg-gray-100">
                <tr className="">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr className="border-y border-slate-300" key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <caption className="flex caption-bottom justify-center">
              end
            </caption>
          </div>

          <article className="basis-1/4">
            <h2>Third article</h2>

            <p>
              Tacos actually microdosing, pour-over semiotics banjo chicharrones
              retro fanny pack portland everyday carry vinyl typewriter. Tacos
              PBR&B pork belly, everyday carry ennui pickled sriracha normcore
              hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed
              trust fund twee, leggings salvia iPhone photo booth health goth
              gastropub hammock.
            </p>

            <p>
              Cray food truck brunch, XOXO +1 keffiyeh pickled chambray
              waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia
              umami wayfarers pickled, asymmetrical kombucha letterpress kitsch
              leggings cold-pressed squid chartreuse put a bird on it. Listicle
              pickled man bun cornhole heirloom art party.
            </p>
          </article>
        </section>
      </div>
    </>
  );
};

type data = {
  name: string;
  age: number;
  email: string;
};

const data: data[] = [
  { name: "John", age: 23, email: "hoge@jp" },
  { name: "Jane", age: 25, email: "fuga@jp" },
  { name: "Joe", age: 22, email: "piyo@jp" },
];

export const Ajax = () => {
  return (
    <div>
      <h1>Ajax</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }}
      >
        get
      </button>
    </div>
  );
};

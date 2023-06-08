import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [input, setInput] = useState("");
  const [persons, setPersons] = useState([
    [100, 2, 3],
    [100, 4, 4],
    [100, 1],
    [100],
    [102],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPersons((prevPersons) => {
        const newPersons = prevPersons.map((item) => {
          const newItem = [...item];
          newItem[0] = newItem[0] - 1;
          return newItem;
        });
        return newPersons.map((item) => {
          if (item[0] === 0) {
            item.shift(); // Remove the first element
          }
          return item;
        });
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let minInd = 0;
    const newPersons = persons.map((item, index) => {
      const newItem = [...item];
      const sum = newItem.reduce((a, b) => a + b, 0);
      if (sum < persons[minInd].reduce((a, b) => a + b, 0)) {
        minInd = index;
      }
      return newItem;
    });
    
    newPersons[minInd].push(parseInt(input));
    setPersons(newPersons);
    setInput("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          required

          onChange={handleInput}
          className="formInput"
        />
        <button>Checkout</button>
      </form>
      <div className="boxdiv">
        {persons.map((item, index) => (
          <Box items={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;

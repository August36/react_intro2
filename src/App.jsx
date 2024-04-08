import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    { header: "Hej verden", body: "body1" },
    { header: "Hej verden", body: "body1" },
    { header: "Hej verden", body: "body1" },
  ]);

  const updateCount = () => {
    console.log("Count skal opdateres");
    setCount(count + 1);
  };

  function addCard() {
    //Det her er IKKE 100% ordentligt
    setData([...data, { header: "Hell yeah!", body: "woooop" }]);
  }

  return (
    <main className={count % 2 === 0 ? "even" : "odd"}>
      <h1>Hej, her er {data.length} artikler</h1>
      <button onClick={updateCount}>Klik her</button>
      <button onClick={addCard}>Tilføj Data</button>
      {data.map((card) => (
        <Card header={card.header} body={card.body} />
      ))}
    </main>
  );
}

export default App;

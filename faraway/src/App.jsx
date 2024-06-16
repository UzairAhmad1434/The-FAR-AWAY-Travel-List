import "./App.css";
import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, description: "Shoes", quantity: 2, packed: false },
    { id: 2, description: "Passports", quantity: 1, packed: true },
    { id: 3, description: "Socks", quantity: 3, packed: false },
  ];

  const [items, setItems] = useState(initialItems);

  return (
    <>
      <Logo />
      <Form />
      <PackingList items={items} />
      <Footer items={items} />
    </>
  );
}

function Logo() {
  return (
    <h1 className="p-8 text-center font-monoton text-6xl bg-yellow-600">
      🏝️ FAR AWAY 💼
    </h1>
  );
}

function Form() {
  return (
    <h3 className="p-2 font-quicksand bg-orange-700 text-2xl text-center">
      What you need for your 😍 trip?
    </h3>
  );
}

function PackingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
}

function Footer({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = (packedItems / totalItems) * 100;

  return (
    <footer className="absolute bottom-0 bg-blue-300 p-8 text-xl text-center w-full">
      💼 You have {totalItems} items in your list and you packed {packedItems}{" "}
      items ({packedPercentage.toFixed(2)}%)
    </footer>
  );
}

export default App;

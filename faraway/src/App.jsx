import "./App.css";
import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, description: "Shoes", quantity: 2, packed: false },
    { id: 2, description: "Passports", quantity: 1, packed: true },
    { id: 3, description: "Socks", quantity: 3, packed: false },
    { id: 4, description: "Shoes", quantity: 2, packed: false },
    { id: 5, description: "Passports", quantity: 1, packed: true },
    { id: 6, description: "Socks", quantity: 3, packed: false },
    { id: 7, description: "Shoes", quantity: 2, packed: false },
    { id: 8, description: "Passports", quantity: 1, packed: true },
    { id: 9, description: "Socks", quantity: 3, packed: false },
    { id: 10, description: "Shoes", quantity: 2, packed: false },
    { id: 11, description: "Passports", quantity: 1, packed: true },
    { id: 12, description: "Socks", quantity: 3, packed: false },
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
    <div className="p-12 ">
      <ul className="text-white  text-xl p-8 border-2 gap-y-10 flex flex-wrap">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="md:w-1/3 w-full text-center">
      {item.quantity} {item.description}
      <button>❌</button>
    </li>
  );
}

function Footer({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = (packedItems / totalItems) * 100;

  return (
    <footer className="fixed bottom-0 bg-blue-300 p-8 text-xl text-center w-full">
      💼 You have {totalItems} items in your list and you packed {packedItems}{" "}
      items ({packedPercentage.toFixed(2)}%)
    </footer>
  );
}

export default App;

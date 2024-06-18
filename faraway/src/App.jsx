import "./App.css";
import { useState } from "react";

function App() {
  const initialItems = [];

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
    <div className="p-4  font-quicksand bg-orange-700 flex flex-col gap-4 justify-center items-center w-full  mx-auto">
      <h3 className="p-4 lg:text-2xl md:text-xl sm:text-md text-center">
        What you need for your 😍 trip?
      </h3>
      <input
        className="p-2 lg:w-48 md:w-36 sm:w-48 w-full h-12 rounded-md text-xl font-medium"
        type="text"
        name="text"
        id="text-id"
        placeholder="Item description"
      />
      <input
        className="p-2 lg:w-48 md:w-36 sm:w-48 w-full h-12 rounded-md text-xl font-medium"
        type="number"
        name="quantity"
        id="quantity-id"
        min="1"
        placeholder="Quantity"
      />
      <button
        type="submit"
        className="p-2 mt-4 bg-yellow-500 text-xl rounded-md w-full lg:w-48 md:w-36 sm:w-48"
      >
        Add Item
      </button>
    </div>
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
    <footer className="fixed bottom-0 bg-blue-300 p-4 text-center w-full flex flex-col md:flex-row md:justify-between items-center text-xl">
      💼 You have {totalItems} items in your list and you packed {packedItems}{" "}
      items ({packedPercentage.toFixed(2)}%)
    </footer>
  );
}

export default App;

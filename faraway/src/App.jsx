import "./App.css";
import { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, description: "socks", quantity: 3, packed: false },
  ];

  const [items, setItems] = useState(initialItems);

  const handleAddItem = (description, quantity) => {
    const newItem = {
      id: items.length + 1,
      description,
      quantity: parseInt(quantity),
      packed: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleTogglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onTogglePacked={handleTogglePacked}
        onDeleteItem={handleDeleteItem}
      />
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

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() && quantity > 0) {
      onAddItem(description, quantity);
      setDescription("");
      setQuantity(1);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 font-quicksand bg-orange-700 flex flex-col gap-4 justify-center items-center w-full mx-auto"
    >
      <h3 className="p-4 lg:text-2xl md:text-xl sm:text-md text-center">
        What you need for your 😍 trip?
      </h3>
      <input
        className="p-2 lg:w-48 md:w-36 sm:w-48 w-full h-12 rounded-md text-xl font-medium"
        type="text"
        name="text"
        id="text-id"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item description"
      />
      <input
        className="p-2 lg:w-48 md:w-36 sm:w-48 w-full h-12 rounded-md text-xl font-medium"
        type="number"
        name="quantity"
        id="quantity-id"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        placeholder="Quantity"
      />
      <button
        type="submit"
        className="p-2 mt-4 bg-yellow-500 text-xl rounded-md w-full lg:w-48 md:w-36 sm:w-48"
      >
        Add Item
      </button>
    </form>
  );
}

function PackingList({ items, onTogglePacked, onDeleteItem }) {
  return (
    <div className="p-12">
      <ul className="text-white text-xl pb-12 gap-y-10 flex flex-wrap">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onTogglePacked={onTogglePacked}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onTogglePacked, onDeleteItem }) {
  return (
    <li
      className="md:w-1/3 w-full text-center cursor-pointer"
      style={{ textDecoration: item.packed ? "line-through" : "none" }}
      onClick={() => onTogglePacked(item.id)}
    >
      {item.quantity} {item.description}
      <button className="ml-2" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

function Footer({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = (packedItems / totalItems) * 100;

  return (
    <footer className="fixed bottom-0 bg-blue-300 p-4 text-center w-full text-xl">
      💼 You have {totalItems} items in your list and you packed {packedItems}{" "}
      items ({packedPercentage.toFixed(2)}%)
    </footer>
  );
}

export default App;

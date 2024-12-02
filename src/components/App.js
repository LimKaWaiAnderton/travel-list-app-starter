import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import PackedItems from "./PackedItems";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // Function to clear all items
  function handleClearAll() {
    setItems([]);
  }

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        <PackingList
          items={filteredItems}
          onTogglePacked={handleTogglePacked}
          onDeleteItem={handleDeleteItem}
        />
        <PackedItems
          items={filteredItems}
          onTogglePacked={handleTogglePacked}
          onDeleteItem={handleDeleteItem}
        />
      </div>
      <div className="clear-all">
        <button onClick={handleClearAll}>Clear All Items</button>
      </div>
      <Stats items={items} />
    </div>
  );
}

export default App;

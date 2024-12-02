import Item from "./Item";

export default function PackingList({ items, onTogglePacked, onDeleteItem }) {
    const unpackedItems = items.filter((item) => !item.packed);
  
    return (
      <div className="list">
        <h3>UnPacked</h3>
        <ul>
          {unpackedItems.map((item) => (
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
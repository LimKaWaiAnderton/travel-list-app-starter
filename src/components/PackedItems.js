import Item from "./Item";

export default function PackedItems({ items, onTogglePacked, onDeleteItem }) {
    const packedItems = items.filter((item) => item.packed);
  
    return (
      <div className="packed-items">
        <h3>Packed Items</h3>
        <ul>
          {packedItems.map((item) => (
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
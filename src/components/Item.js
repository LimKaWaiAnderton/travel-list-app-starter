export default function Item({ item, onTogglePacked, onDeleteItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onTogglePacked(item.id)}
        />
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
          QTY: {item.quantity} x {item.description}
        </span>
        <button
          className="delete-button"
          onClick={() => onDeleteItem(item.id)}
        >
          Delete
        </button>
      </li>
    );
  }
export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentagePacked =
      totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);
  
    return (
      <footer className="stats">
        {percentagePacked === 100 ? (
          <em style={{ color: "green" }}>You got everything!</em>
        ) : (
          <em>
            You have {totalItems} items in the list. You already packed{" "}
            {packedItems} ({percentagePacked}%).
          </em>
        )}
      </footer>
    );
  }
import { useState } from "react";

export default function Form({ onAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (description.trim() === "") {
            alert("Please enter an item description.");
            return;
        }

        const newItem = {
            id: Date.now(),
            description,
            quantity: parseInt(quantity, 10),
            packed: false,
        };

        onAddItem(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need to pack?</h3>
            <select
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <input
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
    );
}
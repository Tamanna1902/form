const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    {id:3,name:'Item 3'}
];

// GET endpoint to retrieve items
app.get('/items', (req, res) => {
    res.json(items);
});

// POST endpoint to add an item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT endpoint to update an item
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedName = req.body.name;

    const item = items.find((item) => item.id === itemId);
    if (item) {
        item.name = updatedName;
        res.json({ message: 'Item updated successfully', item });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE endpoint to delete an item
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1);
        console.log(`Item with ID ${itemId} was deleted successfully.`);
        res.json({ message: 'Item deleted successfully', item: deletedItem[0] });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//mkdir my-node-server
//cd my-node-server
//npm init -y
//npm install express
//node server.js
//post{"name": "Item 3"}
//put{  "name": "Updated Item 2"}
//Delete_Enter the URL: http://localhost:3000/items/2 (assuming you want to delete the item with id 2).
//Click Send.
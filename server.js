const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://localhost:27017/expense_tracker', {

})
.then(() => console.log('Connected to local MongoDB...'))
.catch(err => console.error('Could not connect to local MongoDB...', err));

// Import the Transaction model
const Transaction = require('./models/Transaction');

// Create a new transaction
app.post('/transactions', async (req, res) => {
  const { type, category, amount, date, description } = req.body;

  const transaction = new Transaction({ type, category, amount, date, description });

  try {
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.error('Error saving transaction:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
});

// Get all transactions
app.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    console.error('Error retrieving transactions:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
});

// Get a transaction by ID
app.get('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).send('Transaction not found');
    res.json(transaction);
  } catch (err) {
    console.error('Error retrieving transaction by ID:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
});

// Update a transaction by ID
app.put('/transactions/:id', async (req, res) => {
  const { type, category, amount, date, description } = req.body;

  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { type, category, amount, date, description },
      { new: true }
    );
    if (!transaction) return res.status(404).send('Transaction not found');
    res.json(transaction);
  } catch (err) {
    console.error('Error updating transaction:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
});

// Delete a transaction by ID
app.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).send('Transaction not found');
    res.json({ msg: 'Transaction deleted' });
  } catch (err) {
    console.error('Error deleting transaction:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

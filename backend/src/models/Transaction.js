const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  type: { type: String, enum: ['deposit', 'withdraw', 'transfer'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' },
  method: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Transaction', transactionSchema);
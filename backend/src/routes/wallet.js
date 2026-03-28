const express = require('express');
const router = express.Router();
// يمكنك لاحقًا إضافة عمليات الإيداع والسحب وعرض الرصيد هنا
router.get('/', (req, res) => {
  res.json({ message: 'Wallet API working.' });
});
module.exports = router;
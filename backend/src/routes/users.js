const express = require('express');
const router = express.Router();
const User = require('../models/User');

// تسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  // سجل مستخدم جديد (تحقق من المدخلات وتشفير كلمة المرور)
});
module.exports = router;
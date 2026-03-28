const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Wallet = require('../models/Wallet');
const bcrypt = require('bcryptjs');

// تسجيل مستخدم جديد
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // تحقق من وجود كل الحقول
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'جميع الحقول مطلوبة.' });
    }

    // تحقق من عدم وجود المستخدم مسبقًا
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'البريد الإلكتروني مستخدم بالفعل.' });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);

    // إضافة المستخدم
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    // إنشاء المحفظة
    const wallet = new Wallet({ user: user._id, balance: 0 });
    await wallet.save();

    res.status(201).json({ message: 'تم إنشاء المستخدم بنجاح.' });
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء التسجيل.', error: error.message });
  }
});
module.exports = router;
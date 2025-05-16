const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // only cookies send in https not  send in http
      sameSite: 'lax', 
      maxAge: 3600000, 
    });

   
    res.json({ message: 'Login successful', role: user.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

/*
httpOnly: Protects your token from being stolen by malicious JavaScript (XSS attacks). This is essential for security.

secure: Ensures cookies are only sent over HTTPS in production. If your deployed app uses HTTPS, this is important.

sameSite: Helps prevent CSRF attacks. 'lax' is a good default that balances security with usability.

maxAge: Controls how long a user stays logged in before needing to log in again.
*/

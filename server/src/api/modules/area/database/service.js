const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

class AuthService {
  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
  }

  async register(userData) {
    const user = new User(userData);
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
  }
}

module.exports = new AuthService();
const authService = require('../services/auth.service');

class AuthController {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { user, token } = await authService.login(username, password);
      res.json({ user, token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async register(req, res) {
    try {
      const { user, token } = await authService.register(req.body);
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
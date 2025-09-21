import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/db.js';

export const signup = (req, res) => {
  const { name, email, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

  db.query(sql, [name, email, hash], (err) => {
    if (err) return res.status(500).json({ message: 'Signup failed', error: err });
    res.status(201).json({ message: 'User created' });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], (err, result) => {
    if (err || result.length === 0)
      return res.status(400).json({ message: 'Invalid email or password' });

    const user = result[0];
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};

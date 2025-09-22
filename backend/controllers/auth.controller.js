import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/db.js';

export const signup = (req, res) => {
  const { firstName, lastName, email, phone, password, role } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  const sql = `
    INSERT INTO users 
    (first_name, last_name, email, phone, role, password) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [firstName, lastName, email, phone, role, hash], (err, result) => {
    if (err) {
      console.error(err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      return res.status(500).json({ message: 'Signup failed', error: err });
    }

    res.status(201).json({ 
      message: 'User created',
      user: {
        id: result.insertId,
        firstName,
        lastName,
        email,
        phone,
        role
      }
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Login failed', error: err });
    }

    if (result.length === 0)
      return res.status(400).json({ message: 'Invalid email or password' });

    const user = result[0];
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid)
     
return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  });
};

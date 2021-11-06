import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'Nam',
    email: 'nam@example.com',
    password: bcrypt.hashSync('123456'),
  },
];

export default users;

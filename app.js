const express = require('express');
const app = express();
const port = 3000;
const jwt = require("jsonwebtoken")
require("dotenv").config();


app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: '123456',
      isCompleted: false,
      description: 'Walk the dog',
    },
   {
     id: "327896",
     isCompleted: false,
     description: "I'm traveling",
   }
  ];

  res.json(tasks);
});


const validateHttpMethod = (req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE']; 

  if (!validMethods.includes(req.method)) {
    return res.status(400).send('Bad Request: Invalid HTTP method');
  }

  next();
};

app.use(express.json());
app.use(validateHttpMethod);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (credencialesValidas) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } else { res.status(401).json({ error: 'Credenciales incorrectas' });
}
});

app.get('/ruta-protegida', (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ mensaje: 'Ruta protegida: Acceso concedido', usuario: decoded.username });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
});

  
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
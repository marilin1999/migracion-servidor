const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
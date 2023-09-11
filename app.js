const express = require('express');
const app = express();

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

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
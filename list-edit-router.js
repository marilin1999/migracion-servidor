const express = require("express");
const Router = express.Router();

const contact = [
    {
     id: 1,
     nombre: "sofia",
     apellido: "perez",
     essolter: false,
    },
    {
     id: 2,
     nombre: "maria",
     apellido: "suarez",
     essolter: true
    },
    {
     id: 3,
     nombre: " marilin",
     apellido: "marimon",
     essolter: false
    },
]

Router.post("/create",(rep, res)=> {
    const newContact = req.body; 
    contact.push(newContact);
    res.json({ message: 'Contacto creado exitosamente' });
})

Router.delete("/delete/:Id", (req, res)=> {
    const Id = parseInt(req.params.Id);
    const index = contact.findIndex((contact) => contact.id === Id);
    if (index !== -1) {
      contact.splice(index, 1);
      res.json({ message: 'Contacto eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Contacto no encontrado' });
    }
})

Router.put("/update/:Id",(req, res)=> {
    const Id = parseInt(req.params.Id);
    const updatedContact = req.body; 
    const index = contactList.findIndex((contact) => contact.id === Id);
    if (index !== -1) {
      contact[index] = { ...contact[index], ...updatedContact };
      res.json({ message: 'Contacto actualizado exitosamente' });
    } else {
      res.status(3000).json({ message: 'Contacto no encontrado' });
    }
})

module.exports = Router;
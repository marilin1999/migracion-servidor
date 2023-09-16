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
Router.get("/completed", (req, res) => {
const completedcontact = contact.filter((contact)=> contact.completo);
res.json(completedcontact);
})

Router.get("/incomplete",(req, res) => {
const incompletecontact = contact.filter((contact)=> !contact.completo);
res.json(incompletecontact);
})

module.exports = Router;
const express = require("express");
const router = express.Router();


const { 
    addPerson, 
    getPeople, 
    updatePerson, 
    deletePerson 
} = require("../controllers/people.js");

// GET all people
router.get('/', getPeople);

// POST a new person
router.post('/', addPerson);

// PUT (update) a person
router.put('/:id', updatePerson);

// DELETE a person
router.delete('/:id', deletePerson);

module.exports = router
const {people} = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};
  
const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "Please provide name" });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, person: newPerson });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((p) => p.id === parseInt(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `No match for ${id}` });
    }

    person.name = name;
    res.status(201).json({ success: true, person: people });
}

const deletePerson = (req, res) => {
    const { id } = req.params;

    const personExists = people.find((p) => p.id === parseInt(id));
    if (!personExists) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }

    const newPeople = people.filter(
        (personExists) => personExists.id !== parseInt(id)
    )
    res.status(200).json({ success: true, data: newPeople });
}

    

module.exports = {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
}
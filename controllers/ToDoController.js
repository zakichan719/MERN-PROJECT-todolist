const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

  
module.exports.saveToDo = (req, res) => {
    const { text } = req.body;

    const newToDo = new ToDoModel({
        text,
        date: Date.now() // Set the current date and time
    });

    newToDo
        .save()
        .then(savedToDo => {
            console.log("Added Successfully...");
            console.log(savedToDo);
            res.send(savedToDo);
        })
        .catch(err => console.log(err));
};


 



module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
const express= require('express');
const router = express.Router();

const Todo = require('../models/todo');




router.post('/create', (req, res)=>{

    let data = req.body;
    let todo = new Todo(data);

    todo.save()
        .then(
            (savedTodo)=>{
                res.send(savedTodo)
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})


router.get('/all', (req, res)=>{
    
    Todo.find()
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )


})

router.delete('/delete/:id', (req, res)=>{

    let myId = req.params.id;

    Todo.findByIdAndDelete({ _id: myId })
        .then(
            (deletedTodo)=>{
                res.send(deletedTodo);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})

router.put('/update/:id', (req, res)=>{

    let id = req.params.id;

    Todo.findByIdAndUpdate(  { _id: id }  , { status: true }  )
        .then(
            (updatedTodo)=>{
                res.send(updatedTodo);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )


})


module.exports = router;
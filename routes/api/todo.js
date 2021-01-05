 const express= require('express');
const router= express.Router();
const {check, validationResult} = require('express-validator/check');
const { ObjectID } = require('mongodb');

const Todo = require('../../models/todo');


// @route POST api/todo
// create todo
router.post('/', [ 
    check('title','title is required').not().isEmpty(),
    check('description','description is required').not().isEmpty()
],
async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{

        const newTodo = new Todo ({
        title: req.body.title,
        description: req.body.description,
    
    })
    const todo = await newTodo.save();
    res.json(todo);

    }catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

});



// @route get api/todo
// get all todo
router.get ('/', async(req,res) => {
    try{
        const todos = await Todo.find().sort({ date: -1});
        res.json(todos);
    } catch (err){
        console.error(err.message);
        res.status(500).send('server error');

    }
} );

// @route get api/todo/:id
// get todo by id
router.get ('/:id', async(req,res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            return res.status(500).send('server error');
        }
        res.json(todo);
    } catch (err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){

            return res.status(500).send('server error');
        }
        res.status(500).send('server error');

    }
} );

// @route delete api/todo/:id
// delete a todo
router.delete ('/:id', async(req,res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){

            return res.status(500).send('todo not found');
        }
        await todo.remove();

        res.json({msg: 'todo removed'});
    } catch (err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){

            return res.status(500).send('server error');
        }
        res.status(500).send('server error');

    }
} );

// @route put api/todo/:id
// update todo
router.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedtodo = await Todo.findOneAndUpdate(
        { _id: id },
        { $set: req.body }
      );
      res.send(updatedtodo ? updatedtodo : { msg: "No item found" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
 
 module.exports= router;




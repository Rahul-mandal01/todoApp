// import the model
const Todo = require("../models/Todo");

// define route handlers
exports.getTodo = async(req, res) => {
    try{
        // fetch all todo items from the database
        const todos = await Todo.find({});

        // response
        res.status(200).json({
            success:true,
            data: todos,
            message:"Entire Todo Data is fetched",
        })
    }
    catch(error){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            messsage:"Server Error",
        })

    }

}

exports.getTodoById = async(req, res) => { 
    try{
        // extract todo items basis on ID request
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found for given ID",
            })
        }

        // data found for given ID
        res.status(200).json({
            success:true,
            data: todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }

    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error: err.message,
            messsage:"Server Error",
        })
    }


}
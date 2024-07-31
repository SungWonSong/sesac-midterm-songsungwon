const { sequelize, Todo } = require('../models');


// Todo 추가
exports.addTodo = async (req, res) => {
    const {title, done} = req.body;
    
    if (newTodo.title != null && newTodo.done != null){
        const newTodo = await Todo.create({title,done});
        res.send({id: newTodo.id, title: newTodo.title, done: newTodo.done});
    } else if (newTodo.title != null && newTodo.done == null){
        const newTodo = await Todo.create({id,title,done});
        res.send({id: newTodo.id, title: newTodo.title, done: newTodo.done});
    } else {
        res.send({message: "Internal Server Error"});
    }

} 

// Todo 전체조회
exports.getTodos = async (req,res) => {
    const Todolist = await Todo.findAll();
  };


// Todo 특정 ID 조회
exports.getTodobyId = async (req, res) => {

  const { id } = req.params;
  const { todo } = req.body;
  if (Todo.id != null) {
    const foundTodo = await Todo.findByPk(id);
  } else {
    res.send({message: "Todo not found"});
  }
};

// Todo 특정 id 업데이트
exports.updateTodobyId = async (req, res) => {

    const { id } = req.params;
    const { todo } = req.body;
  
    if (Todo.id != null) {
      const foundTodo = await Todo.findByPk(id);
    } else {
      res.send({message: "Todo not found"});
    }

    foundTodo
    
  };


// 댓글 삭제
exports.deleteTodobyId = async (req, res) => {

  const { id } = req.params;
  const {todo} = await Todo.findByPk(id);

  if (Todo.id != null) {
    const foundTodo = await Todo.findByPk(id);
  } else {
    res.send({message: "Todo not found"});
  }

  await todo.destroy();
  res.status(200).json({ message: '삭제 완료' });
};
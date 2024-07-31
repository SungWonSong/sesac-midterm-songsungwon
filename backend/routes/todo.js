const express = require('express');
const router = express.Router();
const Ctodo = require('../controller/Ctodo');

// todo 등록
router.post('/',Ctodo.addTodo);

// todo 전체조회
router.get('/', Ctodo.getTodos);

// todo id별로 조회
router.get('/:id', Ctodo.getTodobyId);

// todo 수정
router.patch('/:id', Ctodo.updateTodobyId);

// todo 삭제
router.delete('/:id', Ctodo.deleteTodobyId);

module.exports = router;
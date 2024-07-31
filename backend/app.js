const express = require('express');
const { title } = require('process');
const app = express();
const { sequelize } = require('../backend_1/models');
app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('public'))
app.use('/todos', todoRouter);


app.get('/', (req,res)=> {
    res.render('index', {title : 'Home'})
})
app.get('/about', (req,res)=> {
    res.render('about', {title : 'About'})
})
app.get('/create', (req,res)=> {
    res.render('create', {title : 'Create'})
})
// 지정된 경로외 경로일때 (예외일때)
app.use((req,res)=> {
    res.status(404).render('404');
})

app.listen(8000,()=>{
    console.log('http://localhost:8000')
});







c
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// 데이터베이스 동기화
sequelize.sync();


// 라우팅 분리
const todoRouter = require('../backend_1/routes/todo');


app.use('/todos', todoRouter);
 
// 일단 이까지하고 생각중....
app.use(express.static('./views/public')); 

app.get('/', (req, res) => {
  res.render('cover')
})
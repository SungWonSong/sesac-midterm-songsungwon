const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/todo');
const { sequelize } = require('./models/index')

//  body-parser 미들웨어 등록 (json 파싱이라 일단 필요 x)
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// 라우터 등록
app.use('/todos', router);

// 모델 등록
sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`database connection succeeded`);
        console.log(`Server is running! Port number is ${PORT}`);
    });
}).catch((err)=>console.log(err))
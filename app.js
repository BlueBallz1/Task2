const express = require('express');

const { PORT } = require('./configs/variables');
const userRouter = require('./api/users/users.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRouter);


app.listen(PORT,()=>{
    console.log('Listen', PORT);
})
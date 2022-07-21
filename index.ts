import {Request, Response, NextFunction} from 'express'
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use((err: { message: any; },req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    if(err instanceof mongoose.Error.ValidationError){
        console.log('Vaidation Error');
        res.status(400).send(err.message);
    }
    else{
        res.status(500).send(err.message);
    }
});

routes.configure(app);

const start = async () => {
    await mongoose.connect('mongodb://localhost');

    app.listen(PORT, ()=>{
        console.log(`Express server listening on port ${PORT}`);
    });
}

start();

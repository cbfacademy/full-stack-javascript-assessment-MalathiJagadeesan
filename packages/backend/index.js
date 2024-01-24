import express from "express" ;
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
//import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';



const app = express();

//Middleware for handling CORS policy
//option 1: Allow All origins with Default of cors(*)
app.use(cors());

//option2 : Allow custom origins

//app.use(
  //  cors({
    //    origin:'http://localhost:9012',
      //  methods: ['GET', 'POST', 'PUT', 'DELETE'],
        //allowedHeaders:['Content-Type'],
    //})
//);

//Middleware for parsing request body
app.use(express.json());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to Book store')
});

app.use('/books', booksRoute);



mongoose 
.connect(mongoDBURL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('App is connected to database');
    app.listen(PORT,() =>{
  console.log(`App is listening to port: ${PORT}`);

});

})
.catch((error) => {
    console.log(error);
});
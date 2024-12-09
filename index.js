import express from 'express';
import router from './routes/project.js';
import { dbConnectin } from './config/dbConnection.js';
import cors from 'cors'

const app = express();
const PORT = 4000;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('uploads'))
app.use(cors())

//DB CONNECTION
dbConnectin('mongodb+srv://nk869694:Narender1@cluster0.wst4i.mongodb.net/NarenderPortfolio')

//ROUTES
app.use('/api/project', router)



app.listen(PORT, () => {
    console.log(`Server is Started on PORT:${PORT}`)
})
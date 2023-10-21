import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import "./passport";
import passport from "passport";
dotenv.config();
import session from "express-session";
import { connectDB } from "./database/database";
import routes from "./Routes/index.routes";



const app = express();
var corsOptions = {
    origin: 'http://localhost:3000/',
}
app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat'
  }))
app.use(passport.initialize())
app.use(passport.session())
// Connect to MongoDB
connectDB();
app.get('/', (req, res) => res.status(200).json({message: 'AF Server up and Running'}));

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`AF Server running on port ${PORT}`));
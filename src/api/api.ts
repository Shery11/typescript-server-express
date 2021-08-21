// Controllers
import * as express from 'express';
import * as cors from 'cors';
import { Config } from './config';
import { Routes } from './routes';
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const config = new Config();


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Routes
app.use(new Routes().app);

// Create api to host all other top-level functions

const api = express();
api.use('/api', app);

app.listen(config.PORT, () => {
    console.log(`Listening on ${config.PORT}`)
})

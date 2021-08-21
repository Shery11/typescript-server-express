
import * as express from 'express';
export class ExampleController {

    constructor(
        public app = express.Router()
    ) {

        //Get List
        app.get('/monitortags', (req, res) => {
            return res.status(200).json({ result: "Got results" });
        });

        // Get By ID
        app.get('/:id', (req, res) => {
            return res.status(200).json({ result: "Got results" + req.params.id });
        });

        // Add
        app.post('/', (req, res) => {

            return res.status(200).json({ result: "Got results" + req.body });


        });

        // Update
        app.put('/:id', (req, res) => {
            console.log(req.params.id)
            return res.status(200).json({ result: "Got results" + req.body });

        });

        // Delete
        app.delete('/:id', (req, res) => {
            return res.status(200).json({ result: "Got results" + req.params.id });
        });



    }




}
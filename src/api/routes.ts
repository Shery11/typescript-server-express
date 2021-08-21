
import * as express from 'express';

// Controllers
import { ExampleController } from './controllers/example.controller';

export class Routes {

  constructor(
    public app = express.Router()
  ) {

    //Routes
    app.use('/auth', new ExampleController().app);


  }

}
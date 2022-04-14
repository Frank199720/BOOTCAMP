import express , { Express , Request , Response} from 'express'
import dotenv from 'dotenv'

// Configuration the .env file

dotenv.config();

//Create Express app

const app: Express = express();
const port : string | number  = process.env.PORT || 3000;

// Define the first Route of APP

/**
 * 
 */

app.get('/', ( req : Request , res : Response) => {

    //Send Hello World

    res.send(`Hello World from APP Express`);

});

app.get('/hello', ( req : Request , res : Response) => {

    //Send Hello World

    const { name = 'anónimo' } = req.query;

    

    res.status(200).json({
        data: {
            message: `Hola, ${name}` 
        }
    })

});

//First Route

app.get('/question1', ( req : Request , res: Response)=>{

    //Send JSON format response

    res.status(200).json({
        data: {
            message: 'Goodbye, world'
        }
    })

});

//Execute APP and Listen Requests to PORT

app.listen( port , () => {
    
    console.log(`APP is running at http://localhost:${port}`);

});
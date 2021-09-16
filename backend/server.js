import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cards from "./dbCards.js"

//App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:Hf5d7Vq503iOv2ff@cluster0.ho3oo.mongodb.net/tinderdb?retryWrites=true&w=majority'
//Middlewares
app.use(express.json())
app.use(cors());

//DB COnfig
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connection established");
})
//API Endpoints
app.get('/', (req,res)=>{
    res.status(200).send('Hello World')
})

app.post('/cards', (req, res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req,res)=>{
    Cards.find((err, data) =>{
        if (err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, ()=>{
    console.log(`listening on localhost: ${port}`);

})
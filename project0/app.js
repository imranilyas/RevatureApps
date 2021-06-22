import express from 'express';
import MonsterDrops from './model/MonsterDrops.js';
import { getItem } from './routes/getItem.js';
import { addItem } from './routes/addItem.js';
const app = express();
app.use(express.json());

app.get('/drops/:name', async (req, res) => {
    try {
        const drops = await getItem(req.params);
        console.log(drops);
        res.json(drops);
    } catch (error) {
        console.error(err);
        res.status(500).json({err: "bad stuff"});
    }
});

app.post('/drops', async (req, res) => {
    try {
        const {b} = req.body;
        console.log(req.body.b);
        await addItem(b);
        //res.send(newDrop);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "bad stuff"});
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening on port 3000");
});
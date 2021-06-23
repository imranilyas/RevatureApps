import express from 'express';
import MonsterDrops from './model/MonsterDrops.js';
import { getItem } from './routes/getItem.js';
import { addItem } from './routes/addItem.js';
const app = express();
app.set('query parser', 'simple');
app.use(express.urlencoded({ extended: true }));
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

app.post('/add', async (req, res, next) => {
    try {
        let b = req.body;
        let d = new MonsterDrops(b.name, b.generalName, b.monster, b.dropRate, b.minWorldRank, b.rarity);
        //console.log(req.body.b);
        const newDrop = await addItem(d);
        res.send(newDrop);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "bad stuff"});
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening on port 3000");
});
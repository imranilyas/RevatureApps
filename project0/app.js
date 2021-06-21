import express from 'express';
import { getItem } from './ddbdoc_get_item.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/drops', (req, res) => {
    try {
        const drops = getItem();
        res.json(drops);
    } catch (error) {
        console.error(err);
        res.status(500).json({err: "bad stuff"});
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening on port 3000");
});
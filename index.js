const express = require('express');
const app = express();
const cors =require('cors');

const port = process.env.PORT || 4000;

const chefRecipe = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/chef', (req, res) => {
    res.send(chefRecipe)
})

app.listen(port, () => {
    console.log(`dragon API is running ${port}`);
})
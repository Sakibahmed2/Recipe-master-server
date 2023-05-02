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

app.get('/chef/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const selectedId = chefRecipe.find(chef => chef.id === id);
    res.send(selectedId)
})

app.listen(port, () => {
    console.log(`dragon API is running ${port}`);
})
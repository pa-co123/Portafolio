const express = require('express');
const axios = require('./node_modules/axios/index.d.cts');
const app = express();

app.use(express.static('public'));

app.get('/pokemon/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Pokémon no encontrado' });
    }
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));

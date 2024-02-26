const express = require('express');
const app = express();
const port = 3000;// 
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/:folders/:id.json', (req, res) => {
    res.json(require ('./' + req.params.folders + '/' + req.params.id + '.json'));
});



console.log("hola")
app.listen(port)
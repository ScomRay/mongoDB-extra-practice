const express = require('express');
const bodyParser = require('body-parser');
const {MovieRay} = require('./movieRay');
const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({message: 'Server on C:'});
});

//Create Movie
app.post('/crear/pelicula', (req, res) => {
    const {titulo, anio, sinopsis, genero} = req.body;
    const newPelicula = MovieRay({
        titulo,
        anio,
        sinopsis,
        genero
    });
    newPelicula.save((err, pelicula) => {
        err
        ? res.status(409).send(err)
        : res.status(201).send(pelicula);
});
});

app.get('/all/peliculas',(req,res) => {
    MovieMike.find().exec()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.status(409).send(err))
  });
  
  app.get('/pelicula/:id',(req,res)=> {
    const {id} = req.params;
    MovieMike.findById(id).exec()
        .then(pelicula => pelicula ? res.send(pelicula) : res.status(404).send({message:'Pelicula not found'}))
        .catch(err => res.status(409).send(err))
  });

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
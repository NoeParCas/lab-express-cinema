const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) =>{
    res.render('index')
});

/* List the Movies */

router.get('/movies', (req, res, next) =>{
    //buscar en la base de datos la lista de pelis
    Movie.find()
    .then((response) => {
        res.render("movies.hbs", {response})
    })
    .catch((err) => {
        console.error(err);
    })
    })

 /* Movie detail */   
 router.get('/movies/:id', (req, res, next) =>{
     //acceder a cada peli
     Movie.findById(req.params.id)
     .then((response) => {
         res.render("movie-details.hbs", {response})
         console.log(response)
     })
     .catch((err) => {
         next(err)
     })
 })

module.exports = router;

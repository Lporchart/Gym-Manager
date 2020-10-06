const express = require('express')
const routes = express.Router()
const instructors = require('./instructors')

routes.get('/', function(req, res){
    return res.redirect('instructors')
})

routes.get('/members', function(req, res){
    return res.render('members/index')
})

routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

routes.post('/instructors', instructors.post)

routes.get('/instructors/create', function(req, res){
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)


module.exports = routes

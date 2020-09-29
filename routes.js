const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.redirect('instructors')
})

routes.get('/members', function(req, res){
    return res.render('members/index')
})

routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

module.exports = routes

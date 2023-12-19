const { Router } = require("express");
const routes = new Router();

const emailController = require('./controllers/emailController');
routes.post('/sendemail', emailController.index);
module.exports = routes;
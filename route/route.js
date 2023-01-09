const express = require('express');
const {createPost} = require ('../controller/controller')

const cloudRouter = express.Router();

cloudRouter.route('/').post(createPost);

module.exports= cloudRouter;
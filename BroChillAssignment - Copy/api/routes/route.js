const { getController, createPost, getImage } = require('../Controllers/controller') 
const Post = require('../Model/model')

const express = require('express')
const router = express.Router();

router.get('/', getController)

router.post('/post', createPost)

router.get('/getImage/:name', getImage)

module.exports = router
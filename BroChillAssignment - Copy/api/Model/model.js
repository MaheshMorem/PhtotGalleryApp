const mongoose = require('mongoose')

const SchemaOfImage = new mongoose.Schema({
    img: String,
    tag: String
});

module.exports = mongoose.model("Image", SchemaOfImage)

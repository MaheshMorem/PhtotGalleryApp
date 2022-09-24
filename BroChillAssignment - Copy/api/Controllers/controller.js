const Post = require('../Model/model')
const params = require('params')
exports.getController = (req, res) => {
    const allPosts = Post.find().then( allPosts => {
        res.status(200).json({
            posts: allPosts
        })
    }).catch((err) => {
        res.json({"err": "Error occured"})
    })
}

exports.createPost = (req, res, next)=>{
    Post.create(req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data);
        }
    });
}

exports.getImage = (req, res, next) => {
    const image = Post.findOne( {tag: req.params.name.replace(':','')} , (err, img) => {
        if(!img){
            res.json(1)
        }else{
            res.json(img)
        }
    })
    // res.json({
    //     "url": req.params.name
    // })   
}


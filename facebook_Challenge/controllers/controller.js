// const { response } = require('express')
const { Post } = require ('../models/Article')


const gethomepage = (req, res) => {
    Post.find()
            .then( result => 
                res.render('homepage', {result})
                )
            .catch( err => console.log(err))   
}

const createNewPost = (req, res) => {
    if (req.method === "GET"){
            res.render('homepage')   
    }

    if(req.method === "POST"){
        console.log(req.body)
        const post = new Post(req.body)
        post.save()
            .then( result => res.redirect('/feed'))
            .catch(err => res.render('homepage', { error:err.errors}))
    }
   
}

const showOnePost = (req, res) =>{
    Post.findById({_id : req.params.id})
    .then( result => 
        res.render('onePost' , {result})
        )
    .catch( err => console.log(err))
}


const updateOnePost = (req, res) => {
    if (req.method === "GET"){
        Post.findById({_id : req.params.id})
        .then( result => 
            res.render('editOnePost' , {error : false , result})
            )
        .catch( err => console.log(err))
    }


    if(req.method === "POST"){
        Post.findByIdAndUpdate({_id : req.params.id})
        .then( result => {
            result.Name = req.body.Name
            result.Message = req.body.Message
            result.save()
            .then( result => 
                res.render('onePost', {error : false , result})
                )
            .catch( err => res.render('onePost' , { error : err.errors , result} ))
        
        }
            )
        .catch( err => console.log(err))
    }
   
}


const deleteOnePost = (req, res) => {
    Post.findByIdAndDelete({_id : req.params.id})
            .then( result => 
                res.redirect('/feed')
                )
            .catch( err => console.log(err))
            
}


module.exports = {
    gethomepage,
    createNewPost,
    showOnePost,
    updateOnePost,
    deleteOnePost,
}
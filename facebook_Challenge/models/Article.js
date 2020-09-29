const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FEED = new Schema ({
            Name : {
                type: String,
                required: true,
                maxlength: 15,
            },
            Message : {
                type: String,
                required: true,
                maxlength: 40,
            },
}, {timestamps: true})


const Post = mongoose.model('Post' , FEED)

module.exports = {
    Post
}
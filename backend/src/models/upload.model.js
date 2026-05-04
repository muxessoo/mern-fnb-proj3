const mongoose = require('mongoose')

const gituploadSchema = new mongoose.Schema({
    image:String,
    caption:String
})

const gituploadModel = mongoose.model('gitupload',gituploadSchema)
module.exports=gituploadModel
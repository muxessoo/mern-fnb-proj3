const express = require('express')
const gituploadModel = require('./models/upload.model')
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const cors = require('cors')

const app = express()


// middlewares
app.use(express.json())
app.use(cors({
    origin: 'http://mern-fnb-proj3.onrender.com/'
}));

const upload = multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single('image'),async(req,res)=>{
    const result = await uploadFile(req.file.buffer)
    const post = await gituploadModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message:'message created',
        post
    })
})

app.get('/posts', async(req,res)=>{
    const posts = await gituploadModel.find()
    res.status(200).json({
        message:'feed fetched',
        posts
    })
})


module.exports=app
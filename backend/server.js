require('dotenv').config()
const app = require('./src/app')
const connectDB= require('./src/db/db')
const axios = require('axios');

const URL = 'https://mern-fnb-proj3.onrender.com/posts'
setInterval(() => {
  axios.get(URL)
    .then(() => console.log('Ping successful: Keeping the server awake!'))
    .catch((err) => console.error('Ping failed:', err.message));
}, 840000);

connectDB()

app.listen(process.env.PORT||3000,()=>{
    console.log('server is running on port 3000')
})
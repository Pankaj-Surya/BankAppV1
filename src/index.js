const express = require('express')
const bodyParser = require('body-parser')
const {PORT}  = require('./config/serverConfig')
const app = express()


const setupAndStartServer =()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
     
    //app.use('/api', apiRoutes)

    app.get('/test', (req,res)=>{
        res.send("Hi Test")
    })
    app.listen(PORT,()=>{
        console.log(`Server start successfully ${PORT}`)
    })
}

setupAndStartServer()
const express = require('express')
const bodyParser = require('body-parser')
const {PORT}  = require('./config/serverConfig')

const {User} =  require('./models/index')
const UserRepository =  require('./repository/user-repository')

const setupAndStartServer = async ()=>{
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
     
    //app.use('/api', apiRoutes)

    // app.get('/test',async (req,res)=>{
    //     res.send("Hi Test")
    // })
    app.listen(PORT,async ()=>{
        try {
            console.log(`Server start successfully ${PORT}`)
            const repo = new UserRepository();
            // await repo.deleteUser({userId : 1}) 
            //console.log(repo.deleteUser(1))
            //await repo.createUser({firstName:'bala',lastName:'singh',email:'bala@gmmail.com',password:'12345'})
           // User.create({firstName:'pankaj',lastName:'suryavanshi',email:'pankajs@gmmail.com',password:'12345'})       
        } catch (error) {
            console.log(error)
        }
     
    })
}

setupAndStartServer()
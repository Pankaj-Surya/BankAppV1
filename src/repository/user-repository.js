 const {User} = require('../models/index')

 class UserRepository{
    async createUser({firstName,lastName,email,password}){
        try {
          console.log("dd")
           const user = await User.create({firstName,lastName,email,password})
           return user
          } catch (error) {
           throw{error}          
        }
    }

    async deleteUser({userId}){
           try {
             await User.destroy({
                where: {
                    id:userId
                }
             })
           } catch (error) {
             throw{error}
           }
    }

    async 
 }

 module.exports = UserRepository
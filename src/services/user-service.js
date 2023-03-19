const {UserRepository} = require('../repository/index')


class UserService{
  
    constructor(){
        this.userRepository = new UserRepository();
    }

    async createUser(data){
        try {
            const user  =  await this.userRepository.createUser(data);
            return user;  
        } catch (error) {
            console.log("Something went wrong service layer")
            throw{error}   
        } 
    }


    async deleteUser(userId){
        try {
            await this.userRepository.deleteUser(userId);
             
        } catch (error) {
            console.log("Something went wrong service layer")
            throw{error}   
        } 
    }


    async updateUser(userId, data){
        try {
            const user  =  await this.userRepository.updateUser(userId,data);
            return user;  
        } catch (error) {
            console.log("Something went wrong service layer")
            throw{error}   
        } 
    }

    async getUser(userId){
        try {
            const user  =  await this.userRepository.getUser(userId);
            return user;  
        } catch (error) {
            console.log("Something went wrong service layer")
            throw{error}   
        } 
    }


}


module.exports = UserService
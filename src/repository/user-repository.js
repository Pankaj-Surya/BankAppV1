const { User } = require('../models/index')

class UserRepository {
  async createUser({ firstName, lastName, email, password }) {
    try {
      console.log("dd")
      const user = await User.create({ firstName, lastName, email, password })
      return user
    } catch (error) {
      console.log("Something went wrong with repository layer")
      throw { error }
    }
  }

  async deleteUser(userId ) {
    try {
      await User.destroy({
        where: {
          id: userId
        }
      })
    } catch (error) {
      console.log("Something went wrong with repository layer")
      throw { error }
    }
  }


  async updateUser(userId, data ) {
    try {
      const user = await User.update(data, {
        where: {
          id: userId
        }
      })
      return user;
    } catch (error) {
      console.log("Something went wrong with repository layer")
      throw { error }
    }
  }


  async getUser(userId) {
    try {
      const user = await User.findByPk(userId)
      return user;
    } catch (error) {
      console.log("Something went wrong with repository layer")
      throw { error }
    }
  }



}

module.exports = UserRepository
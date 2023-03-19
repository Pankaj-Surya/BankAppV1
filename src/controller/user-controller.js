const {userService} = require("../services/index")


const userService = new UserService();

const create = async (req, res) => {
   try {
      const user =  await userService.createUser(req.body);
      return request.status(201).json({
        data: user,
        success:true,
        message: 'user created successfully',
        err:{}
      })
   } catch (error) {
    console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a user",
            err:error
        })
   }

}

// DELETE. -> /user/:id
const destroy = async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);   
      return res.status(200).json({
        data: user,
        success:true,
        message: 'User deleted successfully',
        err:{}
    });  
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a user",
            err:error
        })   
    }
}

// Patch -> /user/:id -> req.body
const update = async (req,res)=>{
    try {
       const user = userService.updateUser(req.params.id,req.body) 
       return res.status(200).json({
        data: user,
        success:true,
        message: 'User updated successfully',
        err:{}
    }); 
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update a user",
            err:error
        }) 
    }
}

// GET -> /user/:id
const get = async (req,res)=>{
    try {
        const user = await userService.getUser(req.params.id)
        return res.status(200).json({
            data: user,
            success:true,
            message: 'user get successfully',
            err:{}
        }); 
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get a user",
            err:error
        })
    }
}

module.exports={
    create,update,destroy,get
}

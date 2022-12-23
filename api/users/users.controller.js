const usersService = require('./users.service');

module.exports = {
    getAllUsers: async (req,res)=>{
        try{
            const users = await usersService.getUsers();
            res.json(users);
        }
        catch(e){
            res.status(400).json(e.message);
        }
        
    },

    getUserById: async(req,res)=>{
        try{

            const user = await usersService.getUserById(req.params.userId);
            res.json(user);
        }
        catch(e){
            res.status(404).json(e.message);
        }
    },

    createUser: async (req,res) =>{
        try{
            const create = await usersService.createNewUser(req.body)
            res.status(201).json('Create');
        }
        catch(e){
            res.status(409).json(e.message);
        }

    },

    deleteUser: async (req, res)=>{
        try {
            const remUser = await usersService.removeUser(req.params.userId);
            res.status(200).json('User has been deleted');
        } catch (e) {
            res.status(404).json(e.message);
        }
    },

    updateUser: async (req,res)=>{
        try {
            const chngUser = await usersService.updateInfoUser(req.params.userId,req.body);
            res.status(200).json('User has been update');

        } catch (e) {
            res.status(404).json(e.message);        
        }

    }

}
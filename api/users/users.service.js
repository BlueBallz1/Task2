const path = require('path');
const fs = require('fs').promises;


const pathToDataBase = path.join('C://Users//crolm//OneDrive//Desktop//Work//RocketCourse2//nodeJs//RocketCourse//nodeJs//Task2//database//users.json');

module.exports = {

    getUsers: async ()=>{
        const list = await fs.readFile(pathToDataBase);
        const parseList = JSON.parse(list);

        return parseList;
        
    },

    getUserById: async (userId)=>{
        const list = await fs.readFile(pathToDataBase);

        const user = JSON.parse(list)[userId-1];

        if(!user){
            throw new Error('User not Found')
            return;
        }

        return user;


    },

    createNewUser: async ({name,age,email})=>{
        const list = await fs.readFile(pathToDataBase);
        const users = JSON.parse(list);

        const newUser = 
        {   name,
            age,
            email
        }

        for(item of users){
            if(item.email === email){
                throw new Error('This email is already taken')
                return;
            }
        }

        users.push(newUser);

        await fs.writeFile(pathToDataBase,JSON.stringify(users));

        return newUser
    },
   
    removeUser: async (userId)=>{
        const list = await fs.readFile(pathToDataBase);
        const users = JSON.parse(list);

        const rmUser = users[userId-1];
        
        if(!rmUser){
            throw new Error('User Not Found');
            return;
        }

        users.splice(userId-1,1);


        await fs.writeFile(pathToDataBase,JSON.stringify(users));

        return rmUser;
        
    },

    updateInfoUser: async (userId,body)=>{
        const list = await fs.readFile(pathToDataBase);
        const users = JSON.parse(list);

        const chngUsers = users[userId-1];
     
        if(!chngUsers){
            throw new Error('User Not Found');
            return
        }
        console.log(chngUsers);

        for(item of users){
            if(body.email === item.email){
                throw new Error('This email is already taken');
                return
            }
        }
        users.splice(userId-1,1,body);

        await fs.writeFile(pathToDataBase,JSON.stringify(users));
    
        return chngUsers;
    }

}
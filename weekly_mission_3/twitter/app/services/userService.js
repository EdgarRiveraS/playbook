const User = require ('./../models/user')
class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin Bio")
    }
    static getInfo(entrada){
       var InfoList = [entrada.id, entrada.userName, entrada.name, entrada.bio]
       return InfoList      
    }
    static updateUserUserName(user,newUser){
        return user.userName = newUser
    }
    static getAllUserNames([user1,user2,user3]){
        var listUserNames = [user1.userName, user2.userName, user3.userName]
        return listUserNames
    }
}
module.exports = UserService
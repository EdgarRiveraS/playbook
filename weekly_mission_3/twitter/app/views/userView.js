const User = require ('./../../app/services/userService')
class UserView{
    static createUser(payload){
      if(payload === null){
        console.log("Error es null")
        return {error: "El payload no existe."}
      } else if(typeof payload.userName === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
        return User.create(payload.id, payload.userName, payload.name)
      } else{
        return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
      }
    }
  }
  module.exports = UserView
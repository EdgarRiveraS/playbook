class User{
    constructor(id, userName, name, bio, dateCreated, lastUpdated) {
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    getUsername(){
        return `El userName es: ${this.userName}`
    }
    getBio(){
        return `El Bio es: ${this.bio}`
    }
    getDateCreated(){
        return `El ultimo dato Creado fue: ${this.dateCreated}`
    }
    getLastUpdated(){
        return `El ultimo dato Agregado fue: ${this.lastUpdated}`
    }
    set setUserName (newUserName){
        this.userName = newUserName
    }
    set setUserbio(newBio){
        this.bio = newBio
    }
}
module.exports = User
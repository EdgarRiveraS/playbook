const User = require ('./../../models/user')
describe ("Unit Test User class", () =>{
    /*test ('1.1) Create an User objet', () =>{
        const user = new User (1, "carloGilmar", "Carlo", "Bio", "dateCreated", "lastUpdated")
        expect(user.id).toBe(1);
        expect(user.username).toBe("carloGilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lastUpdated).toBe("lastUpdated");
    })*/
    test ('1.2) Create an User objet', () =>{
        const user = new User (1, "carloGilmar", "Carlo", "Bio")
        expect(user.id).toBe(1);
        expect(user.username).toBe("carloGilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })
    test ('Add getters', () =>{
        const user = new User (1, "carloGilmar", "Carlo", "Bio")
        expect(user.username).toBe("carloGilmar");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    })
})
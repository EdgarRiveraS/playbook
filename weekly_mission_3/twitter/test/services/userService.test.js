const UserService = require('./../../app/services/userService')
describe("Test for UserService", () =>{
    test('1. Create a new User using the UserService', () =>{
        const user = UserService.create(1,"EdRivera", "Edgar")
        expect(user.userName).toBe("EdRivera");
        expect(user.name).toBe("Edgar");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
    test('2. Get all user data in a list', () =>{
        const user = UserService.create(1,"EdRivera", "Edgar")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("EdRivera");
        expect(userInfoInList[2]).toBe("Edgar");
        expect(userInfoInList[3]).toBe("Sin Bio");
    })
    test('3. Update userName', () =>{
        const user = UserService.create(1,"EdRivera", "Edgar")
        UserService.updateUserUserName(user,"Edd")
        expect(user.userName).toBe("Edd")
    })
    test('4. Given a list of users give me the list of userNames', ()=>{
        const user1 = UserService.create(1,"CarloGilmar","Carlo")
        const user2 = UserService.create(2,"EdRivera","Edgar")
        const user3 = UserService.create(3,"JuanCarlos","Juan")
        const usernames = UserService.getAllUserNames([user1,user2,user3])
        expect(usernames).toContain("CarloGilmar");
        expect(usernames).toContain("EdRivera");
        expect(usernames).toContain("JuanCarlos");
    })
})
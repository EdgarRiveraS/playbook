const Reader = require("./../../lib/utils/Reader");
const explorerServices = require("./../../lib/services/explorerServices");
describe("Unit Test for explorerServices class", ()=>{
    test ("1) Buscare Mision", () => {
        const explorers = Reader.readJsonFile("explorer.json");
        const explorerByMission = explorerServices.filterByMission(explorers,"node");
        expect(explorerByMission.mission).toBe("node");
    
    });
});


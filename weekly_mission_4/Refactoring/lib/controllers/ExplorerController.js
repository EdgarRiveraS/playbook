const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/explorerServices");
//const FizzbuzzService = require("./../services/FizzbuzzService");
class ExplorerController{
    
    static getExplorersByMission(mission){
        const Explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(Explorers,mission);
    }
    static getExplorersUsernamesByMission(mission){
        const Explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(Explorers,mission);
    }
    static getExplorersAmonutByMission(mission){
        const Explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(Explorers,mission);
    }
}
module.exports = ExplorerController;
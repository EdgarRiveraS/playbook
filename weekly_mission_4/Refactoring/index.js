const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/explorerServices')
const explorers = Reader.readJsonFile('explorers.json')
const FizzbuzzService = require ('./lib/services/FizzbuzzService')

const explorerByMission = ExplorerService.filterByMission(explorers, "Node");
const AmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers,"Node");
const UsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "Node");
const izzBuzzAndOtherTrick = FizzbuzzService.applyValidationInExplorer(explorers);
console.log(explorerByMission);
const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/explorerServices')
const explorers = Reader.readJsonFile('explorers.json')
const FizzbuzzService = require ('./lib/services/FizzbuzzService')

const explorerByMission = ExplorerService.filterByMission(explorers, "node");
const AmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
const UsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
const FizzBuzzAndOtherTrick = FizzbuzzService.applyValidationInExplorer(explorers);
console.log(explorerByMission);
console.log(AmountOfExplorersByMission)
console.log(UsernamesByMission)
console.log(FizzBuzzAndOtherTrick)
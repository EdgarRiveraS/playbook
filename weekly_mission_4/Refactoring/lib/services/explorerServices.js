class ExplorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorerByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const AmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return AmountOfExplorersByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const ExplorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == mission);
        const UsernamesByMission = ExplorersUsernamesByMission.map((explorer) => explorer.githubUsername);
        return UsernamesByMission;
    }}
module.exports = ExplorerService;
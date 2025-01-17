const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission",(request,response) =>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission",(request,response) =>{
    const mission = request.params.mission;
    const amountExplorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: amountExplorersInMission});
});
app.get("/v1/explorers/usernames/:mission",(request,response) =>{
    const mission = request.params.mission;
    const userNamesExplorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: userNamesExplorersInMission});
});
app.get("/v1/fizzbuzz/:score",(request,response) =>{
    const score = request.params.score;
    const scoreExplorersInMission = ExplorerController.applyValidaScoreExplorer(score);
    response.json({score: request.params.score, trick: scoreExplorersInMission});
});
app.get("/v1/explorers/stack/:stack",(request,response)=>{
    const stack = request.params.stack;
    const stackExplorerInMission = ExplorerController.stackExplorersByMission(stack);
    response.json({stack: request.params.stack, Explorers: stackExplorerInMission});
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
const PetroToken = artifacts.require("PetroToken");
const PetroTokenICO = artifacts.require("PetroTokenICO");

module.exports = function(deployer) {
    deployer.deploy(PetroToken, 20000000);
    deployer.deploy(PetroTokenICO, PetroToken.address, 1000000000000000);//price to be set with the help of oracle(hardcoded for now to 0.01 ether)
};
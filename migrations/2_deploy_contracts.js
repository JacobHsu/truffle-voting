// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, [web3.utils.utf8ToHex('李宇春'),
  web3.utils.utf8ToHex('周笔畅'),web3.utils.utf8ToHex('张靓颖')]);
};

var Products = artifacts.require("./Products.sol");
var Users = artifacts.require("./Users.sol");

module.exports = function(deployer) {
  deployer.deploy(Products);
  deployer.deploy(Users);
};

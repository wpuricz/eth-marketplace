import TruffleContract from '@truffle/contract';
import UserContract from './contracts/Users.json'


class Users {
  
  constructor() {
    this.contract = null;
    this.accounts = null;
    this.web3 = null;
    
  }

  async init() {
    this.web3 = window.web3;
    const userContract = TruffleContract(UserContract);
    userContract.setProvider(this.web3.currentProvider);
    this.contract = await userContract.deployed();
    //this.accounts = await this.web3.eth.getAccounts();
    this.accounts = await this.web3.eth.getAccounts();
    this.sender = {from: this.accounts[0], gas: 2000000};
    console.log(this.accounts);
    // Get the contract instance.
    // const networkId = await this.web3.eth.net.getId();
    // const deployedNetwork = UserContract.networks[networkId];
    // this.contract = new this.web3.eth.Contract(
    //     UserContract.abi,
    //     deployedNetwork &&
    //      deployedNetwork.address,
    // );
  }

  async exists(address) {
    if(!this.contract) {
      await this.init();
    }
    console.log(address);
    return await this.contract.exists.call(address || this.web3.eth.defaultAccount, this.sender);
  }

  async create(username) {    
    if(!this.contract) {
      await this.init();
    }
    
    return await this.contract.create(this.web3.utils.fromAscii(username),this.sender);
  }

  // async authenticate() {
  //   if(!this.contract) {
  //     await this.init();
  //   }
  //   const username = await this.contract.authenticate(this.sender);
  //   return this.web3.utils.toUtf8(username);
  // }

  // async destroy() {
  //   if(!this.contract) {
  //     await this.init();
  //   }
  //   return await this.contract.destroy({from: this.web3.eth.accounts[0]})
  // }

  // async findAll() {
  //   if(!this.contract) {
  //     await this.init();
  //   }
  //   return await this.contract.getUsers({from: this.web3.eth.accounts[0]})
  // }

}

export default Users;


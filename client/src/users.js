import UserContract from './contracts/Users.json'
import getWeb3 from './getWeb3'

class Users {
  
  constructor() {
    this.contract = null;
    this.accounts = null;
    this.web3 = null;
  }

  async init() {
    this.web3 = await getWeb3();
    this.accounts = await this.web3.eth.getAccounts();
    
    // Get the contract instance.
    const networkId = await this.web3.eth.net.getId();
    const deployedNetwork = UserContract.networks[networkId];
    this.contract = new this.web3.eth.Contract(
        UserContract.abi,
        deployedNetwork &&
         deployedNetwork.address,
    );
  }

  async exists(address) {
    if(!this.contract) {
      await this.init();
    }
    return await this.contract.exists.call(address || this.web3.eth.defaultAccount, {from: this.web3.eth.accounts[0]});
  }

  async create(username) {    
    if(!this.contract) {
      await this.init();
    }
    return await this.contract.methods.create(this.web3.utils.fromAscii(username),{from: this.web3.eth.accounts[0], gas: 2000000});
  }

  async authenticate() {
    if(!this.contract) {
      await this.init();
    }
    const username = await this.contract.authenticate({from: this.web3.eth.accounts[0]})
    return this.web3.utils.toUtf8(username);
  }

  async destroy() {
    if(!this.contract) {
      await this.init();
    }
    return await this.contract.destroy({from: this.web3.eth.accounts[0]})
  }

  async findAll() {
    if(!this.contract) {
      await this.init();
    }
    return await this.contract.getUsers({from: this.web3.eth.accounts[0]})
  }

}

export default Users;


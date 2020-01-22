var Users = artifacts.require("./Users.sol");
//truffle test ./test/truffle/user.js

contract('Users', function(accounts) {
    beforeEach('setup contract for each test', async function () {
        instance = await Users.deployed()
        sender = {from: web3.eth.accounts[0], gas: 2000000}
    })

    // it('it should create an object', function () {
    //     console.log(web3.eth.accounts[1]);
    //     assert.ok(u.address);   
    // });

    it('it should create a user', async () => {
        let username = web3.utils.fromAscii('will')
        try{
            let response = await instance.create(username,{from: web3.eth.accounts[0]})
            assert(true)
        }catch(err) {
            console.log(err);
            assert(false)
        }
    });

    it('it should get user count', async () => {
        let response = await instance.getUserCount();
        console.log(response.toNumber())
        assert(true)
    });

    it('it should list users', async () => {
        let users
        try{
            let response = await instance.getUsers();
            console.log(response[0])
            console.log(response[1])
            assert(true)
        }catch(err) {
            assert(false)
        }
    });

    // it('it should not create a duplicate user', () => {
    //     let username = web3.fromAscii('will')
    // });
});

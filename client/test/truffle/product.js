var Products = artifacts.require("./Products.sol");
//truffle test ./test/truffle/product.js

contract('Products', function(accounts) {
    beforeEach('setup contract for each test', async function () {
        instance = await Products.deployed()
        sender = {from: accounts[0], gas: 2000000}
        product = {
            name: web3.utils.fromAscii("XL Large T-Shirt"),
            description: web3.utils.fromAscii("Cool Shirt"),
            imageHash: web3.utils.fromAscii("image"),
            price: 4
        }

    })

    it('it should add a product', async () => {
        
        try{
            let response = await instance.addProduct(product.name, product.description, product.imageHash, product.price, sender);
            assert(true)
        }catch(err) {
            console.log(err);
            assert(false)
        }
    });

    it('it should get a product by index', async () => {
        let response
        try{

            response = await instance.getProduct(0);
            assert(true)
        }catch(e) {
            console.log(e);
            assert(false);
        }
    });

    it('it should get all products', async () => {
        let response
        try{

            response = await instance.getAllProducts();
            assert(true)
        }catch(e) {
            console.log(e);
            assert(false);
        }
    });

    it('it should get product count', async () => {
        let response
        try{

            response = await instance.getProductCount();
            if(response.toNumber() === 1) {
                assert(true);
            }else{
                assert(false);
            }
        }catch(e) {
            console.log(e);
            assert(false);
        }
    });

    
});

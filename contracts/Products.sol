pragma solidity >=0.4.22 <0.6.0;
contract Products {

    struct Product {
        address user;
        uint index;
        bytes32 name;
        bytes32 description;
        bytes32 imageHash;
        uint price;
    }

    Product[] public products;
    uint[] private productIndex;
    mapping(uint => Product) private productMap;

    constructor() public {
        
    }

    function addProduct(bytes32 _name, bytes32 _description, bytes32 _imageHash, uint _price) public returns(uint index) {
        //require - validation of params
        Product memory product;
        product.index = productIndex.push(productIndex.length)-1;
        product.name = _name;
        product.description = _description;
        product.imageHash = _imageHash;
        product.price = _price;
        product.user = msg.sender;
        productMap[product.index] = product;
        products.push(product);
        //emit CommitmentCreated(transactionId);
        return productIndex.length - 1;
    }

    function getProduct(uint _index) public view returns( bytes32 name, bytes32 description, bytes32 imageHash, uint price) {
        return(
            productMap[_index].name,
            productMap[_index].description,
            productMap[_index].imageHash,
            productMap[_index].price
            );
    }


    function getProductCount() public view returns(uint count) {
        return productIndex.length;
    }

    function getAllProducts() public view returns (bytes32[] memory , bytes32[] memory, address[] memory, uint[] memory) {

        uint length = getProductCount();

        bytes32[] memory names = new bytes32[](length);
        bytes32[] memory descriptions = new bytes32[](length);
        address[] memory users = new address[](length);
        uint[] memory prices = new uint[](length);

        for(uint i = 0; i < length; i++) {
            Product memory product;
            product = products[i];

            names[i] = product.name;
            descriptions[i] = product.description;
            users[i] = product.user;
            prices[i] = uint(product.price);
        }

        return (descriptions, names, users, prices);

    }

    
}

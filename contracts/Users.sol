pragma solidity >=0.4.22 <0.6.0;

contract Users {

    struct User {
        bytes32 username;
        uint index;
    }
    User[] public users;

    mapping(address => User) private userMap;
    address[] private userIndex;
    
    event UserCreated(address indexed _address, bytes32 _pseudo);
    //event UserDestroyed(address indexed _address);

    function exists (address _address) public view returns (bool _exists) {
        if ( userIndex.length == 0) {
            return false;
        }
        return ( userIndex[userMap[_address].index] == _address);
    }

    function get (address _address) public view returns(bytes32 username) {
        require(exists(_address),"User address does not exist");
        return (userMap[_address].username);
    }

    function getUserCount() public view returns(uint count) {
        return userIndex.length;
    }

    function getUsers() public view returns(address[] memory, bytes32[] memory) {
        uint length = getUserCount();
        address[] memory addresses = new address[](length);
        bytes32[] memory usernames = new bytes32[](length);

        for(uint i = 0; i < length; i++) {
            User memory user;
            user = users[i];

            addresses[i] = userIndex[i];
            usernames[i] = user.username;
        }
        return(addresses,usernames);
    }

    function create (bytes32 username) public returns(uint index) {
        require(exists(msg.sender) == false);
        userMap[msg.sender].username = username;
        userMap[msg.sender].index = userIndex.push(msg.sender)-1;
        users.push(userMap[msg.sender]);
        emit UserCreated(msg.sender, username);
        return userIndex.length-1;
    }

    // function destroy () public {
    //     require(exists(msg.sender),"User does not exist");
    //     delete users[msg.sender];
    //     emit UserDestroyed(msg.sender);
    // }


}

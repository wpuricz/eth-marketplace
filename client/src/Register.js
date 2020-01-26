import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UserContract from './contracts/Users.json'
import getWeb3 from './getWeb3'
import Users from './users';
import { Accounts } from 'web3-eth-accounts';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            account: null
            }
    }

    async componentDidMount() {
        

        /*try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = UserContract.networks[networkId];
            const instance = new web3.eth.Contract(
                UserContract.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance });
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }*/

        
    }

    handleChange(event) {
        this.setState({username: event.target.value})
    }

    async register(event) {
        // call create user here
        //const { accounts, contract } = this.state;
        
        // Stores a given value, 5 by default.
        const user = new Users();
        let uresponse;
        try{
            uresponse = await user.create(this.state.username);
            console.log(uresponse);
        }catch(e) {
            console.log("Error:" + e);
        }
        
        let response;
        try{
            response = await user.exists(user.accounts[0]);
        }catch(e) {
            console.log("Error Auth:" + e);
        }

        // Get the value from the contract by account to prove it worked.
        //const response = await contract.methods.get(accounts[0]).call();

        alert(JSON.stringify(response));
        // Update state with the result.
        //this.setState({ storageValue: response });
        //alert("user submitted:" + this.state.username);
        event.preventDefault();
    }

    render() {
        return (
            <section id='register'>
                <h1>Register</h1>
                <div class="form">
                    <div class="entry">
                        <label for="username">Username:</label>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleChange.bind(this)}/>
                        <div>
                            <button onClick={this.register.bind(this)} name="submit"  class="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Register;
import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import './AddProduct.css';

const ipfsHost = "ipfs.infura.io";
const ipfsHttp = "https";
const ipfsPort = 5001;

const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: ipfsHost, port: ipfsPort, protocol: ipfsHttp });
//https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
class AddProduct extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",   
        description: "",
        price: "",
        image: "",
        
      }
    };
    this.fileInput = React.createRef();
    
  }
  //https://ipfs.infura.io/ipfs/QmYQL4paUFAmERCUVPTsTQ6g7y5G7ZQm5YMGCezFjQRWMf
  // async fetchProducts() {
  //   let hash = "QmYgquWTFmRnfJsUGrbkKSRCymzsVFtEjBge6MDo5hirPN";
  //   try{
  //     let storedHash = await ipfs.cat(hash);
  //     storedHash = storedHash.toString('utf8');
  //     alert("hash:" + storedHash);
      
  //   }catch(e) {
  //     alert(e);
  //   }
  // }

  async ipfsSaveText(data) {
    var buf = Buffer.from(data, 'utf8');
    try {
      let response = await ipfs.add(buf)
      let hash = response[0].hash;
      //console.log("Hash from IPFS: " + hash);
      return hash;
    }catch(e) {
      return e;
    }
  }

  async ipfsSaveImage(file) {
    return new Promise( (resolve, reject) => {
      const reader = new FileReader();
        
      reader.onload = async () => {
        var result = await ipfs.add([Buffer.from(reader.result)]);
        let imageHash = result[0].hash;
        alert("saved hash:" + imageHash);
        resolve(imageHash);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  async saveProduct() {
    const descriptionHash = await this.ipfsSaveText(this.state.form.description);
    const name = this.state.form.name;
    let price = this.state.form.price;
    //let file = this.state.form.files[0];
      
    // try {
    //     let response = await ipfs.add(buf)
    //     let hash = response[0].hash;
    //     console.log("Hash from IPFS: " + hash);
    //     alert("hash:" + hash);
    // }catch(e) {
    //   alert(e);
    // }
  }

  async componentDidMount() {
    
  }

  changeHandler(e) {
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
    //alert(JSON.stringify(e.target))
    
    
  }
// hash QmYgquWTFmRnfJsUGrbkKSRCymzsVFtEjBge6MDo5hirPN
  async submitHandler(e) { 
    e.preventDefault();
    // if(!this.validateForm()) {
    //   return;
    // }
    if (!e.target.checkValidity()) {
      // form is invalid! so we do nothing
      alert("invalid form")
      return;
    }
    const response = await this.ipfsSaveImage(this.fileInput.current.files[0]);
    alert(`Hash response: ${response}`);
    // fetch('/messages', { 
    //   method: 'POST', 
    //   headers: { 'Content-Type': 'application/json' }, 
    //   data: JSON.stringify(this.state.form) 
    // });
  }

  validateForm() {
    if(this.state.form.name === '') {
      alert("Name is required");
      return false;
    }
    if(this.state.form.description === '') {
      alert("Description is required");
      return false;
    }
    if(this.state.form.description === '') {
      alert("Description is required");
      return false;
    }

  }

  render() {
    const { form } = this.state;
    return (
      <div>
       <form onSubmit={this.submitHandler.bind(this)} validate >
        <div class="form-group">
          <label for="name">Name:</label>
          <input name="name" type="text" required maxLength="30" class="form-control" value={form.name} onChange={this.changeHandler.bind(this)}/> 
        </div>
        <div class="form-group">
          <label for="name">Image:</label>
          <input name="image"  class="form-control" type="file" ref={this.fileInput} />
        </div>
        <div class="form-group">
          <label for="name">Price:</label>
          <input name="price" pattern="\d+(\.\d{2})?" maxLength="8" type="text" class="form-control" value={form.price} onChange={this.changeHandler.bind(this)}/>
        </div>
        <div class="form-group">
          <label for="name">Description:</label>
          <textarea name="description" required class="form-control" value={form.description} rows="8" onChange={this.changeHandler.bind(this)}></textarea>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" onClick={this.submitHandler.bind(this)}>Add Product</button>
        </div>
      </form>
    
        
      </div>
    );
  }
}

export default AddProduct;
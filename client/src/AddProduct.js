import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import './AddProduct.css';

class AddProduct extends Component {
  
  constructor() {
    super();
    this.state = {
      form: {
        name: "",   
        description: "",
        price: "",
        image: "",
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
    
  }

  submitHandler(e) { 
    e.preventDefault();
    alert(JSON.stringify(this.state.form));
    // Submit to blockchain here

    // fetch('/messages', { 
    //   method: 'POST', 
    //   headers: { 'Content-Type': 'application/json' }, 
    //   data: JSON.stringify(this.state.form) 
    // });
  }

  render() {
    const { form } = this.state;
    return (
      <div>
       <form onSubmit={this.submitHandler} >
       <div class="form-group">
        <label for="name">Name:</label>
        <input name="name" type="text" required maxLength="30" class="form-control" value={form.name} onChange={this.changeHandler}/> 
       </div>
       <div class="form-group">
        <label for="name">Image:</label>
        <input name="image"  class="form-control" type="file" />
       </div>
       <div class="form-group">
        <label for="name">Price:</label>
        <input name="price" pattern="\d+(\.\d{2})?" type="text" class="form-control" value={form.price} onChange={this.changeHandler}/>
       </div>
       <div class="form-group">
        <label for="name">Description:</label>
        <textarea name="description" class="form-control" value={form.description} rows="8" onChange={this.changeHandler}></textarea>
       </div>
       <div class="form-group">
       <button type="button" class="btn btn-primary" onClick={this.submitHandler}>Add Product</button>
       </div>
    </form>
    
        
      </div>
    );
  }
}

export default AddProduct;
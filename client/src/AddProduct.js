import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import './AddProduct.css';

class AddProduct extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",   
      description: "",
      price: "",
      image: "",
    }
    
  }

  handleSubmit(e) {
    
  }
  
  render() {
    return (
      <div>
        Name: {this.state.name}
        <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" 
                onChanged={(text)=> this.setState({name: text})}
                />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Enter Product Description" />
            </Form.Group>
            <Form.Group controlId="formGroupPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" maxLength="5" />
            </Form.Group>
            <Form.Group controlId="formGroupImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit" onSubmit="this.onSubmit().bind(this)">
                Submit
            </Button>
            </Form>
      </div>
    );
  }
}

export default AddProduct;
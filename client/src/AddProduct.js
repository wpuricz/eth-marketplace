import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class AddProduct extends Component {
  render() {
    return (
      <div>
        <Form>
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" />
            </Form.Group>
            <Form.Group controlId="formGroupDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder="Enter Product Description" />
            </Form.Group>
            <Form.Group controlId="formGroupPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Price" />
            </Form.Group>
            <Form.Group controlId="formGroupImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      </div>
    );
  }
}

export default AddProduct;
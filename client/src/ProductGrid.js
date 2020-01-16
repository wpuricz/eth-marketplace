import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import './ProductGrid.css';
import ProductGridItem from './ProductGridItem'
class ProductGrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <ProductGridItem product={this.props.product}/>
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4">.col-md-4</div>
                </div>
            </div>
        );
    }

}

export default ProductGrid;
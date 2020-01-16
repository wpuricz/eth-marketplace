import React, { Component } from 'react';
import ProductGrid from './ProductGrid'

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          
          }
      this.products = [
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"},
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"},
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"},
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"},
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"},
        {name:"Product Name", description:"Prod Desc", image:"image", price:"12.00"}
      ]
    }
    componentDidMount() {
      //this.fetchProducts();
    }

    fetchProducts() {
        
    }

    render() {
        return (
            <div>
                <ProductGrid products={this.products}/>
            </div>
        );
    }

}

export default Home;
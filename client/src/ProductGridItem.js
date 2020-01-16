import React, { Component } from 'react';

class ProductGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            }
    }

    render() {
        return (
            <div class="col-sm-2">
                <img src="AboutVolunteer@2x.png" height="150" width="300"/>
                <div>{this.props.name}</div>
                <div>Product Description</div>
                <div>$12.00</div>
            </div>
        );
    }

}

export default ProductGridItem;
// Libraries
import React from 'react';

// Components
import Home from './home.js';

class Products extends React.Component {
    render(){
        const {products} = this.props;
        const productsList = products.map((product) => {
            return  <li>
                        <a href="#">{product.name.charAt(0).toUpperCase() + product.name.slice(1)}</a>
                        <p>{product.description}</p>
                        <p>Offered By:</p>
                        <ul>
                            {product.companies.map((company)=>{
                                return <li>{company.name}</li>
                            })}
                        </ul>
                    </li>
        })
    return <ul>{productsList}</ul>;
    }
}

export default Products;
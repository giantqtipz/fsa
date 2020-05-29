// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Components
import Products from './products.js';
import Companies from './companies.js';
import Company from './company.js';

class Home extends React.Component {
    state = {
        companies: [],
        products: [],
        offerings: [],
        // view: 'products'
    }

    componentDidMount(){
        const {companies, products, offerings} = this.state;

        const companiesAPI = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies');
        const productsAPI = axios.get('https://acme-users-api-rev.herokuapp.com/api/products');
        const offeringsAPI = axios.get('https://acme-users-api-rev.herokuapp.com/api/offerings');

        const promise = Promise.all([companiesAPI, productsAPI, offeringsAPI])
        .then((res) => {

            window.addEventListener("hashchange", (event) => {
                let hash = window.location.hash.slice(2);

                const links = document.querySelectorAll('.link');
                links.forEach((link) => {
                    link.classList.toggle('selected')
                });

                // document.querySelector(`#${hash}`).classList.add('selected');
            })

            this.setState({
                companies: res[0].data,
                products: res[1].data,
                offerings: res[2].data
                // view: window.location.hash.slice(2)
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        const {companies, products, offerings} = this.state;

        const organizeCompanies = companies.forEach((company) => {
            const filterOfferings = offerings.filter((offering) => offering.companyId === company.id);
            const filterProducts = filterOfferings.map((offering) => {
                return products.filter(product => product.id === offering.productId);
            });

            company.offerings = filterOfferings;
            company.products = filterProducts.flat();
        });

        const organizeProducts = products.forEach((product) => {
            const filterOfferings = offerings.filter((offering) => offering.productId === product.id);
            const filterCompanies = filterOfferings.map((offering) => {
                return companies.filter(company => company.id === offering.companyId);
            });

            product.companies = filterCompanies.flat();
        });

        return  <div id="container">
                    <nav>
                        <h1>Acme Offerings React</h1>
                        <div id="companies">
                            <a className="link" href="#companies">Companies {companies.length}</a>
                        </div>
                        <div id="products">
                            <a className="link" href="#products">Products {products.length}</a>
                        </div>
                    </nav>
                    <div id='list-container'>
                        <HashRouter>
                        <h2>Please select Companies or Products from the links above...</h2>
                        <Switch>
                            <Route path={'/products'} render={() => <Products products={products}/>} />
                            <Route path={'/companies/:name'} render={(props) => <Company companies={companies} {...props}/>}/>                            
                            <Route exact path={'/companies'} render={() => <Companies companies={companies}/>}/>
                        </Switch>
                        </HashRouter>
                    </div>
                </div>
    }
}

export default Home;
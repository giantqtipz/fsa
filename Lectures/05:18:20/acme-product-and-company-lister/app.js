const app = document.querySelector('#app');

const promise1 = axios.get('https://acme-users-api-rev.herokuapp.com/api/products');
const promise2 = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies');

class Header extends React.Component {
    render() {
        return React.createElement('h1', null, 'Acme Products and Companies Lister')
    }
}

class Nav extends React.Component { // combined Products and Companines components into a single 'Nav' component
    render(){
        const mad = this;
        const {products, companies, hash} = mad.props; // yes
        const test = React.createElement('a', {key: 'products-hash', href: '#products', hash}, `Products (${products.length})`);
        console.log(test);
        return React.createElement('nav', null, 
            React.createElement('a', {key: 'products-hash', href: '#products'}, `Products (${products.length})`), 
            React.createElement('a', {key: 'companies-hash', href: '#companies'}, `Companies (${companies.length})`)
        );
    }
}

class List extends React.Component {
    render(){
        const mad = this;
        const {products, companies, hash} = mad.props;
        const productsArray = products.map((product, idx) => {
            let upperCaseFirstLetter = product.name.charAt(0).toUpperCase() + product.name.slice(1) // not necessary. Only to capitalize the first letter of products, for practice.
            return React.createElement('li', {key: idx}, upperCaseFirstLetter);
        });
        const companiesArray = companies.map((company, idx) => React.createElement('li', {key: idx}, company.name))
        let ulContainer;

        if(hash === 'products') return ulContainer = React.createElement('ol', {key: 'products'}, productsArray) // no need to do React.createElement(productsArray), just put productsArray, since elemnts already created inside the map function
        else if(hash === 'companies') return ulContainer = React.createElement('ol', {key: 'companies'}, companiesArray) // same as above. If you use React.createElement(companiesArray), we will get a string like where we left off on Wednesday.
        else return React.createElement('p', {className: 'prompt'}, 'Please choose either Products or Companies from the links above'); // this is for when there is no hash on the url, prompting to select either Products or Companies.
    }   // we can set a default hash so the site shows either Products or Companies by default.
}

class App extends React.Component {
    state = {
        products: [],
        companies: [],
        hash: window.location.hash.slice(1) // this could be set to either Products or Companies to show a default view. Otherwise, it will prompt us to select either one, which is dictated on line 35.
    }

    componentDidMount(){
        window.addEventListener('hashchange', (event) => {
            this.setState({
                hash: window.location.hash.slice(1)
            }) 
        });
        
        Promise.all([promise1, promise2])
        .then((response) => {
            this.setState({
                products: response[0].data, // value add
                companies: response[1].data // value add
            })
        });        
    }

    render(){
        const {products, companies, hash} = this.state;
        return React.createElement('div', {className: 'content'},
            React.createElement(Header), 
            React.createElement(Nav, {products, companies, hash}), 
            React.createElement(List, {products, companies, hash})
        );
    }
}

ReactDOM.render(React.createElement(App), app, ()=>{console.log('I have rendered')});
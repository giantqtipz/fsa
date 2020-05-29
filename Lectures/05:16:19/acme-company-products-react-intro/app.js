const app = document.querySelector('#app');

class Header extends React.Component {
    render() {
        return React.createElement('h1', null, 'Acme - We Have 9 Products and 40 Companies');
    }
}

class Content extends React.Component {
    render() {
        const {products, companies} = this.props;

        const productsList = products.map((product, idx) => {
            return React.createElement('li', {key: idx}, product.name);
        });

        const companiesList = companies.map((company, idx) => {
            return React.createElement('li', {key: idx}, company.name)
        });

        return React.createElement('div', {className: 'content-container'}, 
        React.createElement('ul', {className: 'list-container'}, productsList), 
        React.createElement('ul', {className: 'list-container'}, companiesList));
    }
}

class App extends React.Component {
    state = {
        products: [],
        companies: []
    }

    componentDidMount(){
        const API = 'https://acme-users-api-rev.herokuapp.com/api/';
        const fetchData = Promise.all([axios.get(`${API}products`), axios.get(`${API}companies`)]);
        let {products, companies} = this.state;
        
        fetchData.then((response) => {
            this.setState({
                products: response[0].data,
                companies: response[1].data
            })
        });        
    }
    
    render() {
        const {products, companies} = this.state;

        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(Header),
            React.createElement(Content, {products, companies}),
        )
    }
}

ReactDOM.render(React.createElement(App), app);

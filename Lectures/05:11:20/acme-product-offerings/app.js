const ul = document.querySelector('ul');

const state = {
    products: []
}

const fetchData = () => {

    const offeringsAPI = 'https://acme-users-api-rev.herokuapp.com/api/offerings';
    const productsAPI = 'https://acme-users-api-rev.herokuapp.com/api/products';
    const companiesAPI = 'https://acme-users-api-rev.herokuapp.com/api/companies';
    
    return Promise.all([fetch(offeringsAPI), fetch(productsAPI), fetch(companiesAPI)])
        .then(response => {
        const offeringsResponse = response[0].json();
        const productsResponse = response[1].json();
        const companiesResponse = response[2].json();

        return Promise.all([offeringsResponse, productsResponse, companiesResponse]);
        })
        .then(data => {
            organizeData(data);
        })
        .catch(error => {
            throw new Error('Encountered a problem while fetching data');
        })
}

const organizeData = (data) => {
    const offeringsData = data[0];
    const productsData = data[1];
    const companiesData = data[2];

    productsData.map((product) => {

        let findOfferings = offeringsData.filter((offering) => {
            return product.id === offering.productId;
        });

        let findCompanies = findOfferings.map(offering => {
            return companiesData.find(company => {
              return company.id === offering.companyId;
            })
          });

        product.offerings = findOfferings;
        product.company = findCompanies;

        state.products.push(product);
        render();
    });

}

const createList = (arg) => {

    const offerings = arg.offerings.map((offering) => {
        return offering.price;
    })

    const offeringsList = arg.offerings.map(offering => {
        return `<li>Offered By: ${arg.company[arg.offerings.indexOf(offering)].name } at $${offering.price}</li>`;
      }).join('');

    const html =    `<li><a href='#'>${arg.name}</a></li>   
    <li>${arg.description}</li>
    <li>$${arg.suggestedPrice}</li>
    <ul>
        <li>${offeringsList}</li>
    </ul>
    `
    ul.innerHTML = ul.innerHTML + html;
    console.log(arg);
}

const render = () => {
    ul.innerHTML = '';
    
    state.products.forEach((product) => {
        createList(product);
    });
}

fetchData();
render();
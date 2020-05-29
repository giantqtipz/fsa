// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Home from './home.js';

class Companies extends React.Component {
    render(){
        console.log(this.props);
        const {companies} = this.props;
        const companiesList = companies.map((company, idx) => {
            return  <li>
                    <Link to={`/companies/${idx}`}>{company.name}</Link>
                    <p>{company.catchPhrase}</p>
                    <p>Offering:</p>
                        <ul>
                            {company.offerings.map((offering, idx) => {
                                // console.log(company.products[idx][idx]);
                                return <li>{company.products[idx].name} {offering.price}</li>
                            })}
                        </ul>                                      
                    </li>            
        })
    return <ul>{companiesList}</ul>;
    }
}

export default Companies;
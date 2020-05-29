// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Home from './home.js';

class Company extends React.Component {
    render(){
        // const { id } = this.props.match.params;
        // const company = this.props.companies[id];
        console.log(this.props);
        return null;

        return  <li>
                <h2>{company.name}</h2>
                <p>{company.catchPhrase}</p>
                <p>Offering:</p>
                                                      
                </li>
                
    }
}

export default Company;
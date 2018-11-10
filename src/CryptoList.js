import React, { Component } from 'react';
import './crypto-list.css';

export default class CryptoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;
        return (
            // nie istniejący kontener, któremy możemy przypisać klasę i odwołać się do niego ale on nie wyświetli się na stronie
            <React.Fragment>
                <ul className="list-wrapper">
                    {this.props.waluty.map(waluta =>
                        <li className="waluta-content" key={waluta}>
                            <span className="waluta-content">Last rate: {data[waluta].last}</span>
                            <span className="waluta-content">{waluta}</span>
                            <span className="waluta-content">{`[ ${data[waluta].symbol}]`}</span>
                        </li>
                    )}
                </ul>


            </React.Fragment>
        )
    }
}



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
                            Last rate:<span className={`${data[waluta].class}`}> {data[waluta].last.toFixed(2)}</span>
                            <span >{waluta}</span>
                            <span >{`[ ${data[waluta].symbol}]`}</span>
                        </li>
                    )}
                </ul>


            </React.Fragment>
        )
    }
}



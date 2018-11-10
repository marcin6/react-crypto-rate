import React, { Component } from 'react';

export default class CryptoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // nie istniejący kontener, któremy możemy przypisać klasę i odwołać się do niego ale on nie wyświetli się na stronie
            <React.Fragment>
                <h1>Crypto Rate</h1>
            </React.Fragment>
        )
    }
}



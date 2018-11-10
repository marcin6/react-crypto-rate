import React, { Component } from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';

export default class Crypto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
            .then(response => {
                let data = response.data;

                let waluty = [];

                for (let nazwaWaluty in data) {
                    waluty.push(nazwaWaluty);
                }

                this.setState({
                    data: data,
                    waluty: waluty
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            // .then(function () {
            //     // always executed
            // });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        console.log(this.state);
        return (
            <CryptoList />
        )
    }
}
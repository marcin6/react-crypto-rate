import React, { Component } from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';

export default class Crypto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            waluty: [],
            filterValue: "",
            oldData: []
        }
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
            .then(response => {

                let data = response.data;
                let waluty = [];
                let oldData = this.state.oldData;


                // napowanie wszystkich nazw walut + sprawdzamy czy kurs się zmienił

                for (let nazwaWaluty in data) {
                    waluty.push(nazwaWaluty);

                    let newDataObject = data[nazwaWaluty];
                    let oldDataObject = {};

                    oldDataObject.last = newDataObject.last;
                    oldDataObject.currency = newDataObject.symbol;

                    oldData.push(oldDataObject);

                    let currentObject = oldData.find(curObject => curObject.symbol === newDataObject.symbol);

                    if (currentObject !== undefined) {
                        if (currentObject.last > newDataObject.last) {
                            newDataObject.class = "red";
                        } else if (currentObject.last < newDataObject.last) {
                            newDataObject.class = "green";
                        } else {
                            newDataObject.class = "blue";
                        }
                    }
                }

                this.setState({
                    data: data,
                    waluty: waluty,
                    oldData: oldData
                })


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    componentDidMount() {
        this.getData();

        setInterval(() => { this.getData() }, 5000);
    }

    render() {
        return (
            <CryptoList waluty={this.state.waluty} data={this.state.data} />
        )
    }
}
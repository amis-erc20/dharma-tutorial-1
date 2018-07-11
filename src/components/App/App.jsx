import React, { Component } from "react";

import { RequestLoanForm } from "../RequestLoanForm/RequestLoanForm";

import "./App.css";

import Dharma from "@dharmaprotocol/dharma.js";

/*
 * Step 1:
 * Instantiate a new instance of Dharma, passing in the host of the local blockchain.
 */
const dharma = null; // fix this line

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAwaitingBlockchain: false
        };

        this.createLoanRequest = this.createLoanRequest.bind(this);
    }

    async createLoanRequest(formData) {
        this.setState({
            isAwaitingBlockchain: true
        });

        const { LoanRequest } = Dharma.Types;

        const { principal, collateral, expiration, termLength, interestRate } = formData;

        /*
         * Step 2:
         * Fetch the current accounts from the blockchain.
         */
        const accounts = null; // fix this line

        if (!accounts) {
            console.error("No acccounts detected from web3 -- ensure a local blockchain is running.");

            this.setState({ isAwaitingBlockchain: false });

            return;
        }

        const debtorAddressString = accounts[0];

        /*
         * Step 3:
         * Create a Dharma Debt Order when the form is submitted by the user.
         */
        const loanRequest = null; // fix this line

        this.setState({
            isAwaitingBlockchain: false
        });

        /*
         * Step 4:
         * Log the JSON representation of the newly created debt order to the console.
         */
        console.log();
    }

    render() {
        const { isAwaitingBlockchain } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Request a Loan on Dharma</h1>
                </header>

                <RequestLoanForm
                    createLoanRequest={this.createLoanRequest}
                    isAwaitingBlockchain={isAwaitingBlockchain}
                />
            </div>
        );
    }
}

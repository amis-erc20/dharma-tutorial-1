import React, { Component } from "react";

import { RequestLoanForm } from "../RequestLoanForm/RequestLoanForm";

import "./App.css";

/*
 * Step 1:
 * Instantiate a new instance of Dharma, passing in the host of the local blockchain.
 */
import Dharma from "@dharmaprotocol/dharma.js";
const dharma = null; // fix this line

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAwaitingBlockchain: false
        };

        this.createDebtOrder = this.createDebtOrder.bind(this);
    }

    async createDebtOrder(formData) {
        this.setState({
            isAwaitingBlockchain: true
        });

        const { DebtOrder } = Dharma.Types;

        const { principal, collateral, expiration, termLength, interestRate } = formData;

        /*
         * Step 3:
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
         * Step 2:
         * Create a Dharma Debt Order when the form is submitted by the user.
         */
        const debtOrder = null; // fix this line

        this.setState({
            isAwaitingBlockchain: false
        });
    }

    render() {
        const { isAwaitingBlockchain } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Request a Loan on Dharma</h1>
                </header>

                <RequestLoanForm createDebtOrder={this.createDebtOrder} isAwaitingBlockchain={isAwaitingBlockchain} />
            </div>
        );
    }
}

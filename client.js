"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SynnqSDK = void 0;
const wallet_1 = require("./handlers/wallet");
const transaction_1 = require("./handlers/transaction");
const governance_1 = require("./handlers/governance");
const neural_1 = require("./handlers/neural");
const request_1 = require("./utils/request");
class SynnqSDK {
    constructor(baseURL = 'https://rest.synnq.io') {
        // Set default baseURL here
        const client = new request_1.HttpClient(baseURL);
        this.wallet = new wallet_1.WalletHandler(client);
        this.transaction = new transaction_1.TransactionHandler(client);
        this.governance = new governance_1.GovernanceHandler(client);
        this.neural = new neural_1.NeuralHandler(client);
    }
}
exports.SynnqSDK = SynnqSDK;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHandler = void 0;
class TransactionHandler {
    constructor(client) {
        this.client = client;
    }
    // Method to create a new transaction
    createTransaction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/transaction', data);
            return response.data;
        });
    }
    // Method to get a transaction by its hash
    getTransactionByHash(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/get_transaction', data);
            return response.data;
        });
    }
    // Method to get all transactions with pagination
    getAllTransactions(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/get_all_transactions', data);
            return response.data;
        });
    }
    // Method to synchronize transactions
    synchronize(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/synchronize', data);
            return response.data;
        });
    }
    // Method to get the current block height
    getBlockHeight() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/block_height');
            return response.data;
        });
    }
    executeContract(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/execute_contract', data);
            return response.data;
        });
    }
    deployContract(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/deploy_contract', data);
            return response.data;
        });
    }
}
exports.TransactionHandler = TransactionHandler;

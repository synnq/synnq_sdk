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
exports.WalletHandler = void 0;
class WalletHandler {
    constructor(client) {
        this.client = client;
    }
    // Method to create a new wallet
    createWallet(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/create_wallet', data);
            return response.data;
        });
    }
    retrieveWalletFromMnemonic(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/retrieve_wallet_from_mnemonic', data);
            return response.data;
        });
    }
    queryBalance(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/query_balance', data);
            return response.data;
        });
    }
    getWalletsHoldingCoin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/get_wallets_holding_coin', data);
            return response.data;
        });
    }
    getWalletsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/get_wallets_count');
            return response.data;
        });
    }
    authenticate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/auth', data);
            return response.data;
        });
    }
    verifyAuthToken(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/verify_auth_token', data);
            return response.data;
        });
    }
}
exports.WalletHandler = WalletHandler;

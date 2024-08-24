"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = exports.NeuralHandler = exports.GovernanceHandler = exports.TransactionHandler = exports.WalletHandler = exports.SynnqSDK = void 0;
// Exporting the main SDK client
var client_1 = require("./client");
Object.defineProperty(exports, "SynnqSDK", { enumerable: true, get: function () { return client_1.SynnqSDK; } });
// Optionally export individual handlers if users want to use them directly
var wallet_1 = require("./handlers/wallet");
Object.defineProperty(exports, "WalletHandler", { enumerable: true, get: function () { return wallet_1.WalletHandler; } });
var transaction_1 = require("./handlers/transaction");
Object.defineProperty(exports, "TransactionHandler", { enumerable: true, get: function () { return transaction_1.TransactionHandler; } });
var governance_1 = require("./handlers/governance");
Object.defineProperty(exports, "GovernanceHandler", { enumerable: true, get: function () { return governance_1.GovernanceHandler; } });
var neural_1 = require("./handlers/neural");
Object.defineProperty(exports, "NeuralHandler", { enumerable: true, get: function () { return neural_1.NeuralHandler; } });
// If you have an example handler, export it as well
// Exporting utility functions or classes
var request_1 = require("./utils/request");
Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function () { return request_1.HttpClient; } });
// Exporting types and interfaces
__exportStar(require("./types"), exports);

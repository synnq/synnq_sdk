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
exports.GovernanceHandler = void 0;
class GovernanceHandler {
    constructor(client) {
        this.client = client;
    }
    // Method to submit a proposal
    submitProposal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/submit_proposal', data);
            return response.data;
        });
    }
    // Method to vote on a proposal
    voteOnProposal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/vote_on_proposal', data);
            return response.data;
        });
    }
    // Method to get a proposal by its ID
    getProposal(proposalId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(`/get_proposal/${proposalId}`);
            return response.data;
        });
    }
    // Method to get all proposal IDs
    getAllProposals() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get('/get_proposals');
            return response.data;
        });
    }
    // Method to submit a general proposal
    submitGeneralProposal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/submit_general_proposal', data);
            return response.data;
        });
    }
    // Method to vote on a general proposal
    voteOnGeneralProposal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.post('/vote_on_general_proposal', data);
            return response.data;
        });
    }
    // Method to get a general proposal by its ID
    getGeneralProposal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.client.get(`/get_general_proposal/${data.proposalId}`);
            return response.data;
        });
    }
}
exports.GovernanceHandler = GovernanceHandler;

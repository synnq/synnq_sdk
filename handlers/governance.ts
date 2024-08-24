import { HttpClient } from '../utils/request';
import {
  ProposalRequest,
  ProposalResponse,
  VoteRequest,
  VoteResponse,
  GetProposalResponse,
  GetAllProposalsResponse,
  SubmitProposalRequest,
  SubmitProposalResponse,
  VoteOnProposalRequest,
  VoteOnProposalResponse,
  GetGeneralProposalRequest,
  GetGeneralProposalResponse,
} from '../types';

export class GovernanceHandler {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  // Method to submit a proposal
  public async submitProposal(
    data: ProposalRequest
  ): Promise<ProposalResponse> {
    const response = await this.client.post<ProposalResponse>(
      '/submit_proposal',
      data
    );
    return response.data;
  }

  // Method to vote on a proposal
  public async voteOnProposal(data: VoteRequest): Promise<VoteResponse> {
    const response = await this.client.post<VoteResponse>(
      '/vote_on_proposal',
      data
    );
    return response.data;
  }

  // Method to get a proposal by its ID
  public async getProposal(proposalId: number): Promise<GetProposalResponse> {
    const response = await this.client.get<GetProposalResponse>(
      `/get_proposal/${proposalId}`
    );
    return response.data;
  }

  // Method to get all proposal IDs
  public async getAllProposals(): Promise<GetAllProposalsResponse> {
    const response = await this.client.get<GetAllProposalsResponse>(
      '/get_proposals'
    );
    return response.data;
  }

  // Method to submit a general proposal
  public async submitGeneralProposal(
    data: SubmitProposalRequest
  ): Promise<SubmitProposalResponse> {
    const response = await this.client.post<SubmitProposalResponse>(
      '/submit_general_proposal',
      data
    );
    return response.data;
  }

  // Method to vote on a general proposal
  public async voteOnGeneralProposal(
    data: VoteOnProposalRequest
  ): Promise<VoteOnProposalResponse> {
    const response = await this.client.post<VoteOnProposalResponse>(
      '/vote_on_general_proposal',
      data
    );
    return response.data;
  }

  // Method to get a general proposal by its ID
  public async getGeneralProposal(
    data: GetGeneralProposalRequest
  ): Promise<GetGeneralProposalResponse> {
    const response = await this.client.get<GetGeneralProposalResponse>(
      `/get_general_proposal/${data.proposalId}`
    );
    return response.data;
  }
}

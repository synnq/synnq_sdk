import { HttpClient } from '../utils/request';
import {
  TransactionRequest,
  TransactionResponse,
  GetTransactionRequest,
  GetTransactionResponse,
  GetTransactionsRequest,
  GetTransactionsResponse,
  SyncQuery,
  SyncResponse,
  BlockHeightResponse,
  ExecuteContractRequest,
  ExecuteContractResponse,
  DeployContractRequest,
  DeployContractResponse,
} from '../types';

export class TransactionHandler {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  // Method to create a new transaction
  public async createTransaction(
    data: TransactionRequest
  ): Promise<TransactionResponse> {
    const response = await this.client.post<TransactionResponse>(
      '/transaction',
      data
    );
    return response.data;
  }

  // Method to get a transaction by its hash
  public async getTransactionByHash(
    data: GetTransactionRequest
  ): Promise<GetTransactionResponse> {
    const response = await this.client.get<GetTransactionResponse>(
      '/get_transaction',
      data
    );
    return response.data;
  }

  // Method to get all transactions with pagination
  public async getAllTransactions(
    data: GetTransactionsRequest
  ): Promise<GetTransactionsResponse> {
    const response = await this.client.get<GetTransactionsResponse>(
      '/get_all_transactions',
      data
    );
    return response.data;
  }

  // Method to synchronize transactions
  public async synchronize(data: SyncQuery): Promise<SyncResponse> {
    const response = await this.client.get<SyncResponse>('/synchronize', data);
    return response.data;
  }

  // Method to get the current block height
  public async getBlockHeight(): Promise<BlockHeightResponse> {
    const response = await this.client.get<BlockHeightResponse>(
      '/block_height'
    );
    return response.data;
  }

  public async executeContract(
    data: ExecuteContractRequest
  ): Promise<ExecuteContractResponse> {
    const response = await this.client.post<ExecuteContractResponse>(
      '/execute_contract',
      data
    );
    return response.data;
  }

  public async deployContract(
    data: DeployContractRequest
  ): Promise<DeployContractResponse> {
    const response = await this.client.post<DeployContractResponse>(
      '/deploy_contract',
      data
    );
    return response.data;
  }
}

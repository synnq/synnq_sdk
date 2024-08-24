import { HttpClient } from '../utils/request';
import {
  CreateWalletRequest,
  CreateWalletResponse,
  RetrieveWalletFromMnemonicRequest,
  RetrieveWalletFromMnemonicResponse,
  QueryBalanceRequest,
  QueryBalanceResponse,
  GetWalletsHoldingCoinRequest,
  GetWalletsHoldingCoinResponse,
  GetWalletsCountResponse,
  AuthenticateRequest,
  AuthenticateResponse,
  VerifyAuthTokenRequest,
  VerifyAuthTokenResponse,
} from '../types';

export class WalletHandler {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  // Method to create a new wallet
  public async createWallet(
    data: CreateWalletRequest
  ): Promise<CreateWalletResponse> {
    const response = await this.client.post<CreateWalletResponse>(
      '/create_wallet',
      data
    );
    return response.data;
  }

  public async retrieveWalletFromMnemonic(
    data: RetrieveWalletFromMnemonicRequest
  ): Promise<RetrieveWalletFromMnemonicResponse> {
    const response = await this.client.post<RetrieveWalletFromMnemonicResponse>(
      '/retrieve_wallet_from_mnemonic',
      data
    );
    return response.data;
  }

  public async queryBalance(
    data: QueryBalanceRequest
  ): Promise<QueryBalanceResponse> {
    const response = await this.client.post<QueryBalanceResponse>(
      '/query_balance',
      data
    );
    return response.data;
  }

  public async getWalletsHoldingCoin(
    data: GetWalletsHoldingCoinRequest
  ): Promise<GetWalletsHoldingCoinResponse> {
    const response = await this.client.post<GetWalletsHoldingCoinResponse>(
      '/get_wallets_holding_coin',
      data
    );
    return response.data;
  }

  public async getWalletsCount(): Promise<GetWalletsCountResponse> {
    const response = await this.client.get<GetWalletsCountResponse>(
      '/get_wallets_count'
    );
    return response.data;
  }

  public async authenticate(
    data: AuthenticateRequest
  ): Promise<AuthenticateResponse> {
    const response = await this.client.post<AuthenticateResponse>(
      '/auth',
      data
    );
    return response.data;
  }

  public async verifyAuthToken(
    data: VerifyAuthTokenRequest
  ): Promise<VerifyAuthTokenResponse> {
    const response = await this.client.post<VerifyAuthTokenResponse>(
      '/verify_auth_token',
      data
    );
    return response.data;
  }
}

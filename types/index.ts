export interface CreateWalletRequest {
  prefix: string;
}

export interface CreateWalletResponse {
  address: string;
  publicKey: string;
  privateKey: string;
  mnemonic: string;
  balances: [string, number][];
  bearerToken: string;
  signature: string;
}

export interface GetWalletRequest {
  address: string;
}

export interface GetWalletResponse {
  address: string;
  publicKey: string;
  balances: [string, number][];
}

export interface RetrieveWalletFromMnemonicRequest {
  mnemonic: string;
}

export interface RetrieveWalletFromMnemonicResponse {
  address: string;
  publicKey: string;
  privateKey: string;
}

export interface GetWalletsHoldingCoinRequest {
  coinSymbol: string;
}

export interface GetWalletsHoldingCoinResponse {
  wallet: string[];
}

export interface UpdateWalletPermissionsRequest {
  walletAddress: string;
  privateKey: string;
  canMint?: boolean;
  canDistribute?: boolean;
  canStake?: boolean;
}

export interface UpdateWalletRoleRequest {
  walletAddress: string;
  privateKey: string;
  newRole: string;
}

export interface BasicResponse {
  status: string;
}

export interface WalletsCountResponse {
  walletsCount: number;
}

export interface TransactionRequest {
  sender: string;
  receiver: string;
  amount: number;
  denom: string;
  privateKey: string;
  modelType?: string;
  data?: any;
  metadata?: any;
}

export interface TransactionResponse {
  status: string;
  message?: string;
  transactionHash?: string;
}

export interface GetTransactionRequest {
  hash: string;
}

export interface GetTransactionResponse {
  from: string;
  to: string;
  amount: number;
  timestamp: string;
  hash: string;
  signature: string;
  data?: any;
}

export interface GetTransactionsRequest {
  page: number;
  size: number;
}

export interface GetTransactionsResponse {
  transactions: GetTransactionResponse[];
  page: number;
  totalPages: number;
  totalTransactions: number;
  nextPage?: number;
  lastPage: number;
}

export interface SyncQuery {
  start: number;
  size: number;
}

export interface SyncResponse {
  transactions: GetTransactionResponse[];
}

export interface BlockHeightResponse {
  blockHeight: number;
}

export interface ProposalRequest {
  proposer: string;
  parameters: any;
  description: string;
  votingDeadline: string;
}

export interface ProposalResponse {
  status: string;
  message: string;
  proposalId: number;
}

export interface VoteRequest {
  nodeId: string;
  proposalId: number;
  vote: boolean;
}

export interface VoteResponse {
  status: string;
  message: string;
  proposalId: number;
}

export interface GetProposalResponse {
  id: number;
  proposer: string;
  description: string;
  parameters: any;
  status: string;
  votes: { [key: string]: boolean };
}

export interface GetAllProposalsResponse {
  proposals: number[];
}

export interface SubmitProposalRequest {
  privateKey: string;
  description: string;
  votingPeriod: number;
}

export interface SubmitProposalResponse {
  status: string;
  message: string;
  proposalId: number;
}

export interface VoteOnProposalRequest {
  proposalId: number;
  vote: boolean;
  privateKey: string;
}

export interface VoteOnProposalResponse {
  status: string;
  message: string;
}

export interface GetGeneralProposalRequest {
  proposalId: number;
}

export interface GetGeneralProposalResponse {
  id: number;
  proposer: string;
  description: string;
  votingPeriod: number;
  status: string;
  votes: { [key: string]: boolean };
}

export interface PredictionRequest {
  modelType: string;
  sender: string;
  data: any;
  privateKey: string;
}

export interface PredictionResponse {
  status: string;
  prediction: any;
  transactionHash: string;
}

export interface ForecastingRequest {
  modelType: string;
  sender: string;
  data: any;
  privateKey: string;
}

export interface ForecastingResponse {
  status: string;
  forecast: any;
  transactionHash: string;
}

export interface QueryBalanceRequest {
  address: string;
  symbol: string;
}

export interface QueryBalanceResponse {
  balance: number;
}

// For authentication requests and responses
export interface AuthenticateRequest {
  address: string;
  privateKey: string;
  message: string;
}

export interface AuthenticateResponse {
  token: string;
  expiry: string;
}

// For verifying authentication tokens
export interface VerifyAuthTokenRequest {
  token: string;
}

export interface VerifyAuthTokenResponse {
  valid: boolean;
  expiry?: string;
}

// For executing contracts
export interface ExecuteContractRequest {
  walletAddress: string;
  contractId: string;
  method: string;
  args: any[];
  privateKey: string;
}

export interface ExecuteContractResponse {
  result: any;
  transactionHash: string;
}

// For deploying contracts
export interface DeployContractRequest {
  walletAddress: string;
  contractBase64: string;
  contractType: string;
  privateKey: string;
}

export interface DeployContractResponse {
  contractId: string;
  transactionHash: string;
}

export interface GetWalletsCountResponse {
  walletsCount: number;
}

import { WalletHandler } from './handlers/wallet';
import { TransactionHandler } from './handlers/transaction';
import { GovernanceHandler } from './handlers/governance';
import { NeuralHandler } from './handlers/neural';
import { HttpClient } from './utils/request';

export class SynnqSDK {
  public wallet: WalletHandler;
  public transaction: TransactionHandler;
  public governance: GovernanceHandler;
  public neural: NeuralHandler;

  constructor(baseURL: string = 'https://rest.synnq.io') {
    // Set default baseURL here
    const client = new HttpClient(baseURL);
    this.wallet = new WalletHandler(client);
    this.transaction = new TransactionHandler(client);
    this.governance = new GovernanceHandler(client);
    this.neural = new NeuralHandler(client);
  }

  // Add other handlers as needed
}

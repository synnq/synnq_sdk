Here's the updated `README.md` with the newly added methods and types included:

---

# synnq_sdk

A TypeScript SDK for interacting with the Synnq platform. This SDK provides easy-to-use methods for managing wallets, transactions, governance, neural network interactions, block management, contract execution, and authentication.

## Features

- **Wallet Management**: Create and manage wallets, retrieve wallet details, and manage permissions and roles.
- **Transaction Handling**: Create and retrieve transactions.
- **Governance**: Submit and vote on proposals.
- **Neural Network**: Make predictions and update models.
- **Block Management**: Query block height.
- **Contract Management**: Execute and deploy contracts.
- **Authentication**: Authenticate wallets and verify tokens.

## Installation

Install the SDK using npm:

```bash
npm install synnq_sdk
```

## Usage

### Import the SDK

First, import the SDK into your project:

```typescript
import { SynnqSDK } from 'synnq-sdk';
```

### Initialize the SDK Client

Initialize the SDK client with the default base URL (`https://rest.synnq.io`):

```typescript
const client = new SynnqSDK();
```

You can also specify a custom base URL if needed:

```typescript
const client = new SynnqSDK('https://custom-api-url.com');
```

### Wallet Management

#### Create a Wallet

You can create a new wallet using the `createWallet` method:

```typescript
async function createWallet() {
  const walletResponse = await client.wallet.createWallet({
    prefix: 'synnq',
  });
  console.log(walletResponse);
}

createWallet();
```

#### Retrieve a Wallet by Mnemonic

Retrieve a wallet using a mnemonic phrase:

```typescript
async function retrieveWalletFromMnemonic() {
  const walletResponse = await client.wallet.retrieveWalletFromMnemonic({
    mnemonic: 'your-mnemonic',
  });
  console.log(walletResponse);
}

retrieveWalletFromMnemonic();
```

#### Query Wallet Balance

Query the balance of a wallet for a specific token:

```typescript
async function queryBalance() {
  const balanceResponse = await client.wallet.queryBalance({
    address: 'wallet-address',
    symbol: 'SYQ',
  });
  console.log(balanceResponse);
}

queryBalance();
```

#### Get Wallets Holding a Specific Coin

Retrieve all wallets that hold a specific coin:

```typescript
async function getWalletsHoldingCoin() {
  const walletsResponse = await client.wallet.getWalletsHoldingCoin({
    coinSymbol: 'SYQ',
  });
  console.log(walletsResponse);
}

getWalletsHoldingCoin();
```

#### Get Wallets Count

Retrieve the total count of wallets:

```typescript
async function getWalletsCount() {
  const countResponse = await client.wallet.getWalletsCount();
  console.log(countResponse);
}

getWalletsCount();
```

### Transaction Handling

#### Create a Transaction

Create a new transaction between two addresses:

```typescript
async function createTransaction() {
  const transactionResponse = await client.transaction.createTransaction({
    transaction_type: 'payment',
    sender: 'sender-address',
    receiver: 'receiver-address',
    amount: 100,
    denom: 'USYQ',
    privateKey: 'your-private-key',
    flags: '1',
    data_type: 'data',
    data: {
      key: 'value',
    },
    metadata: {
      key: 'value',
    },
    model_type: 'default_model',
  });
  console.log(transactionResponse);
}

createTransaction();
```

#### Get a Transaction by Hash

Retrieve transaction details using its hash:

```typescript
async function getTransaction() {
  const transaction = await client.transaction.getTransactionByHash({
    hash: 'transaction-hash',
  });
  console.log(transaction);
}

getTransaction();
```

### Governance

#### Submit a Proposal

Submit a new proposal for voting:

```typescript
async function submitProposal() {
  const proposalResponse = await client.governance.submitProposal({
    proposer: 'proposer-address',
    parameters: { some: 'parameter' },
    description: 'Proposal description',
    votingDeadline: '2024-12-31T23:59:59Z',
  });
  console.log(proposalResponse);
}

submitProposal();
```

#### Vote on a Proposal

Cast a vote on an existing proposal:

```typescript
async function voteOnProposal() {
  const voteResponse = await client.governance.voteOnProposal({
    nodeId: 'node-address',
    proposalId: 1,
    vote: true,
  });
  console.log(voteResponse);
}

voteOnProposal();
```

### Neural Network

#### Make a Prediction

Use the neural network to make a prediction based on input data:

```typescript
async function makePrediction() {
  const predictionResponse = await client.neural.predict({
    modelType: 'exampleModel',
    sender: 'sender-address',
    data: { input: 'some data' },
    privateKey: 'your-private-key',
  });
  console.log(predictionResponse);
}

makePrediction();
```

#### Make a Forecast

Use the neural network to make a forecast:

```typescript
async function makeForecast() {
  const forecastingResponse = await client.neural.forecast({
    modelType: 'exampleModel',
    sender: 'sender-address',
    data: { input: 'forecast data' },
    privateKey: 'your-private-key',
  });
  console.log(forecastingResponse);
}

makeForecast();
```

### Block Management

#### Get Block Height

Retrieve the current block height:

```typescript
async function getBlockHeight() {
  const blockHeightResponse = await client.transaction.getBlockHeight();
  console.log(blockHeightResponse);
}

getBlockHeight();
```

### Contract Management

#### Execute a Contract

Execute a smart contract:

```typescript
async function executeContract() {
  const executeResponse = await client.wallet.executeContract({
    walletAddress: 'wallet-address',
    contractId: 'contract-id',
    method: 'methodName',
    args: ['arg1', 'arg2'],
    privateKey: 'your-private-key',
  });
  console.log(executeResponse);
}

executeContract();
```

#### Deploy a Contract

Deploy a new smart contract:

```typescript
async function deployContract() {
  const deployResponse = await client.wallet.deployContract({
    walletAddress: 'wallet-address',
    contractBase64: 'base64EncodedContract',
    contractType: 'contractType',
    privateKey: 'your-private-key',
  });
  console.log(deployResponse);
}

deployContract();
```

### Authentication

#### Authenticate a Wallet

Authenticate a wallet to receive a token:

```typescript
async function authenticateWallet() {
  const authResponse = await client.wallet.authenticate({
    address: 'wallet-address',
    privateKey: 'your-private-key',
    message: 'authentication message',
  });
  console.log(authResponse);
}

authenticateWallet();
```

#### Verify an Authentication Token

Verify if an authentication token is still valid:

```typescript
async function verifyAuthToken() {
  const verifyResponse = await client.wallet.verifyAuthToken({
    token: 'your-auth-token',
  });
  console.log(verifyResponse);
}

verifyAuthToken();
```

### Additional Notes

- **Error Handling**: Ensure you add error handling to your asynchronous functions to manage any issues that might arise during API calls.
- **Configuration**: The base URL (`https://rest.synnq.io`) is set by default, but you can override it by providing a different URL when initializing the SDK client.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

### Summary of Changes

- **New Sections**: Added examples for querying wallet balance, getting wallets holding a specific coin, getting wallets count, contract execution, contract deployment, wallet authentication, and verifying authentication tokens.
- **Block Management**: Added a section to demonstrate querying block height.
- **Consistent Formatting**: Ensured that the formatting is consistent across all examples and sections.

This updated `README.md` provides a comprehensive guide to using the `synnq_sdk` package, including the newly added methods and types.

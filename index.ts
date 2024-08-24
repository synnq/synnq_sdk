// Exporting the main SDK client
export { SynnqSDK } from './client';

// Optionally export individual handlers if users want to use them directly
export { WalletHandler } from './handlers/wallet';
export { TransactionHandler } from './handlers/transaction';
export { GovernanceHandler } from './handlers/governance';
export { NeuralHandler } from './handlers/neural';
// If you have an example handler, export it as well

// Exporting utility functions or classes
export { HttpClient } from './utils/request';

// Exporting types and interfaces
export * from './types';

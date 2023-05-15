---
title: Release Note
icon: proposal
dir:
  order: 7
order: 7
---

# Release Note

## Greenfield v0.1.2 - The maintenance testnet release.

[Greenfield Blockchain v0.1.2](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.2) and
[Storage Provider v0.1.2](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.2)
was a regular maintenance testnet version of BNB Greenfield. This version fixed several bugs from the
previous version and introduced some features.

### Bugfix List
- Modification of Storage Fee Destination: Previously, storage fees were directed to the SP operator address.
 This has been adjusted to the funding address, ensuring smoother transactions and fee collection.
- Default SP Price Adjustment: To better reflect actual prices, the default prices in create_sp.json and payment.
 Param have been modified to align more closely with the current market rates.
- Fixing List Group Error: A crucial fix has been made to the listGroup function to adapt it to the new indexing
 structure of the group, which uses two levels of indexing.
- Fixing CLI Bugs: We have addressed some command usage issues, such as those relating to update-group-member and
 put-policy, and improved the description of some commands.

### Feature List
- Off-Chain-Auth Solution:  Implementing an off-chain-auth solution, which includes APIs for "request nonce",
 "update user key", and "verify off chain auth sig". This will greatly improve the user experience for Dapp users,
 eliminating the need for repetitive wallet popups for signatures.
- Path-style API and Upload Progress API: Introducing support for the path-style API and a new query upload progress API.
- Seal Object Metrics and Code Refinement: The TaskNode service now includes seal object metrics. We have also refined
 the replicate task and added some DB logs.
- Verify Permission API: The new verify permission API replaces the current chain interface, improving overall
 performance and reducing latency.
- Block Syncer TXHash & Juno Version Update: Updating the block syncer to add txhash info when exporting events.
 Additionally, updating the Juno version to support the new "stop serving" feature and included the SP module and GC function.
- Metadata Block Syncer Schema Update & ListExpiredBucketsBySp: Updating the block syncer schema according to changes
 on the chain and events. Also introducing a new method, ListExpiredBucketsBySp, to support GC operations within SP.

## Greenfield v0.1.0 - The initial testnet release.

[Greenfield Blockchain v0.1.0](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0) and
[Storage Provider v0.1.0](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0)
was the first testnet version of BNB Greenfield. It represented a fundamental implementation of the 
[Greenfield Whitepaper](https://github.com/bnb-chain/greenfield-whitepaper). 

This version contained a variety of functions, including payment, storage, storage provider, 
cross-chain, challenge, staking, and governance. It is an important milestone for BNB Greenfield, 
implementing many core functions and laying the foundation for future development and improvement.

### Features List

#### Account && Balance && Transaction

- Users can create accounts and transfer BNB through Metamask or other EVM compatible wallets.
- Users can grant permission to other users to spend their BNB as transaction fees.

#### Storage
- Users can create and manage group, bucket, and object on Greenfield.
- Users can upload files onto Greenfield in a decentralized way and download them anytime.
- Users can upload private files onto Greenfield safely.
- Users can grant permission to other users to access their files.
- Users can grant permission to other users to manage their resources, including group, bucket, and object.
- Users can pay for storage fees using BNB in a streaming manner.
- If the storage provider provides poor service, users can challenge them.

#### Native Cross Chain Communication

- User can transfer BNB between BSC and Greenfield.
- User can mirror Group, Bucket, Object to BSC as NFT.
- User can manage Group, Bucket, Object on BSC through smart contract directly.
- BSC developer can easily integrate Greenfield into their dApp through [SDK](https://github.com/bnb-chain/greenfield-contracts-sdk). 

#### Storage Provider

- Storage Provider can register and update their information.
- Storage Provider can update the storage price.
- Storage Provider can garbage collect stale storage data on Testnet.

#### Validator and Staking

- User can stake BNB to become a validator.
- Validator update their information.
- Validator can get part of revenue from storage fees.
- Validator can take part in the governance of Greenfield.

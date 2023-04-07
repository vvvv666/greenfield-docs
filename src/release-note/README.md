---
title: Release Note
icon: proposal
dir:
  order: 7
order: 7
---

# Release Note

## Greenfield v0.1.0 - The initial testnet release.

[Greenfield Blockchain v0.1.0](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0) and
[Storage Provider v0.1.0](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0)
was the first testnet version of BNB Greenfield. It represented a fundamental implementation of the 
[Greenfield Whitepaper](https://github.com/bnb-chain/greenfield-whitepaper). 

This version contained a variety of functions, including payment, storage, storage provider, 
cross-chain, challenge, staking, and governance. It is an important milestone for Greenfield Blockchain, 
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

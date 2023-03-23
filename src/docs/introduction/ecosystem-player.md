---
title: Ecosystem Players
order: 2
---

## Ecosystem Players
There are several player roles for the whole Greenfield ecosystem.

<div align="center"><img src="../../asset/01-All-Players-of-Greenfield.jpg"  height="80%" width="80%"></div>
<div align="center"><i>Figure All Players of Greenfield</i></div>

### Greenfield Validators

The Greenfield blockchain operates as a Proof-of-Stake (PoS) blockchain and has its own set of validators 
that are chosen through an election process based on PoS logic.

The validators play a crucial role in ensuring the security of the Greenfield blockchain and are actively 
involved in the governance and staking of the blockchain. They also form a peer-to-peer network that functions 
similarly to other PoS blockchain networks.

In addition to their governance responsibilities, validators also accept and process transactions, which enables users 
to operate on the objects stored on the Greenfield blockchain. They are responsible for maintaining the metadata of 
Greenfield and ensure that the blockchain state acts as a control panel for both Storage Providers (SPs) and users. 
Both parties rely on the validators to accurately update and utilize this state in order to operate, store, 
and access their object storage.

### Greenfield Relayers
The Greenfield Relayer is a powerful bi-directional relaying service designed to facilitate seamless communication between 
Greenfield and BSC. It can only be operated by Greenfield validators and functions as a standalone process.

This innovative system independently monitors and tracks cross-chain events that take place on both the Greenfield and 
BSC networks, storing this data securely in a database. When an event is confirmed, the relayer generates a BLS signed 
message that is then shared through the P2P network on the Greenfield network, known as "the vote".

As more votes are collected, the Greenfield Relayer assembles the necessary cross-chain package transaction and 
submits it to either the BSC or Greenfield network. This streamlined process ensures that communication between the two 
networks is efficient and error-free.

### Storage Providers (SPs)
Storage Providers (SPs) are an essential component of the Greenfield blockchain, providing storage service 
infrastructures that can be offered by both individuals and organizations. SPs utilize the Greenfield blockchain 
as the ledger and single source of truth to maintain secure and reliable storage.

Each SP is responsible for processing user requests to upload and download data, acting as the gatekeeper for 
user rights and authentications. As a result, they play a critical role in ensuring that user data remains secure 
and accessible at all times.

### Greenfield dApps
Greenfield dApps are applications that leverage the unique features of the Greenfield blockchain to 
solve various problems for their users. These dApps are designed to utilize Greenfield storage and 
related economic traits, providing a reliable and secure platform for creating and managing data.

Users can interact with the BNB Greenfield Core Infrastructure through the use of BNB Greenfield dApps, 
which are decentralized applications that enable seamless interaction with the Greenfield ecosystem. Furthermore, 
the Greenfield blockchain provides an intuitive smart contract library on the cross-chain facility, making it 
easy for dApp developers to integrate these features into their applications. 
This user-friendly approach allows developers to efficiently build and deploy 
dApps that can solve real-world problems.

## Participate in the Ecosystem
- [Become A Validator](../greenfield-blockchain/cli/validator-staking.md): validators secure the Greenfield by validating and relaying transactions,
  proposing, verifying and finalizing blocks.
- [Become A Storage Provider](../greenfield-blockchain/cli/storage-provider.md): SPs store the objects' real data, i.e. the payload data. and get paid
  by providing storage services.
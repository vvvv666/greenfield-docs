---
title: Programmability
order: 6
---

# Programmability

The real power of the Greenfield ecosystem lies in that the platform is not only designed to store the data, but also to
support the creation of value based on the data assets and its related economy.

The asset traits of the data are firstly established on the permissions, e.g. the permission to read the data. When 
this right is disconnected from the data itself, they become tradable assets and enlarge the value of the data. This 
can be amplified when the data itself can be executable (a new type of "Smart Code"), interact with each other, and 
generate new data. This creates a lot of room to imagine building a new, data-intensive, trustless computing environment.

Secondly, the data permissions can be transferred cross-chain onto BSC and become digital assets there. This creates a 
variety of possibilities to integrate these assets with the existing DeFi protocols and models on BSC.

This gets even further enhanced by the smart contracts on BSC, which enjoy the same address format as accounts on the 
Greenfield blockchain and can be the owners of the data objects and inherit different permissions. This will unleash 
many new business opportunities based on the data and its operations.

::: info
It does not mean developers have to build dapp based on BSC network. Excellent infrastructure, applications, 
and tools can be built directly on the Greenfield network.
:::

## Cross-Chain with BSC

The cross-chain model expects to achieve the following goals:

- integratable with the existing systems: try to reuse the current
  infrastructure and dApps as much as possible, such as NFT
  Marketplace, data indexing, and blockchain explorers.

- programmable: dApps can define how they want to wrap the assets from Greenfield.

- secure and recoverable.

The native cross-chain bridge is maintained and secured by the
validators of Greenfield, via a new relayer system based on an
aggregated multisig scheme (more details in the later sections).
Validators will run the relayers to facilitate the high
bandwidth and fast bridge.

BNB will be transferred from BSC to Greenfield as the first cross-chain
action. The initial validator set of Greenfield at the genesis will
first lock a certain amount of BNB into the "Greenfield Token Hub"
contract on BSC. This contract will also be used as part of the native
bridge for BNB transferring after the genesis. These initial locked BNB
will be used as the self-stake of validators and early days gas fees.

## Framework

<div align="center"><img src="../../asset/03-Cross-chain-Architecture.jpg"  height="95%" width="95%"></div>
<div align="center"><i>Figure Cross-chain Architecture</i></div>

The bottom layer is a cross-chain **Communication Layer**, which focuses
on primitive communication package handling and verification. The middle
layer implements the **Resource Mirror**. It is responsible for managing
the resource assets that are defined on Greenfield but mirrored onto
BSC. The top layer is the **Application Layer**, which are the smart
contracts implemented by community developers on BSC to operate the
mirrored resource entities with their primitives; Greenfield does not have
such an application layer since itself does not provide programmability yet.
The real dApps will have some part in this Application Layer and also
interact with Greenfield Core and all sorts of supporting infrastructures.

Because of the asymmetric framework, BSC focuses more on the
application/control plane, while Greenfield is the data plane. To avoid
state racing, the following rules are introduced:

- Any resources that are initiated to create by BSC can only be controlled by BSC.

- Any resources that are controlled by BSC can not transfer control rights to Greenfield.

- Any resources that are controlled by Greenfield can transfer control rights to BSC.

More details are discussed in [Cross Chain Module design](../greenfield-blockchain/modules/cross-chain.md).

## Get Started with building dapp

- [Learn more about the cross-chain mechanism](../greenfield-blockchain/modules/cross-chain.md)
- [Start building dapps with Greenfield](../dapp/quick-start.md)

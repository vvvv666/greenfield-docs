---
title: Cross Chain
order: 5
---

## Framework

<div align="center"><img src="../../../asset/03-Cross-chain-Architecture.jpg"  height="95%" width="95%"></div>
<div align="center"><i>Figure Cross-chain Architecture</i></div>

The Greenfield ecosystem consists of three distinct layers.

### Communication Layer 
Communication Layer is responsible for handling and verifying
the communication packages between different blockchain networks. This layer serves as the backbone of
the entire ecosystem, ensuring the smooth and secure transfer of information between different platforms.

### Resource Mirror Layer 
Resource Mirror Layer provides a bridge between Greenfield and BNB Smart Chain (BSC).
This layer manages the resource assets defined on Greenfield, which are then mirrored onto BSC.
The Resource Mirror Layer enables users to interact with these assets on BSC using smart contracts,
which operate on the primitives defined by Greenfield. This layer plays a critical role in the
Greenfield ecosystem, enabling seamless cross-chain asset management and more efficient resource allocation.

### Application Layer
At the top of the Greenfield ecosystem is the Application Layer. This layer consists of smart contracts
that are developed by the community on BSC, enabling them to operate the mirrored resource entities on
the Resource Mirror Layer. While Greenfield itself does not currently offer programmability, the Application
Layer allows for the creation of decentralized applications (dApps) that can interact with Greenfield
Core and other supporting infrastructures. The Application Layer represents the true power and
potential of the Greenfield ecosystem, enabling developers and users to create and leverage a
wide range of innovative and decentralized applications while benefiting from Greenfield's robust
infrastructure and cross-chain capabilities.

## Communication Layer

The communication layer is composed of a set of **Greenfield Relayers**:

- Each validator should run a relayer. Each relayer possesses a BLS
  private key, with the address of the key stored on-chain as part
  of the validator's mandatory information.

- The relayer watches all cross-chain events happen on BSC and the
  Greenfield blockchain independently. After enough blocks of
  confirmation to reach finality, the relayer will sign a message by
  the BLS key to confirm the events, and broadcast the signing
  attestment, which is called "the vote", through a p2p network to
  other relayers.

- Once enough votes from the relayer are collected, the relayer will
  assemble a cross-chain package transaction and submit it to BSC or
  Greenfield network.

Here more details about the communication layer and economics will be explained.

### Vote Poll
A new p2p communication across the cross-chain relayers will be
introduced, called "Vote Poll". This Vote Poll will gossip about the
signed votes within the network. To avoid message flooding, all the
signed votes will expire after a fixed time. The Greenfield relayers can
either put votes to or fetch votes from the poll and assemble it as
cross-chain package transactions.

### Channel and Sequence
To allow multiplexing and replay attack resistance, "Channel" and
"Sequence" concepts are introduced to manage any type of communication.
Following is an example definition:

```go
type Package struct {
    PackType     uint8 // SYN, ACK or FAIL_ACK
    SrcChainId   uint16
    DstChainId   uint16
    Sequence     int64
    ChannelId    uint16
    Payload      []byte
    BLSSignature sdk.Sig
    BLSBits      sdk.Bits // indicate the signer of the package
}
```

The packages in the same channel must be processed in sequence, while
they can be processed in parallel if they belong to different channels.

The operation messages on different Greenfield resources are mapped to
different channels. For example, buckets and storage objects belong to
different channels.

### Reliability Protocol
Here a protocol is defined to ensure reliable stream delivery of data
between BSC and Greenfield.

The protocol must recover the scenarios when the cross-chain data is
damaged, duplicated, or delivered out of order by the relayers. It
assigns a sequence number to each package and requires a positive
acknowledgment (`ACK`) from the target chain. Here there are three kinds
of packages:

1. `SYN`: the initial cross-chain packages started by either users or dApps.

2. `ACK`: the positive acknowledgment sent by the resource layer of the
   target chain.

3. `FAIL_ACK`: the negative acknowledgment sent by the communication
   layer of the target chain, usually caused by damaged data or
   protocol inconsistency triggered by the edge case.

Each communication package must start with `SYN` and end with ACK or
`FAIL_ACK`. The handler code and contracts on each side must handle these
primitives.

### Validator Update

With an aggregatable multi-signature scheme, e.g. BLS, the cross-chain
can be quite light-weighted. However, sufficient data must be appended
onto the package to indicate the validators who sign the events, this
can be achieved by combining a bitmap and a validator set on-chain.
However, the Greenfield validator set is volatile, Greenfield validators
have to sync the information to BSC once there is an update about the
Greenfield validator set. This is implemented by building a Greenfield
light client on BSC, which is similar to the light client implemented
for BNB Beacon Chain on BSC.

### Economic

The Greenfield relayers play an important role in relaying inter-chain
packages. A proper incentive is introduced to keep relayers making their
long-term contribution.

#### Fee and Reward of Cross-Chain Packages

Both `SYN` and `ACK`/`FAIL_ACK` packages cost gas to relay, the users (or
smart contracts) will need to pay the fee to cover both of them when
they start the `SYN` cross-chain packages.

To encourage Greenfield relayers to sign cross-chain packages:

1. The package deliverer will get a fixed ratio of the relay fee as a reward.

2. The rest relay fee will be distributed equally among those who sign the vote.

#### Race to Deliver Cross-Chain Packages

There are multiple Greenfield relayers, and they may compete to submit
the aggregated multi-signed packages onto the Greenfield blockchain and
BSC. To avoid racing transactions caused by the competition, which
wastes gas, the relayers are rotated to relay transactions, e.g. taking
shifts every 10 minutes. Each cross-chain package gets a timestamp, if
it is not relayed within a limited delay when the designated relayer
doesn't perform the duty, any other Greenfield relayers are allowed to
relay such a package.

#### Callbacks and Limited Gas

BSC dApps, i.e. smart contracts on BSC, are allowed to implement their
own logic to handle `ACK` or `FAIL_ACK` packages. The smart contracts can
register callback functions to handle the `ACK` packages. As it is
impossible for the cross-chain infrastructure to predict the gas
consumption of the callback, a gas limitation estimate should be defined
from the smart contracts that register the callbacks.

For any cross-chain packages that start from BSC, the smart contract
needs to specify the gas limitation for the `ACK` or `FAIL_ACK` package, the
relayer fee is prepaid accordingly on BSC. Relayers may refund the
excessive fees later.

## Resource Mirror Layer

### Resource Entity Mirror

The purposes of almost all the cross-chain packages are to change the
state of the resource entities on the Greenfield blockchain. Thus, the
below resource entities should be able to be mirrored on BSC: Account, BNB, Bucket, Object and Group.

The account mapping is natural: as BSC and Greenfield use the same
address scheme. The same address values on both sides mean the same
account. They do not require an actual mirror.

BNB is a natively pegged token from the genesis of Greenfield. The
`Token Hub` contract is a smart contract built on BSC to ensure
that Greenfield cannot inflate BNB and secure the total circulation of
BNB.

Bucket, Object, and Group are mirrored onto BSC as NFTs of a new BEP
revised from the [ERC-721](https://eips.ethereum.org/EIPS/eip-721) and 
[ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) standard. 
These NFTs have corresponding metadata information for the resources. 
The ownerships of the NFTs on BSC stand for the ownerships of these 
resources on Greenfield. As these ownerships are not transferable on 
Greenfield, these NFTs are not transferable on BSC.

To avoid state racing, the following rules are introduced:

- Any resources that are initiated to create by BSC can only be controlled by BSC.

- Any resources that are controlled by BSC can not transfer control rights to Greenfield.

- Any resources that are controlled by Greenfield can transfer control rights to BSC.

### Cross-Chain Operating Primitives

A few series of cross-chain primitives are defined for dApps to call to
operate on these resource entities.

It is worth highlighting that smart contracts can call these primitives
in a similar way as EOAs.

Accounts

- create payment accounts on BSC

BNB:

- transfer bidirectionally between BSC and Greenfield among accounts
  (including even payment accounts)

Bucket:

- create a bucket on BSC

- mirror bucket from Greenfield to BSC

Object:

- mirror object from Greenfield to BSC

- create an object on BSC

- grant/revoke permissions of objects on BSC to accounts/groups

- copy objects on BSC

- Kick off the execution of an object on BSC

- associate buckets to payment accounts on BSC

Group:

- mirror group from Greenfield to BSC

- create a group on BSC

- change group members on BSC

- leave a group on BSC

Once these primitives are called by EOA or smart contracts, the
predefined events will be emitted. Greenfield Relayers should pick up
these events and relay them over to Greenfield and BSC. As the change
will happen asynchronously, there will be specific cross-chain packages
for acknowledgments or errors, which can trigger a callback. The caller
of the primitives should pay the fees upfront for cross-chain operations
and also for the potential callback. 
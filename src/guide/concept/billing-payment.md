---
title: Billing and Payment
order: 4
---

# Billing and Payment
Greenfield will charge the users in two parts:
- Firstly, every transaction will require gas fees to pay the Greenfield validator to
  write the metadata on-chain as described in [Gas and Fee](gas-fees.md) part.
- Secondly, the SPs charge the users for their storage service. Such payment also happens on the Greenfield.

The storage service fee will be charged on Greenfield in a steam payment style like [Superfluid](https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-agreements/constant-flow-agreement-cfa).

## Storage Service Fee
There are two kinds of fees for Greenfield: **object storage fee** and **data package fee**.

For storage, every object stored on Greenfield is charged at the price calculated by size, replica numbers, 
a base price ratio, and other parameters. Once the object is stored, the total charge of 
storage will be mainly only related to time and the base price.

For data downloading, there is a free, time-based quota for each bucket of users' objects. 
If it's exceeded, users can promote their data package to get more quota. Every data package 
has a fixed price for the defined period. Once the data package is picked, the total charge 
of downloading will be only related to time and the data package price, until the data package setting 
is changed again.

### Payment Account
By default, the object owner's address will be used to pay for the objects it owns. 
But users can also create multiple "payment accounts" and associate objects to different payment 
accounts to pay for storage and bandwidth.

The address format of the payment account is the same as normal accounts. 
It's derived by the hash of the user address and payment account index. 
However, the payment accounts are actually only logical ones and only exist in the storage payment module. 
Users can deposit into, withdraw from and query the balance of payment accounts on the Greenfield blockchain, 
but users cannot use payment accounts to perform staking or other on-chain transactions. 
Payment accounts can be set as "non-refundable". Users cannot withdraw funds from such payment accounts.

### Downgraded service
Once the payment accounts run out of BNB, the objects associated with these payment accounts will 
suffer from a downgraded service of downloading, i.e. the download speed and connection numbers will be limited. 
Once the fund is transferred to the payment accounts, the service quality can be resumed right away. 
If the service is not resumed for a long time, it is the SPs' discretionary decision to clear the data out, 
in a similar way to how SPs claim to stop services to certain objects. In such a case, the data may be gone 
from Greenfield completely.

::: warning
If users fail to renew their subscription in a timely manner, **there is a risk of their stored data being permanently 
deleted.**
:::

### Trust or Shift
Here there is trust between the users and the SPs for data download.

As the extra downloading bandwidth will charge a fee and the download journal 
is not fully stored on the Greenfield blockchain. SPs provide an endpoint interface for users to query the download 
billing details with detailed logs and downloaders' signatures. 
If the users and the SPs cannot agree on the bill, users may just select another Primary SP.

For more tech details, please refer to the [stream payment module design](../greenfield-blockchain/modules/billing-and-payment.md).
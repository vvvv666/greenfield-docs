---
title: Billing and Payment
order: 4
---

# Billing and Payment

Greenfield will charge the users in two parts. 

- Firstly, every transaction will require gas fees to pay the Greenfield validator to
write the metadata on-chain as described in [gas and fee](gas-fees.md) part.
- Secondly, the SPs charge the users for their storage service. Such payment also happens on the Greenfield. 

This document is about the latter: how such off-chain service fees are billed and charged.


## Storage Service Fee
There are two kinds of fees for the off-chain service: **object storage
fee** and **read fee**:

1. Every object stored on Greenfield is charged a fee based on its
   size. The **storage price** is determined by the storage providers and user can choose storage provider accordingly.

2. Users are given a free quota to access their objects according to their size, 
   content type, among other factors. In the event of exceeding this quota, which is indicative of the object data 
   being downloaded excessively, the bandwidth for further downloads will be limited by SP. However, users have the
   option of increasing their read quota to obtain more download quota. The cost of the read quota is determined by 
    the primary storage provider selected by users.

The fees are paid on Greenfield in the style of `Stream` from users to the SPs at a constant rate. The fees are charged
every second as they are used. The payment time unit for storage resources is 6 months, and users need to prepay for 
6 months of service. A subscription period of less than 6 months is not allowed. If users delete stored objects 
prematurely, the remaining fees will still be refunded.

::: warning
If users fail to renew their subscription in a timely manner, **there is a risk of their stored data being permanently 
deleted.**
:::

For more tech details, please refer to the [stream payment module design](../modules/billing-and-payment.md).
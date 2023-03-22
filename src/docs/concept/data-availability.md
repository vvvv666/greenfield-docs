---
title: Data Integrity and Availability
order: 6
---

# Data Integrity and Availability
There are three crucial aspects of data management: integrity, availability, and redundancy. 
Below are some key points to ensure each aspect is met:
- The primary storage provider must correctly store the object uploaded by the user.
- The assigned data segments in both primary and secondary storage providers must be free of any loss, corruption, or counterfeit data.
- Erasure coding pieces in secondary providers should enable recovery of the original data in the primary storage provider.

To ensure data integrity and redundancy, checksum and redundancy setups must be established for objects. 
These setups constitute part of the objects' metadata and must be verified by the storage providers and users upon 
creating objects. The metadata will be stored on the Greenfield blockchain.

Collaboration between Greenfield and storage providers is essential in ensuring data integrity and availability, 
especially for aspect #2. To enhance user confidence that data is being stored as promised, 
a ["Proof-of-Challenge"](../greenfield-blockchain/modules/data-availability-challenge.md) approach is introduced.

::: info
"Proof-of-Challenge" is proposed based on the assumptions: **Greenfield is a self-sustained, service-oriented ecosystem.**
:::

Stakeholders can trigger challenges in various ways, such as through user or storage provider-initiated transactions or 
via internal events on the Greenfield blockchain. Following a challenge, Greenfield validators must conduct 
an **off-chain audit** of challenged data from storage providers. Consortium members will vote on the challenge results, 
and the failed outcomes will reduce the corresponding storage providers' rewards. Participants who submitted the challenge 
and the validators receive rewards for their involvement in this process.

Data that failed to pass a challenge will not face another challenge for a specific time to allow storage providers to 
restore the data. 

[Data challenger module](../greenfield-blockchain/modules/data-availability-challenge.md) will elaborate further on challenges associated with data availability.
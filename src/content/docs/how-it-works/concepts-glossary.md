---
title: Concepts
description: Key concepts and terminology used in MIST.cash.
---

## Core Concepts

### Commitment

A cryptographic hash that represents a deposit. It is stored on-chain without revealing the deposit details.

### Nullifier

A unique value derived from the deposit secret. When a withdrawal is made, the nullifier is published to prevent double-spending.

### Merkle Tree

A data structure that stores all deposit commitments. The ZK proof demonstrates membership in this tree without revealing which leaf (deposit) belongs to the prover.

### Note

A secret value shared between sender and recipient that encodes the information needed to withdraw funds.

## Glossary

| Term | Definition |
|------|-----------|
| **Shielded pool** | The smart contract holding all deposited tokens |
| **ZK proof** | A zero-knowledge proof that validates a withdrawal |
| **Relayer** | An optional third-party service that submits withdrawal transactions on behalf of users |
| **Denomination** | A fixed deposit amount for a given pool |
| **Anonymity set** | The set of all deposits in a pool that a withdrawal could plausibly originate from |

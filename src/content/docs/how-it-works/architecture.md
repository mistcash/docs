---
title: Architecture
description: System architecture of the MIST.cash protocol.
---

MIST.cash consists of several components that work together to provide private transactions.

## Smart Contracts

The core contract manages deposits, the Merkle tree, nullifier tracking, and withdrawal verification. It is deployed on Starknet and written in Cairo.

## Client SDK

The TypeScript SDK handles proof generation, note management, and contract interaction. It runs entirely client-side to ensure secrets never leave the user's device.

## Relayer (Optional)

A relayer is an off-chain service that submits withdrawal transactions on behalf of users. This is useful for withdrawing to addresses with no gas, preserving privacy by avoiding a direct on-chain link.

## System Diagram

```
User --> SDK --> [Generate Proof] --> Relayer (optional) --> Starknet Contract
                                                                  |
                                                           Verify Proof
                                                                  |
                                                          Transfer Tokens
```

## Data Flow

1. User creates a note (secret + nullifier) via the SDK.
2. SDK computes the commitment and submits the deposit transaction.
3. For withdrawal, the SDK generates a ZK proof locally.
4. The proof is submitted (directly or via relayer) to the contract.
5. The contract verifies and processes the withdrawal.

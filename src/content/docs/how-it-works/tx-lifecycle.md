---
title: Transaction Flow
description: Step-by-step walkthrough of a MIST.cash transaction.
---

A MIST.cash transaction goes through several stages from deposit to withdrawal.

## 1. Deposit

The user generates a random secret and computes a commitment (hash of the secret). They then call the `deposit()` function on the MIST.cash contract, sending tokens along with the commitment.

## 2. Commitment Insertion

The contract inserts the commitment into an on-chain Merkle tree. This tree stores all deposit commitments.

## 3. Proof Generation

When the user (or recipient) wants to withdraw, they generate a zero-knowledge proof that demonstrates:

- They know a secret corresponding to a commitment in the Merkle tree.
- They have computed a valid nullifier for that commitment.
- The nullifier has not been used before.

## 4. Withdrawal

The user submits the ZK proof along with the nullifier and the recipient address. The contract verifies the proof, marks the nullifier as spent, and transfers the tokens to the recipient.

## 5. Confirmation

The transaction is confirmed on Starknet. The recipient now has the tokens in their wallet with no on-chain link to the original depositor.

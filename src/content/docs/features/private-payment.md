---
title: Private Payment
description: How MIST.cash enables private payments on Starknet.
---

Private payments are the core feature of MIST.cash. By leveraging zero-knowledge proofs, users can transfer value without revealing the sender, receiver, or amount on-chain.

## How It Works

1. The sender deposits tokens into the MIST.cash shielded pool.
2. The sender shares a **note** (a secret) with the recipient off-chain.
3. The recipient uses the note to generate a ZK proof and withdraw the tokens to their address.

## Privacy Guarantees

- **Sender anonymity** -- The withdrawal cannot be linked back to the deposit.
- **Receiver anonymity** -- The recipient address has no on-chain connection to the sender.
- **Amount privacy** -- When using fixed denominations, the amount is indistinguishable from other deposits in the same pool.

## Use Cases

- Payroll and salary payments
- Donations without public disclosure
- Private peer-to-peer transfers
- Protecting trading strategies

---
title: Overview
description: A high-level overview of the MIST.cash protocol.
---

MIST.cash is a privacy protocol built on Starknet that uses zero-knowledge proofs to enable confidential transactions.

## Why Privacy Matters

On-chain transactions are fully transparent by default. While this transparency is great for auditability, it exposes users to surveillance, front-running, and targeted attacks. MIST.cash restores financial privacy without sacrificing the benefits of a public blockchain.

## How It Works

1. **Deposit** -- A user deposits tokens into the MIST.cash contract along with a cryptographic commitment.
2. **Wait** -- The deposit sits in a shielded pool alongside other deposits.
3. **Withdraw** -- The user generates a zero-knowledge proof to withdraw tokens to a new address, proving they made a valid deposit without revealing which one.

## Key Properties

- **Non-custodial** -- Users always retain control of their funds.
- **Trustless** -- No trusted setup or centralized relayer is required.
- **Composable** -- Integrates with other Starknet protocols via the SDK.

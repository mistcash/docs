---
title: Partial Withdrawals
description: Withdraw only a portion of your shielded balance.
---

MIST.cash supports partial withdrawals, allowing users to withdraw a fraction of their deposited amount while keeping the remainder in the shielded pool.

## How It Works

When you make a partial withdrawal, the protocol splits your original commitment into two new commitments -- one representing the withdrawn amount and one representing the remaining balance. Both operations are protected by zero-knowledge proofs.

## Benefits

- **Flexibility** -- No need to withdraw the full amount at once.
- **Improved privacy** -- Partial withdrawals make it harder for observers to correlate deposits and withdrawals by amount.
- **Cost efficiency** -- Withdraw only what you need, when you need it.

## Example

If you deposited 1 ETH, you could withdraw 0.3 ETH and retain a shielded note for the remaining 0.7 ETH. The 0.7 ETH note can be used for future withdrawals.

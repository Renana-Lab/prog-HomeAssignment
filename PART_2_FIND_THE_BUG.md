# Part 2: Find The Bug

## Story

The team works on a research lab product with:

- React frontend
- Small Express backend
- Solidity contract
- Web3 integration through ethers

After returning from a holiday break, the lab discovered that the code no longer works:

- Loading experiments asks the wallet to approve a transaction.
- The frontend keeps reloading or duplicating experiments.
- Backend result loading behaves strangely.
- Saving a result can fail with a payload hash mismatch.
- Contract interactions are unreliable.
- Some generated Web3 artifacts are encoded and need inspection.
- The code is messy enough that the team does not trust it.

Your task: save the lab.

## Repo

The broken repo is in:

`part-2-save-the-lab`

## Requirements

Fix the project so that the lab flow works reliably:

- Experiments can be loaded without unnecessary wallet prompts.
- Result submission has a clear pending/success/failure flow.
- Backend result data stays consistent.
- Contract reads and writes behave according to their purpose.
- Any encoded or hashed data used by the system is handled consistently.
- Your explanation covers the meaningful issues you found across the system.

## Notes

You do not need to deploy to a real chain.

You do not need to build production authentication.

You do not need to invent a full cryptography system. Keep the hash/decoding fixes practical and explain what they do and do not prove.

Prefer the smallest reliable fixes over a full rewrite.

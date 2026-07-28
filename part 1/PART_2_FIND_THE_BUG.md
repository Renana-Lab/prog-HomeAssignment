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
- Backend result filtering behaves strangely.
- Saving a result can fail with a payload hash mismatch.
- Contract reads and writes are not shaped correctly.
- Some generated Web3 artifacts are encoded and need inspection.
- The code is messy enough that the team does not trust it.

Your task: save the lab.

## Repo

The broken repo is in:

`part-2-save-the-lab`

## Requirements

Fix the project so that:

- Reading experiments is a read operation, not a wallet transaction.
- The frontend loads experiments once per relevant dependency and does not duplicate rows.
- Submitting a result still uses a transaction and waits for confirmation.
- The backend filters results correctly and does not corrupt stored data.
- The frontend and backend agree on how result payload hashes are calculated.
- The Solidity contract marks read functions correctly and validates result submissions.
- Your explanation identifies at least one issue in each layer: frontend, backend, Solidity, Web3 integration, and decoding/crypto.

## Notes

You do not need to deploy to a real chain.

You do not need to build production authentication.

You do not need to invent a full cryptography system. Keep the hash/decoding fixes practical and explain what they do and do not prove.

Prefer the smallest reliable fixes over a full rewrite.

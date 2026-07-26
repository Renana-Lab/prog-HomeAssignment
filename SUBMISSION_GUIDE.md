# Submission Guide

Please read this before starting.

You should submit your work by creating your own branch in this repository and pushing it to GitHub.

Recommended total time: 4-6 hours.

We care about correctness, reasoning, clarity, and ownership of the solution. Prefer clear, minimal fixes over a full rewrite.

## 1. Clone The Repo

```bash
git clone https://github.com/Renana-Lab/prog-HomeAssignment.git
cd prog-HomeAssignment
```

## 2. Create Your Branch

Use your name in the branch.

Examples:

```bash
git checkout -b candidate/jane-doe
```

```bash
git checkout -b candidate/yossi-cohen
```

Do not work directly on `main`.

## 3. Part 1: Multiple Choice

Open:

```text
PART_1_MULTIPLE_CHOICE.md
```

Create a new file:

```text
PART_1_ANSWERS.md
```

Answer each question clearly.

Recommended format:

```md
# Part 1 Answers

## Question 1

Answer: A/B/C/D

Short explanation:
...

## Question 2

Answer: A/B/C/D

Short explanation:
...

## Question 3

Answer: A/B/C/D

Short explanation:
...

## Question 4

Answer: A/B/C/D

Short explanation:
...
```

The explanation can be short. One or two sentences per question is enough.

## 4. Part 2: Find The Bug

Open:

```text
PART_2_FIND_THE_BUG.md
```

The broken project is here:

```text
part-2-save-the-lab
```

Install dependencies:

```bash
cd part-2-save-the-lab
npm install
```

Useful commands:

```bash
npm run backend
```

```bash
npm run frontend
```

```bash
npm run typecheck
```

You do not need to deploy the Solidity contract to a real chain.

### What To Fix

Fix the project so that:

- Reading experiments is a read operation, not a wallet transaction.
- Submitting a result is still a write transaction and waits for confirmation.
- The frontend does not reload forever or duplicate experiment rows.
- The backend filters results correctly.
- The backend does not accidentally corrupt stored result data.
- The Solidity contract marks read functions correctly.
- The Solidity write function validates basic inputs.
- The Web3 ABI/config is inspected and corrected.
- The frontend and backend agree on the payload hash format.

### Explanation File

Create a new file at repo root:

```text
PART_2_EXPLANATION.md
```

Use this structure:

```md
# Part 2 Explanation

## Summary

Briefly describe what was broken and what you changed.

## Frontend

- What was broken?
- What did you change?
- Why does the fix work?

## Backend

- What was broken?
- What did you change?
- Why does the fix work?

## Solidity

- What was broken?
- What did you change?
- Why does the fix work?

## Web3 Integration

- What was broken?
- What did you change?
- Why does the fix work?

## Decoding / Crypto

- What encoded or hashed data did you inspect?
- What was inconsistent?
- What did you change?
- What does the hash prove, and what does it not prove?

## Verification

List the commands or manual checks you ran.

## What I Did Not Change

Mention at least one improvement you intentionally did not implement and why.
```

Good answers explain tradeoffs. You do not need to make the app production-ready.

## 5. Part 3: Build A Chat UI

Open:

```text
PART_3_BUILD_UI.md
```

Create your implementation in a new folder:

```text
part-3-chat-ui
```

You may use React, Angular, Vue, or plain TypeScript/JavaScript.

Your UI should include:

- Conversation list
- Active conversation header
- Message list
- Message composer
- Sending, sent, and failed message states
- Online/offline indicator
- Empty state for a conversation with no messages

Your logic should support:

- Selecting a conversation
- Sending a message
- Showing `sending`
- Changing the message to `sent` after a short delay
- Simulating a failed send for at least one case

Inside `part-3-chat-ui`, include a short README:

```text
part-3-chat-ui/README.md
```

It should explain:

- How to install dependencies
- How to run the UI
- What you built
- Any assumptions you made

## 6. AI Usage

Fill out:

```text
AI_USAGE.md
```

Fill it out even if you did not use AI.

AI tools are allowed. We evaluate whether you understood, verified, and owned your solution.

## 7. Commit Your Work

From the repo root:

```bash
git status
git add .
git commit -m "Complete home assignment"
```

Use more than one commit if that helps show your process.

## 8. Push Your Branch

Push your branch to GitHub:

```bash
git push -u origin candidate/your-name
```

Then send us your branch name.

Example:

```text
candidate/jane-doe
```

## Final Checklist

Before submitting, make sure your branch includes:

- `PART_1_ANSWERS.md`
- `PART_2_EXPLANATION.md`
- Fixed code under `part-2-save-the-lab`
- Your UI under `part-3-chat-ui`
- `part-3-chat-ui/README.md`
- Completed `AI_USAGE.md`

Also make sure you can explain every meaningful code change in a follow-up conversation.

# Programmer Candidate Assignment

This repository contains two stages of the technical evaluation:

1. A home assignment completed and submitted through GitHub.
2. An architecture blueprint prepared in advance and presented by the candidate during the following in-person interview.

Please read this page before beginning.

## Repository Structure

```text
part 1/
  README.md
  PART_1_MULTIPLE_CHOICE.md
  PART_2_FIND_THE_BUG.md
  PART_3_BUILD_UI.md
  AI_USAGE.md
  part-2-save-the-lab/

part 2 - frontal assignment/
  Architecrture Blueprint.md
```

## Stage 1: Home Assignment

The home assignment is located in [`part 1`](./part%201/README.md) and contains three parts:

- **Multiple choice:** answer the four development questions.
- **Find the bug:** repair the provided frontend, backend, Solidity, Web3, and decoding-related code.
- **Build a UI:** implement the requested chat interface and its basic behavior.

Complete [`AI_USAGE.md`](./part%201/AI_USAGE.md) honestly. AI tools and normal research resources are allowed, but you must understand, verify, and be able to explain everything you submit.

### Getting Started

```bash
git clone https://github.com/Renana-Lab/prog-HomeAssignment.git
cd prog-HomeAssignment
git checkout -b candidate/your-name
```

Read each task file fully before editing the project. Keep your work on your own branch and do not commit directly to `main`.

For the broken application:

```bash
cd "part 1/part-2-save-the-lab"
npm install
npm run typecheck
```

Additional run commands are available in the project's `package.json`.

### What To Submit

Your branch should contain:

- Your multiple-choice answers in a clearly named Markdown file inside `part 1`.
- Your code changes for the bug-fixing task. A separate explanation file is not required for this part.
- Your chat UI implementation in a clearly named folder inside `part 1`.
- A completed `AI_USAGE.md`.
- Any short setup notes needed to run your work.

Commit and push your branch:

```bash
git add .
git commit -m "Complete candidate assignment"
git push -u origin candidate/your-name
```

Send the team the link to your branch. Do not merge it into `main` or modify another candidate's branch.

## Stage 2: Architecture Blueprint And Frontal Presentation

The follow-up task is located in [`part 2 - frontal assignment`](./part%202%20-%20frontal%20assignment/Architecrture%20Blueprint.md).

Prepare an architecture blueprint for the BVEP2 interactive chat capability described in that file. This is a design task; no implementation is required.

Your blueprint should be clear enough to communicate the system components, WebSocket communication, message flow, session handling, security decisions, failure behavior, and scaling approach. You may use diagrams with brief supporting notes and should state any assumptions you make.

**You will present this blueprint yourself during the following in-person interview.** Be prepared to walk the interviewers through the design, explain your decisions, discuss tradeoffs, and answer follow-up questions. The presentation is part of the evaluation, so submit only a design you understand and can defend.

## General Expectations

- Prefer focused, reliable changes over a full rewrite.
- Do not remove requirements or bypass broken behavior instead of fixing it.
- Keep the repository free of secrets, wallet private keys, generated dependency folders, and unrelated files.
- Make sure another developer can install and run your submission.
- Be ready to explain your reasoning and demonstrate your work.

Good luck.

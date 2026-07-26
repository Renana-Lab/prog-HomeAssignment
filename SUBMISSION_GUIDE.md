# Submission Guide

Submit your work by pushing your own branch to this repository.

Recommended time: 4-6 hours.

## 1. Clone

```bash
git clone https://github.com/Renana-Lab/prog-HomeAssignment.git
cd prog-HomeAssignment
```

## 2. Create A Branch

Use your name in the branch:

```bash
git checkout -b candidate/your-name
```

Do not work directly on `main`.

## 3. Answer Part 1

Read:

```text
PART_1_MULTIPLE_CHOICE.md
```

Create:

```text
PART_1_ANSWERS.md
```

Write your selected answer for each question. A short explanation is welcome.

## 4. Complete Part 2

Read:

```text
PART_2_FIND_THE_BUG.md
```

Work inside:

```text
part-2-save-the-lab
```

You may use these commands:

```bash
cd part-2-save-the-lab
npm install
npm run backend
npm run frontend
npm run typecheck
```

## 5. Complete Part 3

Read:

```text
PART_3_BUILD_UI.md
```

Create your UI in:

```text
part-3-chat-ui
```

Include a short README inside that folder explaining how to run it.

## 6. AI Usage

Fill out:

```text
AI_USAGE.md
```

Fill it out even if you did not use AI.

## 7. Push Your Branch

From the repo root:

```bash
git status
git add .
git commit -m "Complete home assignment"
git push -u origin candidate/your-name
```

Send us your branch name when you are done.

## Final Checklist

Your branch should include:

- `PART_1_ANSWERS.md`
- Your Part 2 code changes
- `part-3-chat-ui`
- Completed `AI_USAGE.md`

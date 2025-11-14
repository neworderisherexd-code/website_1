# Backend (Static Data Folder)

This folder simulates a simple backend setup for the **teacher portfolio site**.

It contains:
- `data/papers.json` — A JSON file acting as a mock database for research papers.
- `papers/` — A directory to store uploaded or static PDF files of research papers.

## How it works
The frontend (`research.html` + `js/research.js`) loads data from `papers.json`
and displays each paper dynamically with title, author, year, and an embedded PDF viewer.

Future versions can connect this folder to:
- Firebase Storage / Firestore
- Supabase (Postgres + File API)
- Express.js backend API

For now, everything works client-side using `fetch()` from JSON.

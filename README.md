# Forensic Lab Hub

A beginner-friendly forensic science learning website built with HTML, CSS, JavaScript and Node.js/Express.

## Features

- Responsive frontend with About, Disciplines, Case Studies and Quiz sections.
- Backend REST API for forensic disciplines, fictional case studies and quiz questions.
- Quiz submission endpoint that checks answers and returns a score.
- Health-check endpoint for deployment testing.

## Tech stack

- HTML, CSS and vanilla JavaScript
- Node.js and Express
- Helmet and CORS middleware

## Project structure

```text
forensic-lab-hub/
├── data/
│   └── content.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Run locally

1. Install Node.js 18 or later.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check whether the server is running |
| GET | `/api/disciplines` | Get all forensic disciplines |
| GET | `/api/disciplines/:id` | Get one discipline |
| GET | `/api/cases` | Get fictional case studies |
| GET | `/api/quiz` | Get quiz questions without answers |
| POST | `/api/quiz/submit` | Submit answers and receive a score |

### Quiz submission example

```json
{
  "answers": [
    { "questionId": 1, "selectedOption": 1 },
    { "questionId": 2, "selectedOption": 0 }
  ]
}
```

## Deployment

The project can be deployed as a Node.js web service on Render.

- Build command: `npm install`
- Start command: `npm start`

The Express server serves the frontend from the `public` folder and the API from `/api`.

## Educational note

The case studies are fictional and intended for learning. The website is an educational project and does not provide professional forensic conclusions.

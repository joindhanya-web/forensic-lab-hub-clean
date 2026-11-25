require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const { disciplines, cases, questions } = require("./data/content");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Forensic Lab Hub API",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/disciplines", (_req, res) => {
  res.json({ count: disciplines.length, data: disciplines });
});

app.get("/api/disciplines/:id", (req, res) => {
  const item = disciplines.find((entry) => entry.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Discipline not found." });
  res.json(item);
});

app.get("/api/cases", (_req, res) => {
  res.json({ count: cases.length, data: cases });
});

app.get("/api/quiz", (_req, res) => {
  const safeQuestions = questions.map(({ answer, explanation, ...question }) => question);
  res.json({ count: safeQuestions.length, data: safeQuestions });
});

app.post("/api/quiz/submit", (req, res) => {
  const answers = req.body && req.body.answers;
  if (!Array.isArray(answers)) {
    return res.status(400).json({
      error: "Send an answers array: [{ questionId, selectedOption }]."
    });
  }

  const results = answers.map((entry) => {
    const question = questions.find((item) => item.id === Number(entry.questionId));
    if (!question) {
      return {
        questionId: entry.questionId,
        correct: false,
        explanation: "Question not found."
      };
    }

    const selectedOption = Number(entry.selectedOption);
    return {
      questionId: question.id,
      correct: Number.isInteger(selectedOption) && selectedOption === question.answer,
      correctOption: question.answer,
      explanation: question.explanation
    };
  });

  const score = results.filter((result) => result.correct).length;
  res.json({
    score,
    total: results.length,
    percentage: results.length ? Math.round((score / results.length) * 100) : 0,
    results
  });
});

app.use("/api", (_req, res) => {
  res.status(404).json({ error: "API route not found." });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong on the server." });
});

app.listen(PORT, () => {
  console.log(`Forensic Lab Hub running on port ${PORT}`);
});

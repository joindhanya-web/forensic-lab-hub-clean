const API = "/api";

async function getJSON(path) {
  const response = await fetch(`${API}${path}`);
  if (!response.ok) throw new Error(`Request failed (${response.status})`);
  return response.json();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showLoadError(containerId, message) {
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = `<p class="loading">${message}</p>`;
}

async function loadDisciplines() {
  const container = document.getElementById("discipline-grid");
  try {
    const payload = await getJSON("/disciplines");
    container.innerHTML = payload.data.map((item) => `
      <article class="card">
        <div class="icon" aria-hidden="true">${item.icon}</div>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.summary)}</p>
        <details><summary>Learn more</summary><p>${escapeHTML(item.detail)}</p></details>
      </article>
    `).join("");
  } catch {
    showLoadError("discipline-grid", "Unable to load disciplines. Please refresh the page.");
  }
}

async function loadCases() {
  const container = document.getElementById("case-list");
  try {
    const payload = await getJSON("/cases");
    container.innerHTML = payload.data.map((item) => `
      <article class="case">
        <span class="field">${escapeHTML(item.field)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      </article>
    `).join("");
  } catch {
    showLoadError("case-list", "Unable to load case studies. Please refresh the page.");
  }
}

let quizQuestions = [];

async function loadQuiz() {
  const container = document.getElementById("quiz-questions");
  try {
    const payload = await getJSON("/quiz");
    quizQuestions = payload.data;
    document.getElementById("quiz-progress").textContent = `${quizQuestions.length} QUESTIONS`;
    container.innerHTML = quizQuestions.map((question, index) => `
      <fieldset class="question">
        <legend><h3>${index + 1}. ${escapeHTML(question.question)}</h3></legend>
        ${question.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="question-${question.id}" value="${optionIndex}" required>
            <span>${escapeHTML(option)}</span>
          </label>
        `).join("")}
      </fieldset>
    `).join("");
  } catch {
    showLoadError("quiz-questions", "Unable to load the quiz. Please refresh the page.");
  }
}

document.getElementById("quiz-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const answers = quizQuestions.map((question) => {
    const selected = document.querySelector(`input[name="question-${question.id}"]:checked`);
    return {
      questionId: question.id,
      selectedOption: selected ? Number(selected.value) : -1
    };
  });

  const resultBox = document.getElementById("quiz-result");
  try {
    const response = await fetch(`${API}/quiz/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Quiz submission failed.");
    resultBox.textContent = `Your score: ${result.score}/${result.total} (${result.percentage}%). ${
      result.percentage === 100 ? "Excellent work!" : "Keep learning and try again!"
    }`;
  } catch (error) {
    resultBox.textContent = error.message || "Unable to submit your answers. Please try again.";
  }
});

Promise.all([loadDisciplines(), loadCases(), loadQuiz()]);

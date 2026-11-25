document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      const target = link.getAttribute("href");

      if (target && target.startsWith("#")) {
        const section = document.querySelector(target);
        if (section) {
          event.preventDefault();
          section.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

  async function loadData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to load data");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  loadData("/api/health").then(data => {
    if (data) console.log("Forensic Lab Hub is running:", data);
  });

  loadData("/api/disciplines").then(data => {
    if (data) console.log("Disciplines loaded:", data);
  });

  loadData("/api/cases").then(data => {
    if (data) console.log("Cases loaded:", data);
  });

  loadData("/api/quiz").then(data => {
    if (data) console.log("Quiz loaded:", data);
  });

  console.log("Forensic Lab Hub initialized successfully!");
});

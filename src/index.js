function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-content-id]");
  elements.forEach((el) => {
    const contentId = el.getAttribute("data-content-id");
    if (content[contentId] && content[contentId][lang]) {
      el.innerHTML = content[contentId][lang]; // Utiliser innerHTML pour le HTML
    }
  });
}

const skills = [
  "Javascript",
  "React.js",
  "TailwindCSS",
  "Node.js",
  "Python",
  "Django",
  "Django REST Framework",
  "SQL",
  "PostgreSQL",
  "NoSQL",
  "MongoDB",
];

function displaySkills() {
  const skillsContainer = document.getElementById("skills-container");

  // Trier les compétences par ordre alphabétique
  const sortedSkills = skills.sort();

  sortedSkills.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className =
      "bg-[var(--color-primary)] text-white py-1 px-3 rounded-full text-sm m-1"; // Ajustez les classes selon vos besoins
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
  });
}

document.addEventListener("DOMContentLoaded", displaySkills);

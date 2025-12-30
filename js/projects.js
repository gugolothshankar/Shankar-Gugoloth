// Data-driven projects renderer.
// Edit the `projects` array to add/update your projects.

const projects = [
  {
    title: "Project Alpha",
    description: "A short description of Project Alpha (what it does). Built with React and Node.",
    tech: ["React", "Node", "Postgres"],
    repo: "https://github.com/gugolothshankar/project-alpha",
    demo: "https://project-alpha.example.com",
    image: "images/project-alpha.png" // optional
  },
  {
    title: "Project Beta",
    description: "A web tool for X; includes Y features. Built with Next.js and Vercel.",
    tech: ["Next.js", "TypeScript"],
    repo: "https://github.com/gugolothshankar/project-beta",
    demo: "https://project-beta.example.com",
    image: "images/project-beta.png"
  },
  {
    title: "Project Gamma",
    description: "CLI utility for Z. Lightweight and easy to use.",
    tech: ["Node", "CLI"],
    repo: "https://github.com/gugolothshankar/project-gamma",
    demo: "",
    image: ""
  }
];

function makeCard(p) {
  const imageHtml = p.image
    ? `<img class="project-thumb" src="${p.image}" alt="${p.title} screenshot">`
    : '';
  const techHtml = (p.tech || []).map(t => `<span class="tag">${t}</span>`).join(' ');
  const demoLink = p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : '';
  const repoLink = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Code</a>` : '';
  return `
    <article class="card project-card">
      ${imageHtml}
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p class="project-tech">${techHtml}</p>
      <p class="project-links">${demoLink} ${repoLink}</p>
    </article>
  `;
}

function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;
  container.innerHTML = projects.map(makeCard).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);

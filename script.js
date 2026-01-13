
// Projects Data
const projects = [
  {
    title: "Fitness Hero",
    description: "A full-stack fitness platform with authentication, memberships, user profiles, and workout tracking.",
    link: "https://fitness-hero-gym.vercel.app/",
    thumbnail: "thumbnail.png",
  },
  {
    title: "Workflow Dashboard",
    description: "A modern workflow management dashboard with task tracking, analytics, and role-based access.",
    link: "https://workflow-dashboard-one.vercel.app/",
    thumbnail: "thumbnail2.png",
  },
  {
    title: "HunterFit",
    description: "A clean and responsive fitness tracking web app focused on habit building and progress visualization.",
    link: "https://hunter-s-ascent.vercel.app/",
    thumbnail: "thumbnail3.png",
  }
];

// Experience Data
const experiences = [
  {
    company: "AB InBev",
    role: "Full Stack Developer",
    duration: "July 2025 – Present",
    location: "Hybrid",
    description: "Built and maintained web applications integrated with REST APIs, implementing JWT authentication, secure routing, and efficient async data handling while collaborating in Agile teams."
  },
  {
    company: "Cloudies",
    role: "Front End Developer Intern",
    duration: "May 2025 – July 2025",
    location: "Remote",
    description: "Implemented responsive UI components, optimized loading performance, and collaborated with designers to deliver pixel-perfect interfaces using modern frontend best practices."
  }
];

// Render Projects
const projectsContainer = document.getElementById('projects-container');
if (projectsContainer) {
  projectsContainer.innerHTML = projects.map(project => `
    <div class="project-card">
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
      <h3>${project.title}</h3>
      <div class="project-overlay">
        <p class="project-desc">${project.description}</p>
        <a href="${project.link}" target="_blank" class="live-btn">View Live</a>
      </div>
    </div>
  `).join('');
}

// Render Experience
const experienceContainer = document.getElementById('experience-container');
if (experienceContainer) {
  experienceContainer.innerHTML = experiences.map(exp => `
    <div class="experience-item">
      <div class="experience-marker"></div>
      <div class="experience-content">
        <div class="experience-header">
          <h3>${exp.role}</h3>
          <span class="experience-company">${exp.company}</span>
        </div>
        <div class="experience-meta">
          <span>${exp.duration}</span>
          <span class="divider">•</span>
          <span>${exp.location}</span>
        </div>
        <p class="experience-description">${exp.description}</p>
      </div>
    </div>
  `).join('');
}


function typeWriter() {
  if (charIndex < taglineText.length) {
    taglineElement.textContent += taglineText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    // Remove cursor after typing completes
    setTimeout(() => {
      const style = document.createElement('style');
      style.textContent = '#typewriter-tagline::after { display: none; }';
      document.head.appendChild(style);
    }, 800);
  }
}

// Start typing on load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeWriter, 500); // Slight delay for smoother feel
});

// Reveal sections on scroll
const revealElements = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll spy for active nav item
const sections = document.querySelectorAll('section');
const navLinkMap = {};
navLinks.forEach(link => {
  const id = link.getAttribute('href').replace('#', '');
  navLinkMap[id] = link;
});

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = navLinkMap[id];
    if (!link) return;
    if (entry.isIntersecting) {
      Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 });

sections.forEach(section => activeObserver.observe(section));

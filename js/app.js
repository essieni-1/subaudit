// =====================
// PHONE MOCKUP
// =====================
const subs = [
  { name: "Adobe CC",  emoji: "🎨", price: "$54.99", usage: "low",    pill: "Rarely used" },
  { name: "Hulu",      emoji: "📺", price: "$17.99", usage: "low",    pill: "Rarely used" },
  { name: "Spotify",   emoji: "🎵", price: "$11.99", usage: "high",   pill: "Used often"  },
  { name: "Dropbox",   emoji: "📦", price: "$9.99",  usage: "medium", pill: "Sometimes"   },
  { name: "Netflix",   emoji: "🎬", price: "$22.99", usage: "medium", pill: "Sometimes"   },
  { name: "LinkedIn",  emoji: "💼", price: "$39.99", usage: "low",    pill: "Rarely used" },
];

const pillClass = { low: "pill-red", medium: "pill-yellow", high: "pill-green" };
const statColor  = { low: "var(--red)", medium: "var(--text)", high: "var(--green)" };

function buildPhoneScreen() {
  const screen = document.getElementById("phone-screen");
  if (!screen) return;

  screen.innerHTML = `
    <div class="ps-header">
      <div class="ps-label">Your subscriptions</div>
      <div class="ps-amount">$171.92<span>/mo</span></div>
    </div>
    <div class="ps-waste">⚠️ You may be wasting <strong>$112.97/mo</strong> on low-usage services</div>
    <div class="ps-grid">
      <div class="ps-stat"><div class="ps-stat-v" style="color:var(--lime)">6</div><div class="ps-stat-l">Active subs</div></div>
      <div class="ps-stat"><div class="ps-stat-v" style="color:var(--red)">3</div><div class="ps-stat-l">Low usage</div></div>
      <div class="ps-stat"><div class="ps-stat-v">$2,063</div><div class="ps-stat-l">Per year</div></div>
    </div>
    ${subs.map(s => `
      <div class="ps-row">
        <span class="ps-emoji">${s.emoji}</span>
        <span class="ps-name">${s.name}</span>
        <span class="ps-pill ${pillClass[s.usage]}">${s.pill}</span>
        <span class="ps-price" style="color:${statColor[s.usage]}">${s.price}</span>
      </div>
    `).join("")}
  `;
}

// =====================
// SCROLL ANIMATIONS
// =====================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.12 });

  const targets = document.querySelectorAll(
    ".step, .feature-card, .pricing-card, .section-title, .section-label"
  );
  targets.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`;
    observer.observe(el);
  });
}

// =====================
// WAITLIST FORM
// =====================
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;

  fetch(form.action, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ email })
  })
  .then(res => {
    if (res.ok) {
      form.style.display = "none";
      document.getElementById("success-msg").style.display = "block";
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(() => alert("Network error. Please try again."));
}

// =====================
// SMOOTH NAV LINKS
// =====================
function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// =====================
// NAV SCROLL EFFECT
// =====================
function initNavScroll() {
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.style.borderBottomColor = "#1E1E2A";
    } else {
      nav.style.borderBottomColor = "#1E1E2A";
    }
  });
}

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  buildPhoneScreen();
  initScrollAnimations();
  initNav();
  initNavScroll();
});

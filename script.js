const message = [
  "Hi! I’m interested in comparing Bangkok longevity assessment programmes.",
  "",
  "My main goal is:",
  "My approximate budget is:",
  "My preferred travel timing is:"
].join("\n");

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-cta").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${link.textContent.trim()} (opens WhatsApp)`);
});

document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

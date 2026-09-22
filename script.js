const whatsappNumber = "6592321024";

const message = [
  "Hi Clinic Magnet! I'd like help comparing Bangkok longevity assessments. Let's start.",
].join("\n");

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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

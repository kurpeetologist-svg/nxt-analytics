const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.kpi, .panel, .recommend-grid article, .insight-banner').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:none!important}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}.kpi,.panel,.recommend-grid article,.insight-banner{opacity:1!important;transform:none!important;transition:none!important}}';
document.head.appendChild(style);

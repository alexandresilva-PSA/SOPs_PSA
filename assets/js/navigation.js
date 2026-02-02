/**
 * PSA Manuais - Navigation Module
 * Funções de navegação e sidebar
 */

// Toggle sidebar visibility
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

// Toggle nav group collapse/expand
function toggleNavGroup(header) {
    header.parentElement.classList.toggle('collapsed');
}

// Intersection Observer for scroll highlighting
function initScrollHighlight() {
    const sections = document.querySelectorAll('.secao');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    initScrollHighlight();
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Constants
const API_SIMULATION_DELAY = 1500; // ms

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 12, 0.95)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 12, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// CTA Form Submission
const ctaButton = document.getElementById('ctaButton');
const emailInput = document.getElementById('emailInput');

if (ctaButton && emailInput) {
    ctaButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) {
            showMessage('Por favor, insira seu e-mail', 'error');
            emailInput.focus();
            return;
        }
        if (!isValidEmail(email)) {
            showMessage('Por favor, insira um e-mail válido', 'error');
            emailInput.focus();
            return;
        }
        ctaButton.classList.add('loading');
        ctaButton.disabled = true;
        const originalText = ctaButton.innerHTML;
        ctaButton.innerHTML = '<span>Enviando...</span>';
        try {
            await window.sendEmail(email);
            ctaButton.classList.remove('loading');
            ctaButton.disabled = false;
            ctaButton.innerHTML = originalText;
            emailInput.value = '';
            showMessage('Inscrição enviada! Você receberá novidades por e-mail.', 'success');
        } catch (err) {
            ctaButton.classList.remove('loading');
            ctaButton.disabled = false;
            ctaButton.innerHTML = originalText;
            showMessage('Erro ao enviar inscrição. Tente novamente mais tarde.', 'error');
        }
    });
    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            ctaButton.click();
        }
    });
}

// Show Message Function
function showMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = 'success-message';
    messageEl.textContent = message;
    
    if (type === 'error') {
        messageEl.style.background = 'linear-gradient(135deg, #FF004D, #8A00FF)';
    }
    
    document.body.appendChild(messageEl);
    
    // Remove after 4 seconds
    setTimeout(() => {
        messageEl.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 4000);
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-card, .course-card, .testimonial-card, .syllabus-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Dynamic Stats Counter
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 10000) {
        return (num / 1000).toFixed(0) + 'k+';
    }
    return num + '+';
}

// Animate stats when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                let target = 0;
                
                if (text.includes('k')) {
                    target = parseInt(text.replace('k+', '')) * 1000;
                } else if (text.includes('%')) {
                    target = parseInt(text.replace('%', ''));
                } else {
                    target = parseInt(text.replace('+', ''));
                }
                
                setTimeout(() => {
                    if (text.includes('%')) {
                        animatePercentage(stat, target);
                    } else {
                        animateCounter(stat, target);
                    }
                }, index * 200);
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

function animatePercentage(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '%';
        }
    }, 16);
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Parallax Effect for Hero Orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Prevent default form submission for demo
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

// Course card hover effect
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
        rippleElement.remove();
    }
    
    button.appendChild(ripple);
}

document.querySelectorAll('.btn, .course-btn, .nav-cta, .cta-button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Console message for developers
console.log('%c🚀 NovaTech Instituto de Tecnologia', 'font-size: 24px; font-weight: bold; color: #FF004D;');
console.log('%cCurioso? Junte-se a nós e aprenda a construir sites incríveis!', 'font-size: 14px; color: #8A00FF;');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Log page load time
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
        const loadTime = perfData.domContentLoadedEventEnd - perfData.fetchStart;
        console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);
    }
});

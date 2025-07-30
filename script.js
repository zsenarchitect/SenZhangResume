// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Observe education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        observer.observe(card);
    });

    // Observe publication cards
    const publicationCards = document.querySelectorAll('.publication-card');
    publicationCards.forEach(card => {
        observer.observe(card);
    });

    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        observer.observe(item);
    });

    // Observe contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        observer.observe(item);
    });

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        observer.observe(category);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Download resume button
    const downloadBtn = document.querySelector('.btn-secondary');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('Resume download started...', 'info');
            // Here you would typically trigger an actual download
            // For now, we'll just show a notification
        });
    }

    // Add parallax effect to grid background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const gridLines = document.querySelector('.grid-lines');
        if (gridLines) {
            gridLines.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
        }
    });

    // Add typing effect to hero title
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add hover effects to floating elements
    const floatingElements = document.querySelectorAll('.element');
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.1) rotate(10deg)';
            element.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
            element.style.boxShadow = '';
        });
    });

    // Add counter animation to stats
    const stats = document.querySelectorAll('.stat-number');
    const animateCounters = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + '+';
            }, 16);
        });
    };

    // Trigger counter animation when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
});

// Portfolio Layout Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Download button functionality
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            showNotification('Resume download started!', 'success');
            // Simulate download delay
            setTimeout(() => {
                showNotification('Resume downloaded successfully!', 'success');
            }, 2000);
        });
    }

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-links .social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Grid section interactions
    const gridSections = document.querySelectorAll('.grid-section');
    gridSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.zIndex = '10';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });

    // Tab switching in portfolio section
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Device mockup hover effects
    const deviceMockups = document.querySelectorAll('.device-mockup');
    deviceMockups.forEach(mockup => {
        mockup.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
        });
        
        mockup.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        });
    });

    // Decorative elements animations
    const decorativeElements = document.querySelectorAll('.airpods, .model-airplane, .tablet-mockup, .coffee-mug');
    decorativeElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Phone mockup interactions
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        phoneMockup.addEventListener('click', function() {
            showNotification('Opening Boutiques app...', 'info');
        });
    }

    // Product item interactions
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('h4').textContent;
            showNotification(`Viewing ${productName}`, 'info');
        });
    });

    // Product row interactions
    const productRows = document.querySelectorAll('.product-row');
    productRows.forEach(row => {
        row.addEventListener('click', function() {
            const productName = this.querySelector('span:first-child').textContent;
            showNotification(`Adding ${productName} to cart`, 'success');
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #00d4ff, #0099cc)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #ff4757, #ff3742)';
            break;
        case 'info':
        default:
            notification.style.background = 'linear-gradient(45deg, #3742fa, #2f3542)';
            break;
    }

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add loading animation
window.addEventListener('load', () => {
    // Hide loading screen if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(45deg, #00d4ff, #0099cc);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger next section
            console.log('Swipe up detected');
        } else {
            // Swipe down - could trigger previous section
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-based animations and effects
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler); 
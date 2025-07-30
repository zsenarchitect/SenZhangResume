// Mobile and Cross-Browser Optimized JavaScript
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Performance optimization: Use passive listeners where possible
    const passiveSupported = (() => {
        let passive = false;
        try {
            const options = Object.defineProperty({}, 'passive', {
                get: function() {
                    passive = true;
                    return true;
                }
            });
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        } catch (e) {
            passive = false;
        }
        return passive;
    })();
    
    const eventOptions = passiveSupported ? { passive: true } : false;
    
    // Play button interactions with better touch handling
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlayButtonClick(this);
            }
        });
        
        // Touch and click handling
        if (isMobile) {
            // Mobile: Use touchstart for immediate response
            button.addEventListener('touchstart', function(e) {
                e.preventDefault();
                handlePlayButtonClick(this);
            }, eventOptions);
        } else {
            // Desktop: Use click
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handlePlayButtonClick(this);
            });
        }
        
        // Hover effects (desktop only)
        if (!isMobile) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
    
    function handlePlayButtonClick(button) {
        // Add click animation
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // Add haptic feedback for mobile
        if (isMobile && navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // You can add specific functionality for each play button here
        console.log('Play button clicked');
    }
    
    // Sidebar navigation interactions
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        const handleNavClick = () => {
            // Scroll to corresponding section
            const sections = document.querySelectorAll('.content-section');
            if (sections[index]) {
                sections[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };
        
        if (isMobile) {
            item.addEventListener('touchstart', handleNavClick, eventOptions);
        } else {
            item.addEventListener('click', handleNavClick);
        }
    });
    
    // Intersection Observer for animations with better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Header scroll effect with throttling
    let lastScrollTop = 0;
    let ticking = false;
    const header = document.querySelector('.header');
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, eventOptions);
    
    // Add smooth transition to header
    header.style.transition = 'transform 0.3s ease';
    
    // Keyboard navigation with better accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const currentSection = document.querySelector('.content-section[style*="opacity: 1"]');
            const sections = Array.from(document.querySelectorAll('.content-section'));
            
            if (currentSection) {
                const currentIndex = sections.indexOf(currentSection);
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = Math.min(currentIndex + 1, sections.length - 1);
                } else {
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                sections[nextIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Enhanced touch support for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartTime = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
        touchStartTime = Date.now();
    }, eventOptions);
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        const touchDuration = Date.now() - touchStartTime;
        
        // Only handle swipes that are quick and have sufficient distance
        if (touchDuration < 300) {
            handleSwipe();
        }
    }, eventOptions);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            const sections = Array.from(document.querySelectorAll('.content-section'));
            const currentSection = document.querySelector('.content-section[style*="opacity: 1"]');
            
            if (currentSection) {
                const currentIndex = sections.indexOf(currentSection);
                let nextIndex;
                
                if (diff > 0) {
                    // Swipe up
                    nextIndex = Math.min(currentIndex + 1, sections.length - 1);
                } else {
                    // Swipe down
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                sections[nextIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
    
    // Footer link interactions with better mobile support
    const footerLinks = document.querySelectorAll('.footer-link');
    
    footerLinks.forEach(link => {
        const handleFooterClick = function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                // Add download functionality for CV
                if (this.textContent === 'Download CV') {
                    // Create a temporary link to download the resume
                    const downloadLink = document.createElement('a');
                    downloadLink.href = 'Resume.pdf';
                    downloadLink.download = 'Sen_Zhang_Resume.pdf';
                    downloadLink.click();
                    
                    // Add haptic feedback for mobile
                    if (isMobile && navigator.vibrate) {
                        navigator.vibrate(100);
                    }
                }
            }
        };
        
        if (isMobile) {
            link.addEventListener('touchstart', handleFooterClick, eventOptions);
        } else {
            link.addEventListener('click', handleFooterClick);
        }
    });
    
    // Social link interactions
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        const handleSocialClick = function(e) {
            e.preventDefault();
            // Add hover effect
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Add haptic feedback for mobile
            if (isMobile && navigator.vibrate) {
                navigator.vibrate(50);
            }
        };
        
        if (isMobile) {
            link.addEventListener('touchstart', handleSocialClick, eventOptions);
        } else {
            link.addEventListener('click', handleSocialClick);
        }
    });
    
    // Initialize first section as visible
    if (contentSections.length > 0) {
        contentSections[0].style.opacity = '1';
        contentSections[0].style.transform = 'translateY(0)';
    }
    
    // Add loading animation with better performance
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        // Use requestAnimationFrame for smoother animation
        requestAnimationFrame(() => {
            document.body.style.opacity = '1';
        });
    });
    
    // Handle orientation change for mobile
    if (isMobile) {
        window.addEventListener('orientationchange', function() {
            // Small delay to let the orientation change complete
            setTimeout(() => {
                // Recalculate any layout-dependent measurements
                window.scrollTo(0, window.pageYOffset);
            }, 100);
        });
    }
    
    // Prevent zoom on double tap (iOS)
    if (isIOS) {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    // Handle viewport height changes (mobile browsers)
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    // Add CSS custom property for viewport height
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    
    // Performance monitoring (optional)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}); 

let isScrolling = false;
let scrollTimeout;

function toggleSegment(clickedSegment) {
    const allSegments = document.querySelectorAll('.segment');
    const isCurrentlyExpanded = clickedSegment.classList.contains('expanded');
    
    // First, collapse all segments
    allSegments.forEach(segment => {
        segment.classList.remove('expanded');
        segment.classList.add('collapsed');
    });
    
    // If the clicked segment wasn't expanded, expand it
    if (!isCurrentlyExpanded) {
        clickedSegment.classList.remove('collapsed');
        clickedSegment.classList.add('expanded');
    }
}

function getSegmentInView() {
    const segments = document.querySelectorAll('.segment');
    const viewportHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    let maxVisibleArea = 0;
    let mostVisibleSegment = null;
    
    segments.forEach((segment, index) => {
        const rect = segment.getBoundingClientRect();
        const segmentTop = rect.top + scrollTop;
        const segmentBottom = segmentTop + rect.height;
        
        // Calculate visible area of segment
        const visibleTop = Math.max(segmentTop, scrollTop);
        const visibleBottom = Math.min(segmentBottom, scrollTop + viewportHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        
        if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            mostVisibleSegment = segment;
        }
    });
    
    return mostVisibleSegment;
}

function handleScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    
    // Clear existing timeout
    clearTimeout(scrollTimeout);
    
    // Set timeout to handle scroll end
    scrollTimeout = setTimeout(() => {
        const targetSegment = getSegmentInView();
        
        if (targetSegment) {
            const allSegments = document.querySelectorAll('.segment');
            
            // Collapse all segments
            allSegments.forEach(segment => {
                segment.classList.remove('expanded');
                segment.classList.add('collapsed');
            });
            
            // Expand the target segment
            targetSegment.classList.remove('collapsed');
            targetSegment.classList.add('expanded');
        }
        
        isScrolling = false;
    }, 150);
}

// Initialize with first segment expanded
document.addEventListener('DOMContentLoaded', function() {
    const allSegments = document.querySelectorAll('.segment');
    allSegments.forEach((segment, index) => {
        if (index === 0) {
            segment.classList.add('expanded');
        } else {
            segment.classList.add('collapsed');
        }
    });
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(() => {
        const targetSegment = getSegmentInView();
        if (targetSegment && !targetSegment.classList.contains('expanded')) {
            allSegments.forEach(segment => {
                segment.classList.remove('expanded');
                segment.classList.add('collapsed');
            });
            targetSegment.classList.remove('collapsed');
            targetSegment.classList.add('expanded');
        }
    }, 100);
}); 
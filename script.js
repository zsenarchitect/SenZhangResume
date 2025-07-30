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
    const contentSections = document.querySelectorAll('.segment');
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
            const currentSegment = document.querySelector('.segment.segment--expanded');
            const segments = Array.from(document.querySelectorAll('.segment'));
            
            if (currentSegment) {
                const currentIndex = segments.indexOf(currentSegment);
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = Math.min(currentIndex + 1, segments.length - 1);
                } else {
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                // Toggle to the next segment
                toggleSegment(segments[nextIndex]);
                segments[nextIndex].scrollIntoView({
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
            const segments = Array.from(document.querySelectorAll('.segment'));
            const currentSegment = document.querySelector('.segment.segment--expanded');
            
            if (currentSegment) {
                const currentIndex = segments.indexOf(currentSegment);
                let nextIndex;
                
                if (diff > 0) {
                    // Swipe up
                    nextIndex = Math.min(currentIndex + 1, segments.length - 1);
                } else {
                    // Swipe down
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                // Toggle to the next segment
                toggleSegment(segments[nextIndex]);
                segments[nextIndex].scrollIntoView({
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
    
    // Initialize first segment as visible and expanded
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
    const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
    
    // First, collapse all segments
    allSegments.forEach(segment => {
        segment.classList.remove('segment--expanded');
        segment.classList.add('segment--collapsed');
    });
    
    // If the clicked segment wasn't expanded, expand it
    if (!isCurrentlyExpanded) {
        clickedSegment.classList.remove('segment--collapsed');
        clickedSegment.classList.add('segment--expanded');
        
        // Add haptic feedback for mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.vibrate) {
            navigator.vibrate(50);
        }
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
                segment.classList.remove('segment--expanded');
                segment.classList.add('segment--collapsed');
            });
            
            // Expand the target segment
            targetSegment.classList.remove('segment--collapsed');
            targetSegment.classList.add('segment--expanded');
        }
        
        isScrolling = false;
    }, 150);
}

    // Initialize with first segment expanded
    document.addEventListener('DOMContentLoaded', function() {
        const allSegments = document.querySelectorAll('.segment');
        allSegments.forEach((segment, index) => {
            if (index === 0) {
                segment.classList.add('segment--expanded');
            } else {
                segment.classList.add('segment--collapsed');
            }
        });
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(() => {
        const targetSegment = getSegmentInView();
        if (targetSegment && !targetSegment.classList.contains('segment--expanded')) {
            allSegments.forEach(segment => {
                segment.classList.remove('segment--expanded');
                segment.classList.add('segment--collapsed');
            });
            targetSegment.classList.remove('segment--collapsed');
            targetSegment.classList.add('segment--expanded');
        }
    }, 100);
}); 
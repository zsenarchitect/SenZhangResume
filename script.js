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
    
    // Get all segments
    const allSegments = document.querySelectorAll('.segment');
    
    // Remove no-js class for progressive enhancement
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
    
    // Initialize first segment as expanded
    if (allSegments.length > 0) {
        allSegments.forEach(segment => {
            segment.classList.add('segment--collapsed');
        });
        allSegments[0].classList.add('segment--expanded');
        allSegments[0].classList.remove('segment--collapsed');
        allSegments[0].setAttribute('aria-expanded', 'true');
    }
    
    // Function to expand a specific segment
    function expandSegment(targetSegment) {
        // Collapse all segments first
        allSegments.forEach(segment => {
            segment.classList.remove('segment--expanded');
            segment.classList.add('segment--collapsed');
            segment.setAttribute('aria-expanded', 'false');
        });
        
        // Expand the target segment
        targetSegment.classList.remove('segment--collapsed');
        targetSegment.classList.add('segment--expanded');
        targetSegment.setAttribute('aria-expanded', 'true');
        
        // Focus management for accessibility
        targetSegment.focus();
    }
    
    // Simple scroll handling without auto-expansion
    function handleScroll() {
        // Just track scroll direction for potential future use
        // No auto-expansion to prevent shaking
    }
    
    // Manual toggle function for clicking
    function toggleSegment(clickedSegment) {
        const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
        
        // If clicking on an already expanded segment, keep it expanded
        if (isCurrentlyExpanded) {
            return;
        }
        
        // Otherwise, expand the clicked segment
        expandSegment(clickedSegment);
        
        // Add haptic feedback for mobile
        if (isMobile && navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Add click and keyboard handlers to segments
    allSegments.forEach(segment => {
        segment.addEventListener('click', function() {
            toggleSegment(this);
        });
        
        // Add Enter and Space key support
        segment.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSegment(this);
            }
        });
    });
    
    // Scroll direction detection (simplified)
    let lastScrollY = window.pageYOffset;
    let scrollDirection = 'down';
    
    function handleScrollDirection() {
        const currentScrollY = window.pageYOffset;
        scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const currentSegment = document.querySelector('.segment.segment--expanded');
            
            if (currentSegment) {
                const currentIndex = Array.from(allSegments).indexOf(currentSegment);
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = Math.min(currentIndex + 1, allSegments.length - 1);
                } else {
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                expandSegment(allSegments[nextIndex]);
            }
        }
    });
    
    // Touch/swipe support for mobile (simplified)
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
        
        // Handle swipes for navigation
        if (touchDuration < 300) {
            handleSwipe();
        }
    }, eventOptions);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            const currentSegment = document.querySelector('.segment.segment--expanded');
            
            if (currentSegment) {
                const currentIndex = Array.from(allSegments).indexOf(currentSegment);
                let nextIndex;
                
                if (diff > 0) {
                    // Swipe up
                    nextIndex = Math.min(currentIndex + 1, allSegments.length - 1);
                } else {
                    // Swipe down
                    nextIndex = Math.max(currentIndex - 1, 0);
                }
                
                expandSegment(allSegments[nextIndex]);
            }
        }
    }
    
    // Add scroll listeners (simplified)
    window.addEventListener('scroll', handleScrollDirection, eventOptions);
    
    // Handle orientation change for mobile (simplified)
    if (isMobile) {
        window.addEventListener('orientationchange', function() {
            // Just handle viewport changes, no auto-expansion
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

// Make toggleSegment function globally available
function toggleSegment(clickedSegment) {
    const allSegments = document.querySelectorAll('.segment');
    const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
    
    // If clicking on an already expanded segment, keep it expanded
    if (isCurrentlyExpanded) {
        return;
    }
    
    // Collapse all segments first
    allSegments.forEach(segment => {
        segment.classList.remove('segment--expanded');
        segment.classList.add('segment--collapsed');
        segment.setAttribute('aria-expanded', 'false');
    });
    
    // Expand the clicked segment
    clickedSegment.classList.remove('segment--collapsed');
    clickedSegment.classList.add('segment--expanded');
    clickedSegment.setAttribute('aria-expanded', 'true');
    
    // Add haptic feedback for mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.vibrate) {
        navigator.vibrate(50);
    }
} 
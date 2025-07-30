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
    
    // Initialize all segments as collapsed (allow user to choose what to expand)
    if (allSegments.length > 0) {
        allSegments.forEach(segment => {
            segment.classList.add('segment--collapsed');
            segment.classList.remove('segment--expanded');
            segment.setAttribute('aria-expanded', 'false');
        });
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
    
    // Improved scroll detection with different sensitivity for mobile/desktop
    let lastScrollY = window.pageYOffset;
    let scrollDirection = 'down';
    let scrollThreshold = isMobile ? 30 : 50; // More sensitive on mobile
    let scrollTimeout;
    let isScrolling = false;
    
    function handleScroll() {
        const currentScrollY = window.pageYOffset;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Only process if scroll amount exceeds threshold
        if (scrollDelta > scrollThreshold) {
            scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = currentScrollY;
            
            // Clear existing timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Set scrolling state
            isScrolling = true;
            
            // Auto-expand based on scroll position (with delay to prevent rapid changes)
            scrollTimeout = setTimeout(() => {
                autoExpandOnScroll(currentScrollY);
                isScrolling = false;
            }, isMobile ? 200 : 300); // Longer delay to allow reading time
        }
    }
    
    // Auto-expand segments based on scroll position
    function autoExpandOnScroll(scrollY) {
        const viewportHeight = window.innerHeight;
        const triggerThreshold = isMobile ? viewportHeight * 0.25 : viewportHeight * 0.1; // 25% on mobile, 10% on desktop
        
        let nextSegment = null;
        let currentExpanded = document.querySelector('.segment.segment--expanded');
        let currentIndex = -1;
        
        // Find current expanded segment index
        if (currentExpanded) {
            currentIndex = Array.from(allSegments).indexOf(currentExpanded);
        }
        
        // Check if we should expand the next segment
        if (currentIndex >= 0 && currentIndex < allSegments.length - 1) {
            const nextSegmentElement = allSegments[currentIndex + 1];
            const nextSegmentRect = nextSegmentElement.getBoundingClientRect();
            
            // Only expand when the next segment's header has passed the threshold
            // Add a small buffer to ensure user has finished reading current content
            if (nextSegmentRect.top <= triggerThreshold && scrollDirection === 'down') {
                nextSegment = nextSegmentElement;
            }
        }
        
        // Check if we should expand the previous segment (when scrolling up)
        if (currentIndex > 0 && !nextSegment) {
            const prevSegmentElement = allSegments[currentIndex - 1];
            const prevSegmentRect = prevSegmentElement.getBoundingClientRect();
            
            // Expand previous segment when scrolling up and it's near the top
            if (prevSegmentRect.bottom >= viewportHeight - triggerThreshold) {
                nextSegment = prevSegmentElement;
            }
        }
        
        // If no segment is currently expanded, don't auto-expand anything
        // Let users manually choose what to expand
        if (currentIndex === -1) {
            return;
        }
        
        // Expand the detected segment if it's different from current
        if (nextSegment && nextSegment !== currentExpanded) {
            expandSegment(nextSegment);
        }
    }
    
    // Manual toggle function for clicking
    function toggleSegment(clickedSegment) {
        const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
        
        // If clicking on an already expanded segment, collapse it
        if (isCurrentlyExpanded) {
            clickedSegment.classList.remove('segment--expanded');
            clickedSegment.classList.add('segment--collapsed');
            clickedSegment.setAttribute('aria-expanded', 'false');
            
            // Add haptic feedback for mobile
            if (isMobile && navigator.vibrate) {
                navigator.vibrate(50);
            }
            return;
        }
        
        // Otherwise, expand the clicked segment (collapse others first)
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
    
    // Touch/swipe support for mobile (improved sensitivity)
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
        
        // Handle swipes for navigation (more sensitive on mobile)
        if (touchDuration < 400) { // Increased duration threshold
            handleSwipe();
        }
    }, eventOptions);
    
    function handleSwipe() {
        const swipeThreshold = isMobile ? 30 : 50; // More sensitive on mobile
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
    
    // Add scroll listeners with throttling
    let ticking = false;
    function updateOnScroll() {
        handleScroll();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }, eventOptions);
    
    // Handle orientation change for mobile
    if (isMobile) {
        window.addEventListener('orientationchange', function() {
            // Adjust scroll threshold for new orientation
            setTimeout(() => {
                scrollThreshold = isMobile ? 30 : 50;
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

// Make toggleSegment function globally available
function toggleSegment(clickedSegment) {
    const allSegments = document.querySelectorAll('.segment');
    const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
    
    // If clicking on an already expanded segment, collapse it
    if (isCurrentlyExpanded) {
        clickedSegment.classList.remove('segment--expanded');
        clickedSegment.classList.add('segment--collapsed');
        clickedSegment.setAttribute('aria-expanded', 'false');
        
        // Add haptic feedback for mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.vibrate) {
            navigator.vibrate(50);
        }
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
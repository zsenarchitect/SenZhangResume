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
    
    // Intersection Observer for auto-expanding segments
    const segmentObserverOptions = {
        threshold: 0.3, // Trigger when 30% of segment is visible
        rootMargin: '-10% 0px -10% 0px' // Trigger slightly before segment is fully in view
    };
    
    const segmentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const segment = entry.target;
                expandSegment(segment);
            }
        });
    }, segmentObserverOptions);
    
    // Observe all segments for auto-expansion
    const allSegments = document.querySelectorAll('.segment');
    allSegments.forEach(segment => {
        segmentObserver.observe(segment);
    });
    
    // Function to expand a specific segment
    function expandSegment(targetSegment) {
        // Collapse all segments first
        allSegments.forEach(segment => {
            segment.classList.remove('segment--expanded');
            segment.classList.add('segment--collapsed');
        });
        
        // Expand the target segment
        targetSegment.classList.remove('segment--collapsed');
        targetSegment.classList.add('segment--expanded');
        
        // Smooth scroll to ensure the segment is fully visible
        setTimeout(() => {
            const rect = targetSegment.getBoundingClientRect();
            const headerHeight = 80; // Approximate header height
            
            // If segment is not fully visible, scroll to it
            if (rect.top < headerHeight || rect.bottom > window.innerHeight) {
                targetSegment.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    }
    
    // Enhanced scroll handling for better segment visibility
    let isScrolling = false;
    let scrollTimeout;
    
    function handleScroll() {
        if (isScrolling) return;
        
        isScrolling = true;
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const mostVisibleSegment = getMostVisibleSegment();
            
            if (mostVisibleSegment) {
                expandSegment(mostVisibleSegment);
            }
            
            isScrolling = false;
        }, 150);
    }
    
    // Function to find the most visible segment
    function getMostVisibleSegment() {
        const viewportHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        let maxVisibleArea = 0;
        let mostVisibleSegment = null;
        
        allSegments.forEach(segment => {
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
    
    // Add click handlers to segments
    allSegments.forEach(segment => {
        segment.addEventListener('click', function() {
            toggleSegment(this);
        });
    });
    
    // Scroll direction detection for enhanced navigation
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
    
    // Touch/swipe support for mobile
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
    
    // Initialize with first segment expanded
    if (allSegments.length > 0) {
        expandSegment(allSegments[0]);
    }
    
    // Add scroll listeners
    window.addEventListener('scroll', handleScroll, eventOptions);
    window.addEventListener('scroll', handleScrollDirection, eventOptions);
    
    // Handle orientation change for mobile
    if (isMobile) {
        window.addEventListener('orientationchange', function() {
            setTimeout(() => {
                const mostVisibleSegment = getMostVisibleSegment();
                if (mostVisibleSegment) {
                    expandSegment(mostVisibleSegment);
                }
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
    
    // If clicking on an already expanded segment, keep it expanded
    if (isCurrentlyExpanded) {
        return;
    }
    
    // Collapse all segments first
    allSegments.forEach(segment => {
        segment.classList.remove('segment--expanded');
        segment.classList.add('segment--collapsed');
    });
    
    // Expand the clicked segment
    clickedSegment.classList.remove('segment--collapsed');
    clickedSegment.classList.add('segment--expanded');
    
    // Smooth scroll to ensure the segment is fully visible
    setTimeout(() => {
        const rect = clickedSegment.getBoundingClientRect();
        const headerHeight = 80;
        
        if (rect.top < headerHeight || rect.bottom > window.innerHeight) {
            clickedSegment.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
    
    // Add haptic feedback for mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && navigator.vibrate) {
        navigator.vibrate(50);
    }
} 
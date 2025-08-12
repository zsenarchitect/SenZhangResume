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
        
        // Scroll to ensure segment top is visible with proper header offset
        const headerHeight = 160; // Height of the fixed header
        const segmentTop = targetSegment.offsetTop;
        const viewportHeight = window.innerHeight;
        const segmentHeight = targetSegment.scrollHeight;
        
        // Calculate the ideal scroll position to show segment top below header
        let scrollPosition = segmentTop - headerHeight;
        
        // If the segment is longer than viewport, prioritize showing the top part
        if (segmentHeight > viewportHeight - headerHeight) {
            // Show the top of the segment with header offset
            scrollPosition = segmentTop - headerHeight;
        }
        
        // Ensure we don't scroll to negative positions
        scrollPosition = Math.max(0, scrollPosition);
        
        // Smooth scroll to position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        
        // Focus management for accessibility
        targetSegment.focus();
    }
    
    // Improved scroll detection with different sensitivity for mobile/desktop
    let lastScrollY = window.pageYOffset;
    let scrollDirection = 'down';
    let scrollThreshold = isMobile ? 80 : 120; // Much less sensitive - increased thresholds
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
            
            // Auto-expand based on scroll position (with longer delay to prevent rapid changes)
            scrollTimeout = setTimeout(() => {
                autoExpandOnScroll(currentScrollY);
                isScrolling = false;
            }, isMobile ? 500 : 800); // Much longer delay to allow reading time
        }
    }
    
    // Auto-expand segments based on scroll position
    function autoExpandOnScroll(scrollY) {
        const viewportHeight = window.innerHeight;
        const baseThreshold = isMobile ? viewportHeight * 0.25 : viewportHeight * 0.05; // 25% on mobile, 5% on desktop (less sensitive)
        
        let nextSegment = null;
        let currentExpanded = document.querySelector('.segment.segment--expanded');
        let currentIndex = -1;
        
        // Find current expanded segment index
        if (currentExpanded) {
            currentIndex = Array.from(allSegments).indexOf(currentExpanded);
        }
        
        // Check if we should expand the next segment (scrolling down)
        if (currentIndex >= 0 && currentIndex < allSegments.length - 1) {
            const nextSegmentElement = allSegments[currentIndex + 1];
            const nextSegmentRect = nextSegmentElement.getBoundingClientRect();
            
            // For scrolling down: use lower half detection (100% - baseThreshold)
            const downThreshold = viewportHeight - baseThreshold;
            
            // Only expand when the next segment's header has passed the lower threshold
            if (nextSegmentRect.top <= downThreshold && scrollDirection === 'down') {
                nextSegment = nextSegmentElement;
            }
        }
        
        // Check if we should expand the previous segment (when scrolling up)
        if (currentIndex > 0 && !nextSegment) {
            const prevSegmentElement = allSegments[currentIndex - 1];
            const prevSegmentRect = prevSegmentElement.getBoundingClientRect();
            
            // For scrolling up: use current setting (baseThreshold from top)
            if (prevSegmentRect.bottom >= viewportHeight - baseThreshold) {
                nextSegment = prevSegmentElement;
            }
        }
        
        // Expand the detected segment if it's different from current
        if (nextSegment && nextSegment !== currentExpanded) {
            expandSegment(nextSegment);
        }
    }
    
    // Manual toggle function for clicking
    function toggleSegment(clickedSegment) {
        console.log('toggleSegment called with:', clickedSegment);
        const isCurrentlyExpanded = clickedSegment.classList.contains('segment--expanded');
        console.log('Is currently expanded:', isCurrentlyExpanded);
        
        // If clicking on an already expanded segment, collapse it
        if (isCurrentlyExpanded) {
            console.log('Collapsing segment');
            clickedSegment.classList.remove('segment--expanded');
            clickedSegment.classList.add('segment--collapsed');
            clickedSegment.setAttribute('aria-expanded', 'false');
            
            // Add haptic feedback for mobile
            if (isMobile && navigator.vibrate) {
                navigator.vibrate(50);
            }
            return;
        }
        
        // Otherwise, expand the clicked segment
        console.log('Expanding segment');
        expandSegment(clickedSegment);
        
        // Add haptic feedback for mobile
        if (isMobile && navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    // Add click and keyboard handlers to segment headers only
    let touchTimeout;
    allSegments.forEach(segment => {
        const segmentHeader = segment.querySelector('.segment__header');
        if (!segmentHeader) return;
        
        // Click handler for desktop - only on header
        segmentHeader.addEventListener('click', function(e) {
            console.log('Segment header clicked:', segment);
            e.preventDefault();
            e.stopPropagation();
            toggleSegment(segment);
        });
        
        // Touch handler for mobile - only on header
        segmentHeader.addEventListener('touchstart', function(e) {
            console.log('Segment header touched:', segment);
            e.preventDefault();
            e.stopPropagation();
            
            // Clear any existing timeout
            if (touchTimeout) {
                clearTimeout(touchTimeout);
            }
            
            // Add a small delay to prevent double-tap zoom
            touchTimeout = setTimeout(() => {
                toggleSegment(segment);
            }, 50);
        }, { passive: false });
        
        // Add Enter and Space key support - on segment for accessibility
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
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        // Only handle swipes if not clicking on a segment
        const target = e.target.closest('.segment');
        if (!target) {
            touchStartY = e.changedTouches[0].screenY;
            touchStartX = e.changedTouches[0].screenX;
            touchStartTime = Date.now();
        }
    }, eventOptions);
    
    document.addEventListener('touchend', function(e) {
        // Only handle swipes if not clicking on a segment
        const target = e.target.closest('.segment');
        if (!target) {
            touchEndY = e.changedTouches[0].screenY;
            touchEndX = e.changedTouches[0].screenX;
            const touchDuration = Date.now() - touchStartTime;
            
            // Handle swipes for navigation (more sensitive on mobile)
            if (touchDuration < 400) { // Increased duration threshold
                handleSwipe();
            }
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
    
    // Header fade effect on scroll
    function handleHeaderFade() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        
        const scrollY = window.pageYOffset;
        const fadeStart = isMobile ? 30 : 50; // More sensitive on mobile
        const fadeEnd = isMobile ? 150 : 200; // Shorter fade distance on mobile
        
        if (scrollY <= fadeStart) {
            // At the top - fully visible
            header.style.opacity = '1';
        } else if (scrollY >= fadeEnd) {
            // Past fade end - completely transparent
            header.style.opacity = '0';
        } else {
            // During fade transition - calculate opacity
            const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
            const opacity = 1 - fadeProgress;
            header.style.opacity = opacity.toString();
        }
    }
    
    // Add scroll listener for header fade with mobile-specific handling
    let headerFadeTicking = false;
    function updateHeaderFade() {
        handleHeaderFade();
        headerFadeTicking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!headerFadeTicking) {
            requestAnimationFrame(updateHeaderFade);
            headerFadeTicking = true;
        }
    }, { passive: true });
    
    // Initialize header fade on page load
    handleHeaderFade();
    
    // ==========================================================================
    // CROSS-PLATFORM IMAGE LOADING AND ERROR HANDLING
    // ==========================================================================
    
    // Enhanced image loading with cross-platform support
    function initializeImageLoading() {
        const images = document.querySelectorAll('.work-image');
        
        images.forEach(img => {
            // Add loading state
            img.classList.add('image-loading');
            
            // Create intersection observer for lazy loading
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            loadImage(img);
                            observer.unobserve(img);
                        }
                    });
                }, {
                    rootMargin: '50px 0px',
                    threshold: 0.1
                });
                
                imageObserver.observe(img);
            } else {
                // Fallback for older browsers
                loadImage(img);
            }
        });
    }
    
    // Enhanced image loading function
    function loadImage(img) {
        const src = img.getAttribute('src');
        if (!src) return;
        
        // Create a new image object to test loading
        const testImg = new Image();
        
        testImg.onload = function() {
            img.classList.remove('image-loading');
            img.classList.add('image-loaded');
            
            // Trigger custom event for analytics
            img.dispatchEvent(new CustomEvent('imageLoaded', {
                detail: { src: src, naturalWidth: testImg.naturalWidth, naturalHeight: testImg.naturalHeight }
            }));
        };
        
        testImg.onerror = function() {
            handleImageError(img);
        };
        
        // Set timeout for slow connections
        const timeout = setTimeout(() => {
            if (!img.classList.contains('image-loaded')) {
                handleImageError(img);
            }
        }, 10000); // 10 second timeout
        
        testImg.onload = function() {
            clearTimeout(timeout);
            img.classList.remove('image-loading');
            img.classList.add('image-loaded');
            
            // Trigger custom event for analytics
            img.dispatchEvent(new CustomEvent('imageLoaded', {
                detail: { src: src, naturalWidth: testImg.naturalWidth, naturalHeight: testImg.naturalHeight }
            }));
        };
        
        testImg.src = src;
    }
    
    // Enhanced error handling
    function handleImageError(img) {
        img.classList.remove('image-loading');
        img.classList.add('image-error');
        
        // Hide the image and show placeholder
        img.style.display = 'none';
        const placeholder = img.nextElementSibling;
        if (placeholder && placeholder.classList.contains('work-image-placeholder')) {
            placeholder.style.display = 'flex';
        }
        

        
        // Trigger custom event for analytics
        img.dispatchEvent(new CustomEvent('imageError', {
            detail: { src: img.src }
        }));
    }
    
    // Retry mechanism for failed images
    function retryImageLoad(img, maxRetries = 3) {
        let retryCount = 0;
        
        function attemptRetry() {
            if (retryCount >= maxRetries) {
                handleImageError(img);
                return;
            }
            
            retryCount++;
            
            // Add a small delay before retry
            setTimeout(() => {
                loadImage(img);
            }, 1000 * retryCount); // Exponential backoff
        }
        
        return attemptRetry;
    }
    
    // Handle network status changes
    function handleNetworkChange() {
        if (navigator.onLine) {
            // Retry failed images when back online
            const failedImages = document.querySelectorAll('.image-error');
            failedImages.forEach(img => {
                img.classList.remove('image-error');
                img.classList.add('image-loading');
                img.style.display = 'block';
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('work-image-placeholder')) {
                    placeholder.style.display = 'none';
                }
                loadImage(img);
            });
        }
    }
    
    // Add network event listeners
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', () => {
        console.log('Network connection lost');
    });
    
    // Initialize image loading
    initializeImageLoading();
    
    // ==========================================================================
    // INTERNAL LINK HANDLING
    // ==========================================================================
    
    // Handle internal links to sections
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('internal-link')) {
            e.preventDefault();
            
            const targetId = e.target.getAttribute('href').substring(1); // Remove the #
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Find the parent segment
                const parentSegment = targetElement.closest('.segment');
                
                if (parentSegment) {
                    // Expand the target segment
                    expandSegment(parentSegment);
                    
                    // Add haptic feedback for mobile
                    if (isMobile && navigator.vibrate) {
                        navigator.vibrate(50);
                    }
                }
            }
        }
    });
    
    // ==========================================================================
    // COLOR SHOWCASE HOVER EFFECT
    // ==========================================================================
    
    // Handle color showcase hover effect
    function initializeColorShowcase() {
        const colorShowcases = document.querySelectorAll('.color-showcase');
        
        // Only add hover effects on desktop devices with hover capability
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            colorShowcases.forEach(element => {
                // Mouse enter - change entire website background
                element.addEventListener('mouseenter', function() {
                    document.body.classList.add('website-background-green');
                    document.documentElement.classList.add('website-background-green');
                });
                
                // Mouse leave - restore original background
                element.addEventListener('mouseleave', function() {
                    document.body.classList.remove('website-background-green');
                    document.documentElement.classList.remove('website-background-green');
                });
            });
        }
    }
    
    // Initialize color showcase functionality
    initializeColorShowcase();
    
    // ==========================================================================
    // SIDE NAVIGATION FUNCTIONALITY
    // ==========================================================================
    
    // Initialize side navigation
    function initializeSideNavigation() {
        const sideNav = document.getElementById('sideNavigation');
        if (!sideNav) return;
        
        const navItems = sideNav.querySelectorAll('.side-navigation__item');
        const sections = document.querySelectorAll('.segment');
        
        // Update active navigation item based on current section
        function updateActiveNavItem() {
            const currentExpanded = document.querySelector('.segment.segment--expanded');
            if (!currentExpanded) return;
            
            const currentSectionId = currentExpanded.id;
            
            // Remove active class from all nav items
            navItems.forEach(item => {
                item.classList.remove('side-navigation__item--active');
            });
            
            // Add active class to corresponding nav item
            navItems.forEach(item => {
                const dataSection = item.getAttribute('data-section');
                if (dataSection && currentSectionId.includes(dataSection)) {
                    item.classList.add('side-navigation__item--active');
                }
            });
        }
        
        // Handle navigation item clicks
        navItems.forEach(item => {
            const link = item.querySelector('.side-navigation__link');
            if (!link) return;
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const parentSegment = targetSection.closest('.segment');
                    if (parentSegment) {
                        expandSegment(parentSegment);
                        
                        // Add haptic feedback for mobile
                        if (isMobile && navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                    }
                }
            });
        });
        
        // Update navigation on segment changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    updateActiveNavItem();
                }
            });
        });
        
        // Observe all segments for class changes
        sections.forEach(segment => {
            observer.observe(segment, {
                attributes: true,
                attributeFilter: ['class']
            });
        });
        
        // Initial update
        updateActiveNavItem();
    }
    
    // Initialize side navigation
    initializeSideNavigation();
    
    // ==========================================================================
    // MOBILE NAVIGATION FUNCTIONALITY
    // ==========================================================================
    
    // Initialize mobile navigation
    function initializeMobileNavigation() {
        const mobileNavToggle = document.getElementById('mobileNavToggle');
        const mobileNavClose = document.getElementById('mobileNavClose');
        const mobileNavigation = document.getElementById('mobileNavigation');
        const mobileNavLinks = document.querySelectorAll('.mobile-navigation__link');
        
        if (!mobileNavToggle || !mobileNavigation) return;
        
        // Toggle mobile navigation
        function toggleMobileNav() {
            const isActive = mobileNavigation.classList.contains('active');
            
            if (isActive) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        }
        
        // Open mobile navigation
        function openMobileNav() {
            mobileNavigation.classList.add('active');
            mobileNavToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Add haptic feedback for mobile
            if (isMobile && navigator.vibrate) {
                navigator.vibrate(50);
            }
        }
        
        // Close mobile navigation
        function closeMobileNav() {
            mobileNavigation.classList.remove('active');
            mobileNavToggle.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            
            // Add haptic feedback for mobile
            if (isMobile && navigator.vibrate) {
                navigator.vibrate(50);
            }
        }
        
        // Event listeners
        mobileNavToggle.addEventListener('click', toggleMobileNav);
        mobileNavClose.addEventListener('click', closeMobileNav);
        
        // Close on overlay click
        mobileNavigation.addEventListener('click', function(e) {
            if (e.target === mobileNavigation) {
                closeMobileNav();
            }
        });
        
        // Handle mobile navigation link clicks
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const parentSegment = targetSection.closest('.segment');
                    if (parentSegment) {
                        expandSegment(parentSegment);
                        closeMobileNav(); // Close mobile nav after selection
                        
                        // Add haptic feedback for mobile
                        if (isMobile && navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                    }
                }
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavigation.classList.contains('active')) {
                closeMobileNav();
            }
        });
    }
    
    // Initialize mobile navigation
    initializeMobileNavigation();
    
    // Performance monitoring (optional)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                
                // Monitor image loading performance
                const imageLoadTimes = performance.getEntriesByType('resource')
                    .filter(entry => entry.initiatorType === 'img')
                    .map(entry => ({
                        name: entry.name,
                        duration: entry.duration,
                        transferSize: entry.transferSize
                    }));
                
                console.log('Image loading performance:', imageLoadTimes);
            }, 0);
        });
    }
});

 

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize all modules
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initStatCounters();
    initProgramModals();
    initContactForm();
});
/* =====================================================
   MOBILE MENU
   ===================================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
    const closeIcon = mobileMenuBtn.querySelector('.close-icon');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile, .mobile-cta');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = !mobileNav.classList.contains('hidden');
        
        if (isOpen) {
            // Close menu
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            // Open menu
            mobileNav.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}
/* =====================================================
   STICKY HEADER
   ===================================================== */
function initStickyHeader() {
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    
    // Check scroll position and toggle header style
    function checkScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Initial check
    checkScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);
}
/* =====================================================
   SMOOTH SCROLLING
   ===================================================== */
function initSmoothScroll() {
    // Get all links that start with #
    const smoothLinks = document.querySelectorAll('a[href^="#"], button[data-scroll]');
    
    smoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href') || this.dataset.scroll;
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Calculate offset for fixed header
                    const headerHeight = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll indicator in hero
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
/* =====================================================
   ANIMATED STAT COUNTERS
   ===================================================== */
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    let hasAnimated = false;
    
    // Animate a single counter
    function animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const increment = target / (animationDuration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Check if stats section is in viewport
    function checkStatsVisibility() {
        if (hasAnimated) return;
        
        const statsGrid = document.querySelector('.stats-grid');
        if (!statsGrid) return;
        
        const rect = statsGrid.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start animation when stats grid is 50% visible
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
            hasAnimated = true;
            statNumbers.forEach(stat => animateCounter(stat));
        }
    }
    
    // Check on scroll and initial load
    window.addEventListener('scroll', checkStatsVisibility);
    checkStatsVisibility();
}
/* =====================================================
   PROGRAM MODALS
   ===================================================== */
function initProgramModals() {
    const modal = document.getElementById('programModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const modalCta = modal.querySelector('.modal-cta');
    const programCards = document.querySelectorAll('.program-card');
    
    // Program data
    const programData = {
        strength: {
            icon: 'dumbbell',
            title: 'Strength Training',
            description: 'Our comprehensive strength program focuses on progressive overload and compound movements to build raw power and muscle mass. Work with certified trainers who will guide you through proper form and help you achieve consistent gains.',
            duration: '60-90 min sessions',
            schedule: '4-5 days/week',
            level: 'All Levels'
        },
        fatloss: {
            icon: 'flame',
            title: 'Fat Loss Program',
            description: 'High-intensity metabolic training combined with strategic nutrition guidance to help you shed unwanted fat while preserving lean muscle. Our proven methods deliver sustainable results.',
            duration: '45-60 min sessions',
            schedule: '5-6 days/week',
            level: 'All Levels'
        },
        athlete: {
            icon: 'trophy',
            title: 'Athlete Performance',
            description: 'Sport-specific training designed to enhance your athletic abilities. We focus on speed, power, agility, and sport-specific conditioning to give you the competitive edge.',
            duration: '90-120 min sessions',
            schedule: '4-5 days/week',
            level: 'Intermediate-Advanced'
        },
        beginner: {
            icon: 'heart',
            title: 'Beginner Program',
            description: 'Start your fitness journey with confidence. Our beginner program teaches you proper form, builds foundational strength, and creates sustainable habits for long-term success.',
            duration: '45-60 min sessions',
            schedule: '3-4 days/week',
            level: 'Beginner'
        },
        personal: {
            icon: 'user',
            title: 'Personal Training',
            description: 'One-on-one attention from our elite trainers. Your program is completely customized to your goals, schedule, and preferences. The fastest path to your best self.',
            duration: '60 min sessions',
            schedule: 'Flexible',
            level: 'All Levels'
        },
        group: {
            icon: 'users',
            title: 'Group Classes',
            description: 'High-energy group sessions that make fitness fun and social. From HIIT to yoga to boxing, find your tribe and sweat together. The motivation of a community workout.',
            duration: '45-60 min classes',
            schedule: 'Multiple daily',
            level: 'All Levels'
        }
    };
    
    // Open modal with program data
    function openModal(programKey) {
        const data = programData[programKey];
        if (!data) return;
        
        // Set modal content
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalDuration').textContent = data.duration;
        document.getElementById('modalSchedule').textContent = data.schedule;
        document.getElementById('modalLevel').textContent = data.level;
        
        // Set icon
        const modalIcon = document.getElementById('modalIcon');
        modalIcon.innerHTML = `<i data-lucide="${data.icon}"></i>`;
        lucide.createIcons();
        
        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    // Add click handlers to program cards
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            const programKey = this.dataset.program;
            openModal(programKey);
        });
    });
    
    // Close modal handlers
    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    modalCta.addEventListener('click', closeModal);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}
/* =====================================================
   CONTACT FORM
   ===================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: form.querySelector('#name').value.trim(),
            email: form.querySelector('#email').value.trim(),
            phone: form.querySelector('#phone').value.trim(),
            message: form.querySelector('#message').value.trim()
        };
        
        // Validate form
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            showToast(errors[0], 'error');
            return;
        }
        
        // Simulate form submission
        // In a real application, you would send this to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form
        form.reset();
    });
}
// Form validation
function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.name) {
        errors.push('Please enter your name');
    } else if (data.name.length < 2) {
        errors.push('Name must be at least 2 characters');
    } else if (data.name.length > 100) {
        errors.push('Name must be less than 100 characters');
    }
    
    // Email validation
    if (!data.email) {
        errors.push('Please enter your email');
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Message validation
    if (!data.message) {
        errors.push('Please enter a message');
    } else if (data.message.length < 10) {
        errors.push('Message must be at least 10 characters');
    } else if (data.message.length > 1000) {
        errors.push('Message must be less than 1000 characters');
    }
    
    return errors;
}
// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/* =====================================================
   TOAST NOTIFICATIONS
   ===================================================== */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Set message
    toastMessage.textContent = message;
    
    // Set icon based on type
    if (type === 'error') {
        toastIcon.setAttribute('data-lucide', 'alert-circle');
        toastIcon.style.color = 'hsl(0, 84%, 60%)';
    } else {
        toastIcon.setAttribute('data-lucide', 'check-circle');
        toastIcon.style.color = 'hsl(187, 100%, 50%)';
    }
    
    // Refresh icon
    lucide.createIcons();
    
    // Show toast
    toast.classList.remove('hidden');
    
    // Hide after 4 seconds
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}
/* =====================================================
   UTILITY: INTERSECTION OBSERVER FOR ANIMATIONS
   ===================================================== */
// Optional: Add scroll-triggered animations to elements
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.dataset.animate;
                entry.target.classList.add(`animate-${animationType}`);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    animatedElements.forEach(el => observer.observe(el));
}
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Update aria attributes for accessibility
            const isExpanded = nav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Quote Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quote-form');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic form validation
            if (!data.name || !data.phone || !data.email || !data.service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phonePattern = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phonePattern.test(data.phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handler)
            setTimeout(() => {
                alert('Thank you for your quote request! We will contact you within 2 hours.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Track form submission for analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'engagement',
                        'event_label': 'quote_request'
                    });
                }
            }, 1000);
        });
    }
});

// Phone Click Tracking
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'event_category': 'engagement',
                    'event_label': 'header_phone'
                });
            }
        });
    });
});

// Scroll-based Header Shadow
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    function updateHeaderShadow() {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    }
    
    window.addEventListener('scroll', updateHeaderShadow);
    updateHeaderShadow(); // Initial call
});

// Enhanced Intersection Observer for Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    // Only run animations if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);
        
        // Elements to animate with stagger effect
        const animateElements = document.querySelectorAll('.service-card, .feature-item, .testimonial-card, .guarantee-item, .tip-item, .consideration-item');
        
        animateElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px) scale(0.95)';
            el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
            observer.observe(el);
        });
        
        // Enhanced parallax effect for background elements
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero::after');
            
            parallaxElements.forEach(el => {
                const speed = 0.3;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
});

// Advanced hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Service cards magnetic hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = (x / rect.width) * 20;
            const moveY = (y / rect.height) * 20;
            
            card.style.transform = `translateY(-10px) scale(1.02) rotateX(${moveY * 0.1}deg) rotateY(${moveX * 0.1}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });
    });
    
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Smooth number counting animation
document.addEventListener('DOMContentLoaded', function() {
    const countElements = document.querySelectorAll('[data-count]');
    
    const countObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalCount = parseInt(element.dataset.count);
                let currentCount = 0;
                const increment = finalCount / 100;
                
                const timer = setInterval(() => {
                    currentCount += increment;
                    element.textContent = Math.floor(currentCount);
                    
                    if (currentCount >= finalCount) {
                        element.textContent = finalCount;
                        clearInterval(timer);
                    }
                }, 20);
                
                countObserver.unobserve(element);
            }
        });
    });
    
    countElements.forEach(el => countObserver.observe(el));
});

// Dynamic background particles
document.addEventListener('DOMContentLoaded', function() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const hero = document.querySelector('.hero');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(16, 185, 129, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-particle ${Math.random() * 20 + 10}s infinite linear;
                z-index: 1;
            `;
            
            hero.appendChild(particle);
        }
    }
});

// Form Field Focus Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    
    formFields.forEach(field => {
        // Add focus class for enhanced styling
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            
            // Add filled class if field has value
            if (this.value.trim() !== '') {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
        
        // Check initial state
        if (field.value.trim() !== '') {
            field.parentElement.classList.add('filled');
        }
    });
});

// Emergency Service Hours Display
document.addEventListener('DOMContentLoaded', function() {
    function updateServiceHours() {
        const now = new Date();
        const hour = now.getHours();
        const isBusinessHours = hour >= 8 && hour < 18;
        
        const serviceElements = document.querySelectorAll('.service-hours');
        serviceElements.forEach(el => {
            if (isBusinessHours) {
                el.textContent = 'Available Now - Business Hours';
                el.style.color = '#16a34a';
            } else {
                el.textContent = '24/7 Emergency Service Available';
                el.style.color = '#dc2626';
            }
        });
    }
    
    updateServiceHours();
    // Update every hour
    setInterval(updateServiceHours, 3600000);
});

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Contact Form Auto-save (Local Storage)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quote-form');
    if (!form) return;
    
    const formFields = form.querySelectorAll('input, select, textarea');
    const storageKey = 'gta-pest-control-form';
    
    // Load saved data
    function loadFormData() {
        try {
            const savedData = localStorage.getItem(storageKey);
            if (savedData) {
                const data = JSON.parse(savedData);
                formFields.forEach(field => {
                    if (data[field.name]) {
                        field.value = data[field.name];
                    }
                });
            }
        } catch (e) {
            console.log('Could not load saved form data');
        }
    }
    
    // Save form data
    function saveFormData() {
        try {
            const data = {};
            formFields.forEach(field => {
                if (field.value) {
                    data[field.name] = field.value;
                }
            });
            localStorage.setItem(storageKey, JSON.stringify(data));
        } catch (e) {
            console.log('Could not save form data');
        }
    }
    
    // Clear saved data on successful submission
    function clearFormData() {
        try {
            localStorage.removeItem(storageKey);
        } catch (e) {
            console.log('Could not clear form data');
        }
    }
    
    // Load data on page load
    loadFormData();
    
    // Save data on input
    formFields.forEach(field => {
        field.addEventListener('input', saveFormData);
        field.addEventListener('change', saveFormData);
    });
    
    // Clear data on form submission
    form.addEventListener('submit', function() {
        setTimeout(clearFormData, 1000); // Clear after successful submission
    });
});

// Performance Monitoring
document.addEventListener('DOMContentLoaded', function() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
            
            // Track slow page loads
            if (loadTime > 3000 && typeof gtag !== 'undefined') {
                gtag('event', 'page_load_slow', {
                    'event_category': 'performance',
                    'value': loadTime
                });
            }
        }
    });
});
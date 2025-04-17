// Main JavaScript for Lily App website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.innerHTML = '<span></span><span></span><span></span>';
                this.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                this.querySelectorAll('span')[1].style.opacity = '0';
                this.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                this.innerHTML = '<span></span><span></span><span></span>';
            }
        });
    }
    
    // Scroll header style change
    const header = document.querySelector('.header');
    
    function headerScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', headerScroll);
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    }
    
    window.addEventListener('scroll', scrollFunction);
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }
    
    // Screenshots slider
    const screenshotsSlider = document.querySelector('.screenshots-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (screenshotsSlider && prevBtn && nextBtn) {
        let slidePosition = 0;
        const slides = document.querySelectorAll('.screenshot-item');
        const totalSlides = slides.length;
        
        prevBtn.addEventListener('click', function() {
            moveToSlide('prev');
        });
        
        nextBtn.addEventListener('click', function() {
            moveToSlide('next');
        });
        
        function moveToSlide(direction) {
            const slideWidth = slides[0].clientWidth + 20; // Width + gap
            
            if (direction === 'next') {
                slidePosition--;
                if (slidePosition < -(totalSlides - 3)) {
                    slidePosition = 0;
                }
            } else {
                slidePosition++;
                if (slidePosition > 0) {
                    slidePosition = -(totalSlides - 3);
                }
            }
            
            screenshotsSlider.style.transform = `translateX(${slidePosition * slideWidth}px)`;
        }
        
        // Auto slide every 3 seconds
        let slideInterval = setInterval(() => {
            moveToSlide('next');
        }, 3000);
        
        // Pause auto slide on hover
        screenshotsSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        screenshotsSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                moveToSlide('next');
            }, 3000);
        });
    }
    
    // Testimonial slider
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    
    if (testimonialItems.length > 0 && testimonialDots.length > 0) {
        let testimonialIndex = 0;
        const totalTestimonials = testimonialItems.length;
        
        function showTestimonial(index) {
            testimonialItems.forEach((item, i) => {
                if (i === index) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            testimonialDots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Initialize first testimonial
        showTestimonial(0);
        
        // Add click events to dots
        testimonialDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                testimonialIndex = i;
                showTestimonial(testimonialIndex);
            });
        });
        
        // Auto rotate testimonials
        setInterval(() => {
            testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
            showTestimonial(testimonialIndex);
        }, 5000);
    }
    
    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        menuToggle.classList.remove('active');
                        menuToggle.innerHTML = '<span></span><span></span><span></span>';
                    }
                    
                    // Scroll to target
                    const headerHeight = header.clientHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            // Simulate form submission
            if (nameInput.value && emailInput.value && subjectInput.value && messageInput.value) {
                // Success message
                alert('আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('দয়া করে সমস্ত ফিল্ড পূরণ করুন।');
            }
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('আপনাকে আমাদের নিউজলেটারে সাবস্ক্রাইব করার জন্য ধন্যবাদ!');
                this.reset();
            } else {
                alert('দয়া করে আপনার ইমেইল ঠিকানা দিন।');
            }
        });
    }
    
    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightCurrentSection() {
        const scrollPosition = window.scrollY + header.clientHeight + 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            const sectionId = section.getAttribute('id');
            const menuLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom && menuLink) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                
                menuLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection(); // Initialize on page load
});

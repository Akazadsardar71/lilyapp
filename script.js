// DOM এলিমেন্ট লোড হওয়ার পর জাভাস্ক্রিপ্ট কোড রান করি
document.addEventListener('DOMContentLoaded', function() {
    // মেনু টোগল ফাংশন
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // ড্রপডাউন মেনু টোগল
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // স্লাইডার ফাংশন
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;
    
    if (slides.length > 0) {
        // স্লাইড শো শুরু করি
        function startSlideShow() {
            slideInterval = setInterval(nextSlide, 5000);
        }
        
        // স্লাইড শো বন্ধ করি
        function stopSlideShow() {
            clearInterval(slideInterval);
        }
        
        // পরবর্তী স্লাইডে যাই
        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }
        
        // আগের স্লাইডে যাই
        function prevSlide() {
            goToSlide((currentSlide - 1 + slides.length) % slides.length);
        }
        
        // নির্দিষ্ট স্লাইডে যাই
        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = n;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        // বাটনে ক্লিক ইভেন্ট যোগ করি
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function() {
                stopSlideShow();
                prevSlide();
                startSlideShow();
            });
            
            nextBtn.addEventListener('click', function() {
                stopSlideShow();
                nextSlide();
                startSlideShow();
            });
        }
        
        // ডটে ক্লিক ইভেন্ট যোগ করি
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                stopSlideShow();
                const slideIndex = parseInt(this.getAttribute('data-slide'));
                goToSlide(slideIndex);
                startSlideShow();
            });
        });
        
        // স্লাইড শো শুরু করি
        startSlideShow();
    }
    
    // কাউন্টার এনিমেশন
    const counters = document.querySelectorAll('.counter-number');
    let counted = false;
    
    function startCounting() {
        if (counted) return;
        
        const counterSection = document.querySelector('.counter-section');
        if (!counterSection) return;
        
        const sectionTop = counterSection.offsetTop;
        const sectionHeight = counterSection.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop - windowHeight + sectionHeight / 2) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                
                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
            
            counted = true;
        }
    }
    
    // গ্যালারি লাইটবক্স
    const galleryItems = document.querySelectorAll('.gallery-view');
    
    if (galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const imgSrc = this.getAttribute('href');
                
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <img src="${imgSrc}" alt="Gallery Image">
                        <span class="lightbox-close">&times;</span>
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                document.body.style.overflow = 'hidden';
                
                const closeBtn = lightbox.querySelector('.lightbox-close');
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = 'auto';
                });
                
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        });
    }
    
    // কন্টাক্ট ফর্ম সাবমিশন
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // ফর্ম ভ্যালিডেশন
            if (!name || !email || !subject || !message) {
                alert('অনুগ্রহ করে সকল তথ্য পূরণ করুন।');
                return;
            }
            
            // সার্ভারে ডাটা পাঠানোর কোড এখানে যাবে
            // এখানে ডেমো হিসেবে একটি সাকসেস মেসেজ দেখাচ্ছি
            
            // ফর্ম রিসেট করি
            contactForm.reset();
            
            // সাকসেস মেসেজ
            alert('আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
        });
    }
    
    // স্ক্রল টু টপ বাটন
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // স্ক্রল ইভেন্ট
    window.addEventListener('scroll', function() {
        startCounting();
    });
    
    // পেজ লোড হওয়ার সময় স্ক্রল চেক করি
    startCounting();
});

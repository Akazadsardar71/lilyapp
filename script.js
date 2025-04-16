document.addEventListener('DOMContentLoaded', function() {
    
    // মোবাইল মেনু টগল
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // ড্রপডাউন মেনু মোবাইল ভিউতে
    const dropdowns = document.querySelectorAll('.dropdown > a');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('active');
            }
        });
    });
    
    // স্লাইডার ফাংশনালিটি
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // স্লাইড চেইঞ্জ ফাংশন
    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // নেক্সট স্লাইড
    function nextSlide() {
        changeSlide(currentSlide + 1);
    }
    
    // প্রিভিয়াস স্লাইড
    function prevSlide() {
        changeSlide(currentSlide - 1);
    }
    
    // ইভেন্ট লিসেনারস
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // ডট ক্লিক ইভেন্ট
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            changeSlide(slideIndex);
        });
    });
    
    // অটো স্লাইড
    let slideInterval = setInterval(nextSlide, 5000);
    
    // স্লাইডারে হোভার করলে অটো স্লাইড বন্ধ
    const slider = document.querySelector('.slider');
    
    slider.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', function() {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // স্ক্রল টু টপ বাটন
    const scrollTopBtn = document.querySelector('.scroll-top');
    
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
    
    // যোগাযোগ ফর্ম সাবমিশন
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // ফর্ম ডাটা
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // আপনি এখানে ফর্ম ডাটা প্রসেস করার কোড যোগ করতে পারেন
            
            // সাকসেস মেসেজ
            alert('আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।');
            
            // ফর্ম রিসেট
            contactForm.reset();
        });
    }
});

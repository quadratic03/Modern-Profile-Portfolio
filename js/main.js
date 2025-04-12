/**
 * Portfolio System - Main JavaScript
 * 
 * This file contains all JavaScript functionality for the portfolio system including:
 * - Navigation menu functionality
 * - Sticky header
 * - Smooth scrolling
 * - Counter animations
 * - Project filtering
 * - Modal functionality
 * - Contact form validation
 * - FAQ toggles
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Preloader
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);

    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if(header) {
            if(window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if(!target) return;
            
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if(backToTop) {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const counterSection = document.querySelector('.achievements') || document.querySelector('.experience-counter');
    
    if(counters.length > 0 && counterSection) {
        let counted = false;
        
        function startCounting() {
            if(!counted && isInViewport(counterSection)) {
                counters.forEach(counter => {
                    const target = +counter.dataset.count;
                    const count = +counter.innerText;
                    const increment = target / 100;
                    
                    if(count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(startCounting, 20);
                    } else {
                        counter.innerText = target;
                    }
                });
                
                counted = true;
            }
        }
        
        window.addEventListener('scroll', startCounting);
        startCounting(); // Initial check
    }

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Portfolio filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if(filterBtns.length > 0 && projectItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Blog filter
    const blogFilterBtns = document.querySelectorAll('.blog-filter .filter-btn');
    const articleCards = document.querySelectorAll('.article-card');
    
    if(blogFilterBtns.length > 0 && articleCards.length > 0) {
        blogFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                blogFilterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-category');
                
                articleCards.forEach(card => {
                    if(filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Project modal
    const projectModal = document.getElementById('project-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    const closeModal = document.querySelector('.close-modal');
    
    if(projectModal && viewDetailsBtns.length > 0) {
        viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get project details
                const projectId = this.getAttribute('data-project');
                const project = document.getElementById(projectId);
                
                if(project) {
                    const title = project.querySelector('h3').innerText;
                    const description = project.querySelector('p').innerText;
                    
                    // Update modal content
                    document.getElementById('modal-title').innerText = title;
                    document.getElementById('modal-description').innerText = description;
                    
                    // Show modal
                    projectModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        if(closeModal) {
            closeModal.addEventListener('click', function() {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if(e.target === projectModal) {
                projectModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Gallery thumbs
    const galleryThumbs = document.querySelectorAll('.gallery-thumbs .thumb');
    const mainImage = document.getElementById('modal-main-img');
    
    if(galleryThumbs.length > 0 && mainImage) {
        galleryThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbs
                galleryThumbs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumb
                this.classList.add('active');
                // Update main image
                mainImage.src = this.src;
            });
        });
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if(faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.toggle-icon i');
            
            question.addEventListener('click', function() {
                // Toggle answer visibility
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                
                // Toggle icon
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
                
                // Toggle active class
                item.classList.toggle('active');
            });
        });
    }

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Validate name
            if(nameInput.value.trim() === '') {
                setError(nameInput, 'Name is required');
                valid = false;
            } else {
                removeError(nameInput);
            }
            
            // Validate email
            if(emailInput.value.trim() === '') {
                setError(emailInput, 'Email is required');
                valid = false;
            } else if(!isValidEmail(emailInput.value.trim())) {
                setError(emailInput, 'Please enter a valid email');
                valid = false;
            } else {
                removeError(emailInput);
            }
            
            // Validate message
            if(messageInput.value.trim() === '') {
                setError(messageInput, 'Message is required');
                valid = false;
            } else {
                removeError(messageInput);
            }
            
            if(valid) {
                // Simulate form submission
                alert('Your message has been sent. Thank you!');
                contactForm.reset();
            }
        });
    }

    // Helper functions for form validation
    function setError(input, errorMessage) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        
        // Check if error message element already exists
        let errorElement = formGroup.querySelector('.error-message');
        
        if(!errorElement) {
            // Create error message element
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.innerText = errorMessage;
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        
        const errorElement = formGroup.querySelector('.error-message');
        if(errorElement) {
            errorElement.remove();
        }
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Pricing toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.amount.monthly');
    const annualPrices = document.querySelectorAll('.amount.annual');
    
    if(pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            if(this.checked) {
                // Show annual prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if(loadMoreBtn) {
        // Simulate loading more content
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                this.innerHTML = 'No More Items';
                this.disabled = true;
                this.classList.add('disabled');
            }, 1500);
        });
    }

    // Initialize AOS animation library if available
    if(typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }

    // Footer Credit Protection
    // Store the original credit text
    const originalCredit = "Developed by Namoc";
    const developerCredit = document.querySelector('.developer-credit');
    
    // Apply blur effect function
    function applyBlurEffect() {
        // Create styled alert modal
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'rgba(22, 22, 26, 0.95)';
        modal.style.padding = '30px';
        modal.style.borderRadius = '12px';
        modal.style.boxShadow = '0 0 30px rgba(127, 90, 240, 0.6)';
        modal.style.zIndex = '10000';
        modal.style.maxWidth = '500px';
        modal.style.width = '90%';
        modal.style.textAlign = 'center';
        modal.style.border = '2px solid #7f5af0';
        
        // Create modal content
        const title = document.createElement('h3');
        title.textContent = "Copyright Warning";
        title.style.color = '#fffffe';
        title.style.marginBottom = '15px';
        title.style.fontSize = '1.5rem';
        
        const message = document.createElement('p');
        message.textContent = "Don't try to remove the footer credit. Please if you want this portfolio just contact the Github Owner of this Project to avoid copyright issues.";
        message.style.color = '#94a1b2';
        message.style.marginBottom = '20px';
        message.style.lineHeight = '1.6';
        
        const closeButton = document.createElement('button');
        closeButton.textContent = "I Understand";
        closeButton.style.background = 'linear-gradient(135deg, #7f5af0 0%, #6a3ed3 100%)';
        closeButton.style.color = '#fffffe';
        closeButton.style.border = 'none';
        closeButton.style.borderRadius = '8px';
        closeButton.style.padding = '10px 20px';
        closeButton.style.cursor = 'pointer';
        closeButton.style.fontWeight = '500';
        closeButton.style.boxShadow = '0 0 15px rgba(127, 90, 240, 0.5)';
        
        // Add event listener to close button
        closeButton.addEventListener('click', function() {
            // Remove blur when modal is closed
            document.body.style.filter = '';
            document.body.removeChild(modal);
            // Restore the original credit
            if (developerCredit) {
                developerCredit.textContent = originalCredit;
            }
        });
        
        // Append elements to modal
        modal.appendChild(title);
        modal.appendChild(message);
        modal.appendChild(closeButton);
        
        // Apply blur to the entire page
        document.body.style.filter = 'blur(8px)';
        
        // Add modal to the body
        document.body.appendChild(modal);
    }
    
    // Check for mutations in the DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                // If the developer credit is modified or removed
                const currentCredit = document.querySelector('.developer-credit');
                
                if (!currentCredit || currentCredit.textContent !== originalCredit) {
                    applyBlurEffect();
                }
            }
        });
    });
    
    // Observe the entire document for changes
    observer.observe(document.body, { 
        childList: true,
        subtree: true,
        characterData: true
    });
    
    // Also check if someone tries to hide the credit via CSS
    setInterval(function() {
        const creditElement = document.querySelector('.developer-credit');
        if (creditElement) {
            const style = window.getComputedStyle(creditElement);
            if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0' || parseFloat(style.opacity) < 0.5) {
                applyBlurEffect();
            }
        } else {
            applyBlurEffect();
        }
    }, 1000);
}); 
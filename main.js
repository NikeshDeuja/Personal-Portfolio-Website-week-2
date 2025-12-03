
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                formMessage.textContent = 'Message sent successfully!';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                // Show success modal
                document.getElementById('successModal').style.display = 'flex';
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 2000);
        });
        
            document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
        });
        
        // Background video functionality
        document.addEventListener('DOMContentLoaded', function() {
            const bgVideo = document.getElementById('bgVideo');
            
            // Ensure video plays automatically (muted for autoplay)
            bgVideo.muted = true;
            bgVideo.play().catch(error => {
                console.log('Video autoplay failed:', error);
            });
        });
        
        // Form validation
        const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.style.borderColor = '#ff6b6b';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value) {
                    this.style.borderColor = '#ddd';
                }
            });
        });
        
        // Email validation
        document.getElementById('email').addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                this.style.borderColor = '#ff6b6b';
            }
        });
        
        // Add scroll animation to sections
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            const windowHeight = window.innerHeight;
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < windowHeight - 100) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize sections with fade-in effect
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Trigger the animation for the first section
            setTimeout(() => {
                document.getElementById('home').style.opacity = '1';
                document.getElementById('home').style.transform = 'translateY(0)';
            }, 300);
        });

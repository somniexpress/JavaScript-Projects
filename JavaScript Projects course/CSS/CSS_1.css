<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #f5f5f5;
            padding: 20px;
        }

        .contact-container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        textarea,
        select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus,
        select:focus {
            outline: none;
            border-color: #4CAF50;
        }

        textarea {
            height: 120px;
            resize: vertical;
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .checkbox-group input[type="checkbox"] {
            width: auto;
        }

        .submit-btn {
            background-color: #4CAF50;
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
            background-color: #45a049;
        }

        .submit-btn:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }

        .error-message {
            color: #ff4444;
            font-size: 14px;
            margin-top: 5px;
            display: none;
        }

        .success-message {
            background-color: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: center;
            display: none;
        }

        .required {
            color: #ff4444;
        }

        .form-footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="contact-container">
        <h2>Contact Us</h2>
        
        <div class="success-message" id="successMessage">
            Thank you for your message! We'll get back to you soon.
        </div>

        <form id="contactForm">
            <div class="form-group">
                <label for="name">Full Name <span class="required">*</span></label>
                <input type="text" id="name" name="name" placeholder="Enter your full name">
                <div class="error-message" id="nameError">Please enter your name</div>
            </div>

            <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="Enter your email address">
                <div class="error-message" id="emailError">Please enter a valid email address</div>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Enter your phone number">
                <div class="error-message" id="phoneError">Please enter a valid phone number</div>
            </div>

            <div class="form-group">
                <label for="subject">Subject <span class="required">*</span></label>
                <select id="subject" name="subject">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
                <div class="error-message" id="subjectError">Please select a subject</div>
            </div>

            <div class="form-group">
                <label for="message">Message <span class="required">*</span></label>
                <textarea id="message" name="message" placeholder="Enter your message here..."></textarea>
                <div class="error-message" id="messageError">Please enter your message</div>
            </div>

            <div class="form-group">
                <div class="checkbox-group">
                    <input type="checkbox" id="newsletter" name="newsletter">
                    <label for="newsletter">Subscribe to our newsletter</label>
                </div>
            </div>

            <div class="form-group">
                <div class="checkbox-group">
                    <input type="checkbox" id="agree" name="agree">
                    <label for="agree">I agree to the terms and conditions <span class="required">*</span></label>
                </div>
                <div class="error-message" id="agreeError">You must agree to the terms and conditions</div>
            </div>

            <button type="submit" class="submit-btn" id="submitBtn">Send Message</button>
        </form>

        <div class="form-footer">
            <p>We typically respond within 24 hours</p>
        </div>
    </div>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            resetErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const agree = document.getElementById('agree').checked;
            
            let isValid = true;

            // Name validation
            if (name === '') {
                showError('nameError', 'Please enter your name');
                isValid = false;
            }

            // Email validation
            if (email === '') {
                showError('emailError', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }

            // Phone validation (optional but must be valid if provided)
            if (phone !== '' && !isValidPhone(phone)) {
                showError('phoneError', 'Please enter a valid phone number');
                isValid = false;
            }

            // Subject validation
            if (subject === '') {
                showError('subjectError', 'Please select a subject');
                isValid = false;
            }

            // Message validation
            if (message === '') {
                showError('messageError', 'Please enter your message');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long');
                isValid = false;
            }

            // Agreement validation
            if (!agree) {
                showError('agreeError', 'You must agree to the terms and conditions');
                isValid = false;
            }

            if (isValid) {
                // Simulate form submission
                const submitBtn = document.getElementById('submitBtn');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                // Simulate API call
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'block';
                    document.getElementById('contactForm').reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    
                    // Scroll to success message
                    document.getElementById('successMessage').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }, 2000);
            }
        });

        // Helper functions
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        function resetErrors() {
            const errorElements = document.getElementsByClassName('error-message');
            for (let i = 0; i < errorElements.length; i++) {
                errorElements[i].style.display = 'none';
            }
            document.getElementById('successMessage').style.display = 'none';
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidPhone(phone) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
        }

        // Real-time validation for better UX
        document.getElementById('email').addEventListener('blur', function() {
            const email = this.value.trim();
            if (email !== '' && !isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
        });

        document.getElementById('phone').addEventListener('blur', function() {
            const phone = this.value.trim();
            if (phone !== '' && !isValidPhone(phone)) {
                showError('phoneError', 'Please enter a valid phone number');
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }
        });

        document.getElementById('message').addEventListener('blur', function() {
            const message = this.value.trim();
            if (message !== '' && message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long');
            } else if (message !== '') {
                document.getElementById('messageError').style.display = 'none';
            }
        });
    </script>
</body>
</html>
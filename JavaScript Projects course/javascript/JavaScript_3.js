<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form with Data Attributes</title>
   
</head>
<body>

    <script>
        // Form configuration using data attributes
        const formConfig = {
            form: document.getElementById('contactForm'),
            successMessage: document.getElementById('successMessage'),
            submitBtn: document.getElementById('submitBtn'),
            
            // Get all form fields with data attributes
            fields: {
                name: {
                    element: document.getElementById('name'),
                    error: document.getElementById('nameError'),
                    icon: document.getElementById('nameIcon'),
                    validations: ['required', 'length']
                },
                email: {
                    element: document.getElementById('email'),
                    error: document.getElementById('emailError'),
                    icon: document.getElementById('emailIcon'),
                    validations: ['required', 'email']
                },
                phone: {
                    element: document.getElementById('phone'),
                    error: document.getElementById('phoneError'),
                    icon: document.getElementById('phoneIcon'),
                    validations: ['phone']
                },
                subject: {
                    element: document.getElementById('subject'),
                    error: document.getElementById('subjectError'),
                    validations: ['required']
                },
                message: {
                    element: document.getElementById('message'),
                    error: document.getElementById('messageError'),
                    validations: ['required', 'length']
                },
                agree: {
                    element: document.getElementById('agree'),
                    error: document.getElementById('agreeError'),
                    validations: ['required']
                }
            }
        };

        // Initialize form
        document.addEventListener('DOMContentLoaded', function() {
            initializeForm();
        });

        function initializeForm() {
            // Add event listeners using data attributes
            formConfig.form.addEventListener('submit', handleFormSubmit);
            
            // Real-time validation
            Object.values(formConfig.fields).forEach(field => {
                if (field.element) {
                    field.element.addEventListener('blur', () => validateField(field));
                    field.element.addEventListener('input', () => validateField(field, true));
                }
            });

            // Character count for message
            const messageField = formConfig.fields.message.element;
            const charCount = document.getElementById('charCount');
            
            if (messageField && charCount) {
                messageField.addEventListener('input', function() {
                    const length = this.value.length;
                    charCount.textContent = length;
                    
                    // Update color based on length
                    if (length < 10) {
                        charCount.style.color = '#e74c3c';
                    } else if (length > 800) {
                        charCount.style.color = '#f39c12';
                    } else {
                        charCount.style.color = '#2ecc71';
                    }
                });
            }

            // Update priority indicator based on subject selection
            const subjectSelect = formConfig.fields.subject.element;
            if (subjectSelect) {
                subjectSelect.addEventListener('change', function() {
                    const selectedOption = this.options[this.selectedIndex];
                    const priority = selectedOption.getAttribute('data-priority');
                    updatePriorityIndicator(priority);
                });
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            resetErrors();
            
            let isValid = true;

            // Validate all fields
            Object.values(formConfig.fields).forEach(field => {
                if (!validateField(field)) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitForm();
            }
        }

        function validateField(field, isRealTime = false) {
            const value = field.element.type === 'checkbox' ? field.element.checked : field.element.value.trim();
            const validations = field.validations;
            let isValid = true;
            let errorMessage = '';

            // Check each validation type
            validations.forEach(validation => {
                switch (validation) {
                    case 'required':
                        if (!value) {
                            isValid = false;
                            errorMessage = field.element.getAttribute('data-required-message') || 'This field is required';
                        }
                        break;
                        
                    case 'email':
                        if (value && !isValidEmail(value)) {
                            isValid = false;
                            errorMessage = 'Please enter a valid email address';
                        }
                        break;
                        
                    case 'phone':
                        if (value && !isValidPhone(value)) {
                            isValid = false;
                            errorMessage = 'Please enter a valid phone number';
                        }
                        break;
                        
                    case 'length':
                        const minLength = parseInt(field.element.getAttribute('data-min-length')) || 0;
                        const maxLength = parseInt(field.element.getAttribute('data-max-length')) || Infinity;
                        
                        if (value.length < minLength) {
                            isValid = false;
                            errorMessage = `Minimum ${minLength} characters required`;
                        } else if (value.length > maxLength) {
                            isValid = false;
                            errorMessage = `Maximum ${maxLength} characters allowed`;
                        }
                        break;
                }
            });

            // Update UI
            if (field.error) {
                if (!isValid && (!isRealTime || value)) {
                    field.error.textContent = errorMessage;
                    field.error.style.display = 'block';
                } else {
                    field.error.style.display = 'none';
                }
            }

            if (field.icon) {
                field.icon.style.display = value ? 'block' : 'none';
                field.icon.className = `validation-icon ${isValid ? 'valid' : 'invalid'}`;
                field.icon.textContent = isValid ? '✓' : '✗';
            }

            return isValid;
        }

        function submitForm() {
            const submitBtn = formConfig.submitBtn;
            const originalText = submitBtn.textContent;
            const loadingText = submitBtn.getAttribute('data-loading-text');
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = loadingText;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                formConfig.successMessage.style.display = 'block';
                
                // Reset form
                formConfig.form.reset();
                
                // Reset character count
                document.getElementById('charCount').textContent = '0';
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Hide validation icons
                Object.values(formConfig.fields).forEach(field => {
                    if (field.icon) {
                        field.icon.style.display = 'none';
                    }
                });
                
                // Scroll to success message
                formConfig.successMessage.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 2000);
        }

        function updatePriorityIndicator(priority) {
            // Remove existing priority indicators
            const existingIndicators = document.querySelectorAll('.priority-indicator');
            existingIndicators.forEach(indicator => indicator.remove());
            
            if (priority && priority !== 'none') {
                const subjectLabel = document.querySelector('label[for="subject"]');
                const indicator = document.createElement('span');
                indicator.className = `priority-indicator priority-${priority}`;
                indicator.textContent = priority.toUpperCase();
                indicator.setAttribute('data-priority', priority);
                subjectLabel.appendChild(indicator);
            }
        }

        function resetErrors() {
            Object.values(formConfig.fields).forEach(field => {
                if (field.error) {
                    field.error.style.display = 'none';
                }
            });
            formConfig.successMessage.style.display = 'none';
        }

        // Helper functions
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidPhone(phone) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
        }
    </script>
</body>
</html>
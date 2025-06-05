const contactform = document.getElementById("contact-Inquiry-form");
contactform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted event triggered.");

    // Gather data from the form
 // Accessing the form field values
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const subject = document.getElementById("subject").value;
const Message = document.getElementById("message").value;


console.log("Collected form data:", { name, email, phone, subject, message });


    // Create email data
    const emailData = {
        "Host": "216.10.241.228",
        "Port": "587",
        "SMTPSecure": "ssl",
        "SenderEmail": "hitixa.bhuva@uniqueconsumerservices.com",
        "SenderEmailPassword": "1f1UOc{3U*64",  
        "ReciverEmail": "thebrillianceinternational21@gmail.com",
        "Subject": subject,
        "Body": `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Export Inquiry - Brilliance International</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        /* Header */
        .header {
            background: #e81840;
            color: white;
            text-align: center;
            padding: 30px 20px;
        }
        
        .logo {
            background: rgba(255,255,255,0.2);
            border: 2px dashed rgba(255,255,255,0.4);
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 15px;
            font-size: 14px;
        }
        
        .company-name {
            font-size: 28px;
            font-weight: bold;
            margin: 0;
        }
        
        .tagline {
            font-size: 16px;
            opacity: 0.9;
            margin-top: 5px;
        }
        
        /* Content */
        .content {
            padding: 30px;
        }
        
        .alert {
            background: #fff5f5;
            border-left: 4px solid #e81840;
            padding: 20px;
            margin-bottom: 25px;
            border-radius: 4px;
        }
        
        .alert h2 {
            color: #e81840;
            margin: 0 0 8px 0;
            font-size: 20px;
        }
        
        .alert p {
            margin: 0;
            color: #666;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section h3 {
            color: #e81840;
            font-size: 18px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #e81840;
        }
        
        .info-box {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #eee;
        }
        
        .info-row {
            margin-bottom: 12px;
            display: flex;
            align-items: flex-start;
        }
        
        .info-row:last-child {
            margin-bottom: 0;
        }
        
        .label {
            font-weight: bold;
            width: 120px;
            flex-shrink: 0;
            color: #333;
        }
        
        .value {
            color: #555;
            flex: 1;
        }
        
        .message-box {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #e81840;
        }
        
        .message-text {
            color: #333;
            white-space: pre-wrap;
            line-height: 1.6;
        }
        
        .actions {
            text-align: center;
            margin: 30px 0;
        }
        
        .btn {
            display: inline-block;
            background: #e81840;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 0 10px 10px 0;
            transition: background 0.3s;
        }
        
        .btn:hover {
            background: #c5142e;
        }
        
        .btn-secondary {
            background: white;
            color: #e81840;
            border: 2px solid #e81840;
        }
        
        .btn-secondary:hover {
            background: #e81840;
            color: white;
        }
        
        /* Footer */
        .footer {
            background: #333;
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        .footer h4 {
            color: #e81840;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .contact-group p {
            margin: 5px 0;
            font-size: 14px;
        }
        
        .footer-note {
            font-size: 12px;
            color: #ccc;
            border-top: 1px solid #555;
            padding-top: 15px;
            margin-top: 15px;
        }
        
        /* Mobile */
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            
            .content {
                padding: 20px;
            }
            
            .header {
                padding: 20px;
            }
            
            .company-name {
                font-size: 24px;
            }
            
            .info-row {
                flex-direction: column;
            }
            
            .label {
                width: auto;
                margin-bottom: 3px;
            }
            
            .btn {
                display: block;
                margin: 10px 0;
            }
            
            .contact-info {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
        
        /* Highlight important products */
        .product-highlight {
            background: linear-gradient(90deg, #e81840, #ff4d6d);
            color: white;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: bold;
        }
        
        .urgent {
            background: #fff3cd;
            border: 1px solid #ffc107;
            color: #856404;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1 class="company-name">Brilliance International</h1>
            <div class="tagline">🌶️ Premium Spices & Seeds Exporter 🌿</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Alert -->
            <div class="alert">
                <h2>🔔 New Export Inquiry</h2>
                <p>A buyer has submitted an inquiry for your products</p>
            </div>
            
            <!-- Urgent Notice -->
            <div class="urgent">
                ⚡ RESPOND QUICKLY - Export opportunities need fast action!
            </div>
            
            <!-- Buyer Info -->
            <div class="section">
                <h3>Buyer Details</h3>
                <div class="info-box">
                    <div class="info-row">
                        <div class="label">Name:</div>
                        <div class="value">${name}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Email:</div>
                        <div class="value">${email}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Phone:</div>
                        <div class="value">${phone}</div>
                    </div>
                    <div class="info-row">
                        <div class="label">Subject:</div>
                        <div class="value"><span class="product-highlight">${subject}</span></div>
                    </div>
                </div>
            </div>
            
            <!-- Message -->
            <div class="section">
                <h3>Buyer's Message</h3>
                <div class="message-box">
                    <div class="message-text">${message}</div>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="actions">
                <a href="mailto:${email}" class="btn">📧 Reply Now</a>
                <a href="tel:${phone}" class="btn btn-secondary">📞 Call</a>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            
            <div class="footer-note">
                This is an automated notification for export inquiries.<br>
                <strong>Specializing in:</strong> Cumin, Coriander, Turmeric, Chili, Fennel & Premium Spice Blends
            </div>
        </div>
    </div>
</body>
</html>

    `,
    };

    console.log("Email data prepared:", emailData);

    const apiUrl = "./Mail/test.php";
    const headers = {
        "Content-Type": "application/json",
    };

    console.log("API URL:", apiUrl);

    function toggleClassForField(fieldId, className, duration) {
        console.log(`Adding class ${className} to ${fieldId} for ${duration}ms`);
        const field = document.getElementById(fieldId);
        field.classList.add(className);
        setTimeout(() => {
            field.classList.remove(className);
            console.log(`Removed class ${className} from ${fieldId}`);
        }, duration);
    }

    console.log("Checking form validation...");

    if (!name || !email || !phone || !subject || !message) {
        console.log("Validation failed: Missing required fields.");
    
        if (!name) {
            toggleClassForField('name', 'border-danger', 3000);
        }
        if (!message) {   // OPTIONAL: if you want to validate company name too
            toggleClassForField('message', 'border-danger', 3000);
        }
        if (!subject) {
            toggleClassForField('subject', 'border-danger', 3000);
        }
        if (!email) {
            toggleClassForField('email', 'border-danger', 3000);
        }
        if (!phone) {
            toggleClassForField('phone', 'border-danger', 3000);
        }
    
        showFeedback('Please fill in all required fields.', 'col-12 text-center py-2 border-danger border text-danger mt-3');
        return;
    }
    

    console.log("Validating email...");
    if (!isValidEmail(email)) {
        console.log("Invalid email entered.");
        showFeedback('Please enter a valid email address.', 'col-12 text-center border-1 py-2 border-info border text-info mt-3');
        return;
    }

    console.log("Sending email request...");

    const submitButton = document.getElementById("submit-button");
submitButton.disabled = true;
submitButton.innerHTML = 'Sending... <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'; // Optional: show loading indicator

    // Sending the email using fetch
     fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(emailData),
    })
    .then((response) => response.json())
    .then((data) => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';

        if (data.status) {
            console.log("Message sent successfully", data);
            showFeedback(
                "Message sent successfully",
                "col-12 text-center border-1 my-2 py-2 border-primary border text-primary"
            );
            clearForm();
        } else {
            console.log("Server returned an error", data);
            showFeedback(
                "Message sending failed. Please try again later.",
                "col-12 text-center border-1 py-2 border-danger border text-danger"
            );
            clearForm();
        }
    })
    .catch((error) => {
        console.error("Error while sending request:", error);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';
        showFeedback(
            "An error occurred while sending the message. Please try again later.",
            "col-12 text-center border-1 py-2 border-danger border text-danger"
        );
    });
});

function isValidEmail(email) {
    console.log("Checking email format...");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    console.log(`Email validation result for ${email}: ${isValid}`);
    return isValid;
}

function showFeedback(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMessage = toast.querySelector(".toast-message");
    const toastIcon = toast.querySelector(".toast-icon");
    const toastProgress = toast.querySelector(".toast-progress");

    // Customize icon and color based on type
    if (type === "success") {
        toastIcon.textContent = "✓";
        toastIcon.style.color = "green";
        toastProgress.style.backgroundColor = "green";
    } else if (type === "error") {
        toastIcon.textContent = "⚠";
        toastIcon.style.color = "red";
        toastProgress.style.backgroundColor = "red";
    } else if (type === "info") {
        toastIcon.textContent = "ℹ";
        toastIcon.style.color = "blue";
        toastProgress.style.backgroundColor = "blue";
    }

    toastMessage.textContent = message;

    // Show toast
    toast.classList.add("show");

    // Animate progress bar and hide toast after 3s
    toastProgress.style.width = "100%";
    setTimeout(() => {
        toast.classList.remove("show");
        toastProgress.style.width = "0";
    }, 3000);
}


function clearForm() {
    console.log("Clearing form fields...");
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    console.log("Form reset successfully.");
}
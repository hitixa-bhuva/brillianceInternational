const productcontectform = document.getElementById("product-contect-form");
productcontectform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted event triggered.");

    // Gather data from the form
 // Accessing the form field values
const fullName = document.getElementById("fullName").value;
const companyName = document.getElementById("companyName").value;
const productCategory = document.getElementById("productCategory").value;
const specificProduct = document.getElementById("specificProduct").value;
const quantity = document.getElementById("quantity").value;
const phoneNumber = document.getElementById("phoneNumber").value;
const emailAddress = document.getElementById("emailAddress").value;
const inquiryDate = document.getElementById("inquiryDate").value;
const deliveryCity = document.getElementById("deliveryCity").value;
const web = document.getElementById("web").value;
const arrivalPort = document.getElementById("arrivalPort").value;
const country = document.getElementById("country").value;
const additionalMessage = document.getElementById("additionalMessage").value;
const subject = document.getElementById("subject").value;


console.log("Collected form data:", { fullName, companyName, productCategory, emailAddress, specificProduct , phoneNumber, inquiryDate, deliveryCity, web , arrivalPort , country, additionalMessage });


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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Export Inquiry - Brilliance International Spices & Seeds</title>
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        /* Base styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2c2c2c;
            background: linear-gradient(135deg, #f5f3f0 0%, #e8e6e3 100%);
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        /* Container */
        .email-container {
            max-width: 650px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(232, 24, 64, 0.1);
            overflow: hidden;
        }
        
        /* Header with spice pattern */
        .header {
            background: linear-gradient(135deg, #e81840 0%, #c41235 100%);
            padding: 25px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '🌶️ 🌿 ⭐ 🌶️ 🌿 ⭐ 🌶️ 🌿 ⭐ 🌶️ 🌿 ⭐';
            position: absolute;
            top: -10px;
            left: -50px;
            right: -50px;
            font-size: 24px;
            opacity: 0.2;
            animation: float 20s linear infinite;
        }
        
        @keyframes float {
            0% { transform: translateX(-100px); }
            100% { transform: translateX(100px); }
        }
        
        .logo-placeholder {
            background: rgba(255,255,255,0.15);
            border: 2px dashed rgba(255,255,255,0.4);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        
        .logo-text {
            color: #ffffff;
            font-size: 13px;
            font-weight: 300;
        }
        
        .company-name {
            color: #ffffff;
            font-size: 26px;
            font-weight: 700;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .company-tagline {
            color: rgba(255,255,255,0.9);
            font-size: 14px;
            margin-top: 5px;
            font-style: italic;
        }
        
        /* Main content */
        .content {
            padding: 35px 25px;
        }
        
        .alert-header {
            background: linear-gradient(135deg, #fff8f9 0%, #ffeef2 100%);
            border: 1px solid #fdd6e0;
            border-left: 5px solid #e81840;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 8px;
            position: relative;
        }
        
        .alert-header::before {
            content: '📦';
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 28px;
            opacity: 0.3;
        }
        
        .alert-title {
            color: #e81840;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        .alert-title::before {
            content: '🌍';
            margin-right: 10px;
        }
        
        .alert-subtitle {
            color: #666666;
            font-size: 15px;
            line-height: 1.5;
        }
        
        /* Customer details section */
        .details-section {
            margin-bottom: 35px;
        }
        
        .section-title {
            color: #e81840;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 18px;
            padding-bottom: 10px;
            border-bottom: 3px solid #e81840;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #e81840, #ff6b8a);
        }
        
        .details-grid {
            background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #e8e8e8;
        }
        
        .detail-row {
            display: table;
            width: 100%;
            margin-bottom: 15px;
            padding: 12px 0;
            border-bottom: 1px solid #e8e8e8;
            transition: background-color 0.3s ease;
        }
        
        .detail-row:hover {
            background-color: rgba(232, 24, 64, 0.02);
            border-radius: 6px;
        }
        
        .detail-row:last-child {
            margin-bottom: 0;
            border-bottom: none;
        }
        
        .detail-label {
            display: table-cell;
            font-weight: 600;
            color: #2c2c2c;
            width: 35%;
            vertical-align: top;
            padding-right: 20px;
            position: relative;
        }
        
        .detail-label::before {
            content: '🔸';
            margin-right: 8px;
            color: #e81840;
        }
        
        .detail-value {
            display: table-cell;
            color: #555555;
            vertical-align: top;
            font-weight: 500;
        }
        
        /* Spice/Seed specific styling */
        .product-category {
            background: linear-gradient(135deg, #e81840, #ff6b8a);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            display: inline-block;
        }
        
        .product-name {
            color: #e81840;
            font-weight: 700;
            font-size: 16px;
        }
        
        /* Message section */
        .message-section {
            margin-bottom: 35px;
        }
        
        .message-content {
            background: linear-gradient(135deg, #fafafa 0%, #f8f8f8 100%);
            border-radius: 12px;
            padding: 25px;
            border-left: 5px solid #e81840;
            position: relative;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .message-content::before {
            content: '💬';
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 24px;
            opacity: 0.3;
        }
        
        .message-text {
            color: #2c2c2c;
            line-height: 1.7;
            white-space: pre-wrap;
            font-size: 15px;
        }
        
        /* Priority section */
        .priority-section {
            background: linear-gradient(135deg, #fff3e0 0%, #ffe8cc 100%);
            border: 1px solid #ffcc99;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .priority-title {
            color: #e65100;
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 8px;
        }
        
        .priority-text {
            color: #bf360c;
            font-size: 14px;
        }
        
        /* Action buttons */
        .action-section {
            text-align: center;
            margin-bottom: 35px;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .action-button {
            display: inline-block;
            background: linear-gradient(135deg, #e81840 0%, #c41235 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(232, 24, 64, 0.3);
        }
        
        .action-button:hover {
            background: linear-gradient(135deg, #c41235 0%, #a00e2a 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(232, 24, 64, 0.4);
        }
        
        .action-button.secondary {
            background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
            color: #e81840;
            border: 2px solid #e81840;
            box-shadow: 0 4px 15px rgba(232, 24, 64, 0.1);
        }
        
        .action-button.secondary:hover {
            background: linear-gradient(135deg, #e81840 0%, #c41235 100%);
            color: #ffffff;
        }
        
        /* Footer */
        .footer {
            background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
            color: #ffffff;
            padding: 30px 25px;
            text-align: center;
        }
        
        .footer-title {
            color: #e81840;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 18px;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }
        
        .footer-section h4 {
            color: #e81840;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .footer-info {
            margin-bottom: 6px;
            font-size: 13px;
            color: #cccccc;
        }
        
        .footer-divider {
            border: none;
            height: 1px;
            background: linear-gradient(90deg, transparent, #555555, transparent);
            margin: 25px 0;
        }
        
        .footer-note {
            font-size: 12px;
            color: #999999;
            line-height: 1.5;
        }
        
        /* Mobile responsiveness */
        @media only screen and (max-width: 768px) {
            .email-container {
                margin: 10px !important;
                border-radius: 8px !important;
            }
            
            .content {
                padding: 25px 20px !important;
            }
            
            .header {
                padding: 20px 15px !important;
            }
            
            .company-name {
                font-size: 22px !important;
            }
            
            .alert-title {
                font-size: 18px !important;
            }
            
            .section-title {
                font-size: 18px !important;
            }
            
            .details-grid {
                padding: 20px !important;
            }
            
            .detail-row {
                display: block !important;
                padding: 10px 0 !important;
            }
            
            .detail-label {
                display: block !important;
                width: 100% !important;
                padding-right: 0 !important;
                margin-bottom: 5px;
            }
            
            .detail-value {
                display: block !important;
            }
            
            .message-content {
                padding: 20px !important;
            }
            
            .action-buttons {
                flex-direction: column !important;
                align-items: center !important;
            }
            
            .action-button {
                width: 100% !important;
                max-width: 280px !important;
                margin-bottom: 10px !important;
            }
            
            .footer {
                padding: 25px 20px !important;
            }
            
            .footer-grid {
                grid-template-columns: 1fr !important;
                gap: 15px !important;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1 class="company-name">Brilliance International</h1>
            <div class="company-tagline">Premium Spices & Seeds Exporter</div>
        </div>
        
        <!-- Main Content -->
        <div class="content">
            <!-- Alert Header -->
            <div class="alert-header">
                <div class="alert-title">New Export Inquiry Received</div>
                <div class="alert-subtitle">A potential buyer has submitted an inquiry for your spices & seeds products. This could be a valuable export opportunity!</div>
            </div>
            
            <!-- Priority Notice -->
            <div class="priority-section">
                <div class="priority-title">⚡ HIGH PRIORITY - EXPORT OPPORTUNITY</div>
                <div class="priority-text">Please respond within 24 hours to maintain competitive advantage</div>
            </div>
            
            <!-- Customer Details -->
            <div class="details-section">
                <h2 class="section-title">Buyer Information</h2>
                <div class="details-grid">
                    <div class="detail-row">
                        <div class="detail-label">Buyer Name:</div>
                        <div class="detail-value">${fullName}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Company Name:</div>
                        <div class="detail-value">${companyName}</div>
                    </div>
                     <div class="detail-row">
                        <div class="detail-label">Product Category:</div>
                        <div class="detail-value"><span class="product-category">${specificProduct}</span></div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Specific Product:</div>
                        <div class="detail-value"><span class="product-name">${specificProduct}</span></div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Quantity Required:</div>
                        <div class="detail-value">${quantity}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Email Address:</div>
                        <div class="detail-value">${emailAddress}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Phone Number:</div>
                        <div class="detail-value">${phoneNumber}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Subject:</div>
                        <div class="detail-value">${subject}</div>
                    </div>
                   <div class="detail-row">
                        <div class="detail-label">Inquiry Date:</div>
                        <div class="detail-value">${inquiryDate}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Web:</div>
                        <div class="detail-value">${web}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Arrival Port:</div>
                        <div class="detail-value">${arrivalPort}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">Country:</div>
                        <div class="detail-value">${country}</div>
                    </div>
                </div>
            </div>
            
            <!-- Customer Message -->
            <div class="message-section">
                <h2 class="section-title">Buyer's Message & Requirements</h2>
                <div class="message-content">
                    <div class="message-text">${additionalMessage}</div>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="action-section">
                <div class="action-buttons">
                    <a href="mailto:${emailAddress}" class="action-button">📧 Reply to Buyer</a>
                    <a href="tel:${phoneNumber}" class="action-button secondary">📞 Call Now</a>
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <hr class="footer-divider">
            
            <div class="footer-note">
                <strong>🚨 Export Opportunity Alert:</strong> This email contains a potential export inquiry for your spices & seeds business.
                <br>Quick response time is crucial for securing international orders. Please prioritize this inquiry.
                <br><em>Specialized in: Cumin Seeds, Coriander Seeds, Turmeric, Red Chili, Fennel Seeds, and Premium Spice Blends</em>
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

    if (!fullName || !companyName || !productCategory || !specificProduct || !quantity || !phoneNumber || !emailAddress || !inquiryDate || !deliveryCity || !web || !arrivalPort || !country || !additionalMessage) {
        console.log("Validation failed: Missing required fields.");
    
        if (!fullName) {
            toggleClassForField('fullName', 'border-danger', 3000);
        }
        if (!phoneNumber) {
            toggleClassForField('phoneNumber', 'border-danger', 3000);
        }
        if (!emailAddress) {
            toggleClassForField('emailAddress', 'border-danger', 3000);
        }
        if (!inquiryDate) {
            toggleClassForField('inquiryDate', 'border-danger', 3000);
        }
        if (!deliveryCity) {
            toggleClassForField('deliveryCity', 'border-danger', 3000);
        }
        if (!web) {
            toggleClassForField('web', 'border-danger', 3000);
        }
        if (!additionalMessage) {
            toggleClassForField('additionalMessage', 'border-danger', 3000);
        }
        if (!arrivalPort) {
            toggleClassForField('arrivalPort', 'border-danger', 3000);
        }
        if (!country) {
            toggleClassForField('country', 'border-danger', 3000);
        }
        if (!quantity) {   // OPTIONAL: if you want to validate company name too
            toggleClassForField('quantity', 'border-danger', 3000);
        }
        if (!specificProduct) {
            toggleClassForField('specificProduct', 'border-danger', 3000);
        }
        if (!companyName) {
            toggleClassForField('companyName', 'border-danger', 3000);
        }
        if (!productCategory) {
            toggleClassForField('productCategory', 'border-danger', 3000);
        }
    
        showProductToast('Please fill in all required fields.', 'col-12 text-center py-2 border-danger border text-danger mt-3');
        return;
    }
    

    console.log("Validating email...");
    if (!isValidEmail(emailAddress)) {
        console.log("Invalid email entered.");
        showProductToast('Please enter a valid email address.', 'col-12 text-center border-1 py-2 border-info border text-info mt-3');
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
            showProductToast(
                "Message sent successfully",
                "col-12 text-center border-1 my-2 py-2 border-primary border text-primary"
            );
            clearFormProduct();
        } else {
            console.log("Server returned an error", data);
            showProductToast(
                "Message sending failed. Please try again later.",
                "col-12 text-center border-1 py-2 border-danger border text-danger"
            );
            clearFormProduct();
        }
    })
    .catch((error) => {
        console.error("Error while sending request:", error);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';
        showProductToast(
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
// Product Toast
function showProductToast(message, type = "success") {
  const toast = document.getElementById("product-toast");
  const toastMessage = toast.querySelector(".toast-message");
  const toastIcon = toast.querySelector(".toast-icon");
  const toastProgress = toast.querySelector(".toast-progress");

  // Remove previous type classes
  toast.classList.remove("toast-success", "toast-error", "toast-info");

  if (type === "success") {
    toastIcon.textContent = "✓";
    toast.classList.add("toast-success");
    toastProgress.style.backgroundColor = "#28a745";
  } else if (type === "error") {
    toastIcon.textContent = "⚠";
    toast.classList.add("toast-error");
    toastProgress.style.backgroundColor = "#dc3545";
  } else if (type === "info") {
    toastIcon.textContent = "ℹ";
    toast.classList.add("toast-info");
    toastProgress.style.backgroundColor = "#007bff";
  }

  toastMessage.textContent = message;
  toast.classList.add("show");
  toastProgress.style.width = "100%";

  setTimeout(() => {
    toast.classList.remove("show");
    toastProgress.style.width = "0";
  }, 3000);
}

function hideProductToast() {
  const toast = document.getElementById("product-toast");
  const toastProgress = toast.querySelector(".toast-progress");
  toast.classList.remove("show");
  toastProgress.style.width = "0";
}

function clearFormProduct() {
    console.log("Clearing form fields...");
    document.getElementById('fullName').value = '';
    document.getElementById('companyName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('specificProduct').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('emailAddress').value = '';
    document.getElementById('deliveryCity').value = '';
    document.getElementById('web').value = '';
    document.getElementById('arrivalPort').value = '';
    document.getElementById('country').value = '';
    document.getElementById('additionalMessage').value = '';

    console.log("Form reset successfully.");
}
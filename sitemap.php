<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Nav Brilliance International | Premium Export of Seeds, Nuts & Spices</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background: linear-gradient(135deg, #e81840 0%, #c41437 100%);
            color: white;
            padding: 60px 0;
            text-align: center;
            box-shadow: 0 8px 30px rgba(232, 24, 64, 0.3);
            margin-bottom: 50px;
            position: relative;
            overflow: hidden;
        }

        header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>');
            animation: sparkle 20s linear infinite;
        }

        @keyframes sparkle {
            0% { transform: translateX(0) translateY(0); }
            100% { transform: translateX(-100px) translateY(-100px); }
        }

        .header-content {
            position: relative;
            z-index: 2;
        }

        .header-content h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
            font-weight: 800;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            letter-spacing: -1px;
        }

        .header-content p {
            font-size: 1.3rem;
            opacity: 0.95;
            margin-bottom: 25px;
            font-weight: 300;
        }

        .header-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .header-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            backdrop-filter: blur(10px);
            animation: float 3s ease-in-out infinite;
        }

        .header-icon:nth-child(1) { animation-delay: 0s; }
        .header-icon:nth-child(2) { animation-delay: 0.5s; }
        .header-icon:nth-child(3) { animation-delay: 1s; }
        .header-icon:nth-child(4) { animation-delay: 1.5s; }
        .header-icon:nth-child(5) { animation-delay: 2s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .breadcrumb {
            background: white;
            padding: 15px 30px;
            border-radius: 50px;
            display: inline-block;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            margin-top: 20px;
        }

        .breadcrumb a {
            color: #e81840;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
            color: #c41437;
        }

        .sitemap-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .sitemap-section {
            background: white;
            border-radius: 20px;
            padding: 35px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border-top: 5px solid #e81840;
            position: relative;
            overflow: hidden;
        }

        .sitemap-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, rgba(232, 24, 64, 0.1), rgba(232, 24, 64, 0.05));
            border-radius: 0 20px 0 80px;
        }

        .sitemap-section:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(232, 24, 64, 0.15);
            border-top-color: #c41437;
        }

        .section-title {
            color: #e81840;
            font-size: 1.6rem;
            margin-bottom: 25px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 15px;
            position: relative;
            z-index: 2;
        }

        .section-icon {
            width: 45px;
            height: 45px;
            border: 1px solid #c41437;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 4px 15px rgba(232, 24, 64, 0.3);
        }

        .page-list {
            list-style: none;
            position: relative;
            z-index: 2;
        }

        .page-list li {
            margin-bottom: 15px;
            padding-left: 25px;
            position: relative;
            transition: all 0.3s ease;
        }

        .page-list li:before {
            content: '▶';
            color: #e81840;
            position: absolute;
            left: 0;
            top: 2px;
            font-size: 12px;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .page-list li:hover:before {
            transform: translateX(5px) scale(1.2);
            color: #c41437;
        }

        .page-list a {
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            display: block;
            padding: 8px 0;
            border-radius: 8px;
            padding-left: 10px;
        }

        .page-list a:hover {
            color: #e81840;
            background: rgba(232, 24, 64, 0.05);
            padding-left: 20px;
            font-weight: 600;
        }

        .main-pages {
            grid-column: 1 / -1;
            background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
        }

        .main-pages .page-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .main-pages .page-list li {
            background: white;
            padding: 20px;
            border-radius: 15px;
            border-left: 5px solid #e81840;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            margin-bottom: 0;
        }

        .main-pages .page-list li:hover {
            background: #fff;
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(232, 24, 64, 0.15);
            border-left-color: #c41437;
        }

        .main-pages .page-list li:before {
            display: none;
        }

        .main-pages .page-list a {
            font-size: 1.1rem;
            font-weight: 600;
            padding: 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .main-pages .page-list a:before {
            content: '🏠';
            font-size: 18px;
        }

        .main-pages .page-list li:nth-child(2) a:before { content: '🏢'; }
        .main-pages .page-list li:nth-child(3) a:before { content: '📦'; }
        .main-pages .page-list li:nth-child(4) a:before { content: '🏅'; }
        .main-pages .page-list li:nth-child(5) a:before { content: '🌍'; }
        .main-pages .page-list li:nth-child(6) a:before { content: '📝'; }
        .main-pages .page-list li:nth-child(7) a:before { content: '📞'; }

        .category-stats {
            margin-top: 20px;
            padding: 15px;
            background: rgba(232, 24, 64, 0.05);
            border-radius: 10px;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .category-stats span {
            color: #e81840;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .footer-info {
            text-align: center;
            margin-top: 60px;
            padding: 40px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
            border-top: 5px solid #e81840;
        }

        .footer-info h3 {
            color: #e81840;
            margin-bottom: 20px;
            font-size: 1.8rem;
            font-weight: 700;
        }

        .footer-info p {
            color: #666;
            margin-bottom: 15px;
            font-size: 1.1rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .footer-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .footer-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #e81840, #c41437);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            transition: all 0.3s ease;
        }

        .footer-icon:hover {
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 20px rgba(232, 24, 64, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .sitemap-grid {
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            .header-content h1 {
                font-size: 2.5rem;
            }

            .header-content p {
                font-size: 1.1rem;
            }

            .sitemap-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .main-pages .page-list {
                grid-template-columns: 1fr;
            }

            .sitemap-section {
                padding: 25px;
            }

            .section-title {
                font-size: 1.4rem;
            }

            .header-icons {
                gap: 15px;
            }

            .header-icon {
                width: 45px;
                height: 45px;
                font-size: 18px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 40px 0;
            }

            .header-content h1 {
                font-size: 2rem;
            }

            .header-content p {
                font-size: 1rem;
            }

            .section-title {
                font-size: 1.3rem;
                gap: 10px;
            }

            .section-icon {
                width: 40px;
                height: 40px;
                font-size: 16px;
            }

            .breadcrumb {
                padding: 12px 25px;
                font-size: 0.9rem;
            }

            .sitemap-section {
                padding: 20px;
            }

            .main-pages .page-list li {
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <h1>Website Sitemap</h1>
                <p>Complete Navigation Guide for Premium Export Products</p>
                <div class="header-icons">
                    <div class="header-icon">🌶️</div>
                    <div class="header-icon">🥜</div>
                    <div class="header-icon">🌾</div>
                    <div class="header-icon">🧄</div>
                    <div class="header-icon">🌿</div>
                </div>
                <div class="breadcrumb">
                    <a href="https://thebrillianceinternational.com/">Home  / Sitemap</a>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="sitemap-grid">
            <!-- Main Pages Section -->
            <div class="sitemap-section main-pages">
                <h2 class="section-title">
                    <span class="section-icon">🏠</span>
                    Main Pages
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/">Home</a></li>
                    <li><a href="https://thebrillianceinternational.com/about-us">About Us</a></li>
                    <li><a href="https://thebrillianceinternational.com/#">Products</a></li>
                    <li><a href="https://thebrillianceinternational.com/certifications">Quality & Certifications</a></li>
                    <li><a href="https://thebrillianceinternational.com/global-market">Global Market</a></li>
                    <li><a href="https://thebrillianceinternational.com/products-enquiry">Products Enquiry</a></li>
                    <li><a href="https://thebrillianceinternational.com/contact-us">Contact Us</a></li>
                </ul>
            </div>

            <!-- Spices Section -->
            <div class="sitemap-section">
                <h2 class="section-title">
                    <span class="section-icon">🌶️</span>
                    Spices & Powders
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/turmericpowder">Turmeric Powder</a></li>
                    <li><a href="https://thebrillianceinternational.com/redchilipowder">Red Chili Powder</a></li>
                    <li><a href="https://thebrillianceinternational.com/cuminpowder">Cumin Powder</a></li>
                    <li><a href="https://thebrillianceinternational.com/corianderpowder">Coriander Powder</a></li>
                    <li><a href="https://thebrillianceinternational.com/gingerpowder">Ginger Powder</a></li>
                </ul>
                <div class="category-stats">
                    <span>5 Premium Spices Available</span>
                </div>
            </div>

            <!-- Seeds Section -->
            <div class="sitemap-section">
                <h2 class="section-title">
                    <span class="section-icon">🌾</span>
                    Seeds & Grains
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/cuminseed">Cumin Seeds</a></li>
                    <li><a href="https://thebrillianceinternational.com/fennelseed">Fennel Seeds</a></li>
                    <li><a href="https://thebrillianceinternational.com/sesame">Sesame Seeds</a></li>
                    <li><a href="https://thebrillianceinternational.com/peanuts">peanuts</a></li>
                    <li><a href="https://thebrillianceinternational.com/cotton">Cotton Seeds</a></li>
                    <li><a href="https://thebrillianceinternational.com/castor">Castor Seeds</a></li>
                </ul>
                <div class="category-stats">
                    <span>6 Quality Seeds Available</span>
                </div>
            </div>

            <!-- Pulses Section -->
            <div class="sitemap-section">
                <h2 class="section-title">
                    <span class="section-icon">🫘</span>
                    Pulses & Legumes
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/chickpeas">Chickpeas (Chana)</a></li>
                    <li><a href="https://thebrillianceinternational.com/wheat">Wheat</a></li>
                    <li><a href="https://thebrillianceinternational.com/rice">Rice</a></li>
                    <li><a href="https://thebrillianceinternational.com/corn">corn</a></li>
                </ul>
                <div class="category-stats">
                    <span>4 Nutritious Pulses Available</span>
                </div>
            </div>

            <!-- Vegetables Section -->
            <div class="sitemap-section">
                <h2 class="section-title">
                    <span class="section-icon">🧅</span>
                    Fresh Vegetables
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/onion">Fresh Onions</a></li>
                    <li><a href="https://thebrillianceinternational.com/potato">Potatoes</a></li>
                    <li><a href="https://thebrillianceinternational.com/garlic">Fresh Garlic</a></li>
                </ul>
                <div class="category-stats">
                    <span>3 Fresh Vegetables Available</span>
                </div>
            </div>

            <!-- Services Section -->
            <div class="sitemap-section">
                <h2 class="section-title">
                    <span class="section-icon">⚙️</span>
                    Building Materials
                </h2>
                <ul class="page-list">
                    <li><a href="https://thebrillianceinternational.com/tileadhesive">Tile Adhesive</a></li>
                    <li><a href="https://thebrillianceinternational.com/kitchensink">Kitchensink</a></li>
                    <li><a href="https://thebrillianceinternational.com/louvers">Louvers</a></li>
                    <li><a href="https://thebrillianceinternational.com/tiles">Tiles</a></li>
                </ul>
                <div class="category-stats">
                    <span>4 Professional Services</span>
                </div>
            </div>
        </div>

        <!-- Footer Information -->
        <div class="footer-info">
            <h3>Brilliance International</h3>
            <p>Your trusted global partner for premium quality spices, seeds, nuts, and agricultural products</p>
            <p>Committed to excellence in export services with international quality standards and timely delivery worldwide</p>
            <div class="footer-icons">
                <div class="footer-icon">🌍</div>
                <div class="footer-icon">📦</div>
                <div class="footer-icon">⭐</div>
                <div class="footer-icon">🚚</div>
                <div class="footer-icon">✅</div>
            </div>
        </div>
    </div>

    <script>
        // Add interactive features
        document.addEventListener('DOMContentLoaded', function() {
            // Add click effects to section icons
            const sectionIcons = document.querySelectorAll('.section-icon');
            sectionIcons.forEach(icon => {
                icon.addEventListener('click', function() {
                    this.style.transform = 'scale(1.2) rotate(360deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                });
            });

            // Add smooth scrolling for internal links
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            internalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add loading animation for external links
            const externalLinks = document.querySelectorAll('a[href^="/"]');
            externalLinks.forEach(link => {
                link.addEventListener('click', function() {
                    this.style.opacity = '0.7';
                    this.innerHTML += ' <span style="font-size: 0.8em;">⏳</span>';
                });
            });
        });
    </script>
</body>
</html>
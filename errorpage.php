<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | Seeds Nuts Spices Export</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: radial-gradient(circle at 20% 50%, rgba(232, 24, 64, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(232, 24, 64, 0.2) 0%, transparent 50%),
                        linear-gradient(135deg, #2a2a2a 0%, #3d2b2b 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            overflow-x: hidden;
        }

        .container {
            text-align: center;
            max-width: 600px;
            padding: 2rem;
            position: relative;
            z-index: 2;
        }

        .error-code {
            font-size: 8rem;
            font-weight: 900;
            text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
            margin-bottom: 1rem;
            animation: bounce 2s infinite;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .error-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .error-message {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            line-height: 1.6;
        }

        .spice-icons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
            animation: float 3s ease-in-out infinite;
        }

        .spice-icon {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease;
        }

        .spice-icon:hover {
            transform: scale(1.1) rotate(10deg);
        }

        .btn-home {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            border: 2px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            margin: 1rem 0.5rem;
        }

        .btn-home:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        }

        .floating-spice {
            position: absolute;
            opacity: 0.5;
            font-size: 2rem;
            animation: float-around 15s infinite linear;
        }

        .floating-spice:nth-child(1) {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-spice:nth-child(2) {
            top: 20%;
            right: 10%;
            animation-delay: 3s;
        }

        .floating-spice:nth-child(3) {
            bottom: 20%;
            left: 15%;
            animation-delay: 6s;
        }

        .floating-spice:nth-child(4) {
            bottom: 10%;
            right: 20%;
            animation-delay: 9s;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes float-around {
            0% {
                transform: translateY(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-20px) rotate(90deg);
            }
            50% {
                transform: translateY(0px) rotate(180deg);
            }
            75% {
                transform: translateY(-20px) rotate(270deg);
            }
            100% {
                transform: translateY(0px) rotate(360deg);
            }
        }

        @media (max-width: 768px) {
            .error-code {
                font-size: 6rem;
            }

            .error-title {
                font-size: 2rem;
            }

            .error-message {
                font-size: 1rem;
            }

            .container {
                padding: 1rem;
            }

            .spice-icons {
                gap: 1rem;
            }

            .spice-icon {
                width: 50px;
                height: 50px;
                font-size: 1.5rem;
            }

            .btn-home {
                padding: 0.8rem 2rem;
                font-size: 1rem;
                margin: 0.5rem 0.25rem;
            }
        }

        @media (max-width: 480px) {
            .error-code {
                font-size: 4.5rem;
            }

            .error-title {
                font-size: 1.5rem;
            }

            .spice-icons {
                flex-wrap: wrap;
                gap: 0.5rem;
            }

            .btn-home {
                display: block;
                margin: 0.5rem 0;
            }
        }
    </style>
</head>
<body>
    <div class="floating-elements">
        <div class="floating-spice">🥔</div>
        <div class="floating-spice">🌎</div>
        <div class="floating-spice">🍒</div>
        <div class="floating-spice">🍅</div>
        <div class="floating-spice">🍚</div> 
    </div>

    <div class="container">
        <div class="error-code">404</div>
        <h1 class="error-title">Oops! Page Not Found</h1>
        <p class="error-message">
            Looks like this page got lost in our spice warehouse! 
            The page you're looking for might have been moved, deleted, or doesn't exist.
        </p>
        
        <div class="spice-icons">
            <div class="spice-icon">🌶️</div>
            <div class="spice-icon">🥜</div>
            <div class="spice-icon">🌿</div>
            <div class="spice-icon">⭐</div>
            
        </div>

        <div class="action-buttons">
            <a href="https://thebrillianceinternational.com/" class="btn-home">🏠 Back to Home</a>
            <a href="https://thebrillianceinternational.com/products-enquiry" class="btn-home btn-secondary">🛍️ Products Enquiry</a>
        </div>
    </div>

    <script>
        // Add some interactive sparkle effect on mouse move
        document.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.9) {
                createSparkle(e.clientX, e.clientY);
            }
        });

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.background = 'white';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkleAnimation 1s ease-out forwards';
            sparkle.style.zIndex = '1000';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                document.body.removeChild(sparkle);
            }, 1000);
        }

        // Add sparkle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkleAnimation {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(1) rotate(180deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>
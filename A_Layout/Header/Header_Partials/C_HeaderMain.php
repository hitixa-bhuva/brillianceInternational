<?php
$page = basename($_SERVER["PHP_SELF"]);
echo '
<body>
<!-- Loader Section -->
<div id="loader">
  <img src="./images/logo/png/red-favicon.png" alt="Brilliance International" class="loader-logo" />
</div>

	<!-- page wrapper -->
	<div class="page-wrapper" id="page">
		<!-- Header Main Area -->
		<header class="site-header header-style-1">
			<div class="pbmit-header-overlay">
				<div class="pbmit-main-header-area">
					<div class="container-fluid">
						<div class="pbmit-header-content d-flex justify-content-between align-items-center">
							<div class="site-branding">
								<h1 class="site-title">
									<a href="home">
										<img class="logo-img w-100 h-100" src="./images/logo/png/red-white.png"
											alt="Xleb" />
									</a>
								</h1>
							</div>
							<div class="site-navigation">
								<nav class="main-menu navbar-expand-xl navbar-light">
									<div class="navbar-header">
										<!-- Toggle Button -->
										<button class="navbar-toggler" type="button">
											<i class="pbmit-base-icon-menu-1"></i>
										</button>
									</div>
									<div class="pbmit-mobile-menu-bg"></div>
									<div class="collapse navbar-collapse clearfix show" id="pbmit-menu">
										<div class="pbmit-menu-wrap">
											<span class="closepanel">
												<svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg"
													width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
													<rect width="36" height="1" transform="translate(0.707) rotate(45)">
													</rect>
													<rect width="36" height="1"
														transform="translate(0 25.456) rotate(-45)"></rect>
												</svg>
											</span>
											<ul class="navigation clearfix">
												<li class=" ' ?><?php if ($page == "index.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="home">Home</a>
												</li>
												<li class=" ' ?><?php if ($page == "about-us.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="about-us">About Us</a>
												</li>

											<li class="dropdown main-dropdown ' ?><?php if ($page == "castor.php" || $page == "chickpeas.php" || $page == "corianderpowder.php" || $page == "corn.php" || $page == "cotton.php" || 
    $page == "cuminpowder.php" || $page == "cuminSeed.php" || 
    $page == "fennelSeed.php" || $page == "garlic.php" || $page == "gingerpowder.php" || 
    $page == "kitchensink.php" || $page == "louvers.php" || $page == "onion.php" || 
    $page == "peanuts.php" || $page == "potato.php" || $page == "redchilipowder.php" || 
    $page == "rice.php" || $page == "sesame.php" || $page == "tileadhesive.php" || 
    $page == "turmericpowder.php" || $page == "wheat.php") {
                                         echo 'active';
                                     } ?><?php echo '" aria-current="page">
											   <a href="#">Products</a>
											   <ul class="submenu">
												  <li class="dropdown ' ?><?php if ($page == "corianderpowder.php" || $page == "cuminpowder.php" || $page == "gingerpowder.php" || $page == "redchilipowder.php" || $page == "turmericpowder.php" ) {
                                         echo 'active';
                                     } ?><?php echo '" aria-current="page">
											         <div class="menu-item">
											            <span>Spices</span>
											            <span class="arrow d-none"><i class="pbmit-base-icon-angle-right"></i></span>
											         </div>
											          <ul class="submenu">
											            <li class="' ?><?php if ($page == "turmericpowder.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="turmericpowder">Turmeric Powder</a></li>
											            <li class="' ?><?php if ($page == "redchilipowder.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="redchilipowder">Red Chili Powder</a></li>
											            <li class="' ?><?php if ($page == "cuminpowder.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="cuminpowder">Cumin Powder</a></li>
											            <li class="' ?><?php if ($page == "corianderpowder.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="corianderpowder">Coriander Powder</a></li>
											            <li class="' ?><?php if ($page == "gingerpowder.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="gingerpowder">Ginger Powder</a></li>
											         </ul>
											      </li>
											      <li class="dropdown  ' ?><?php if ($page == "castor.php" || $page == "cotton.php" || $page == "cuminSeed.php" || $page == "fennelSeed.php" ||$page == "peanuts.php" || $page == "sesame.php") {
                                         echo 'active';
                                     } ?><?php echo '" aria-current="page">
											         <div class="menu-item">
											            <span>Seeds</span>
											            <span class="arrow d-none"><i class="pbmit-base-icon-angle-right"></i></span>
											         </div>
											         <ul class="submenu">
											            <li class="' ?><?php if ($page == "cuminSeed.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="cuminseed">Cumin Seed</a></li>
											            <li class="' ?><?php if ($page == "fennelSeed.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="fennelseed">Fennel Seed</a></li>
											            <li class="' ?><?php if ($page == "peanuts.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="peanuts">Peanuts</a></li>
											            <li class="' ?><?php if ($page == "castor.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="castor">Castor</a></li>
											            <li class="' ?><?php if ($page == "cotton.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="cotton">Cotton</a></li>
											            <li class="' ?><?php if ($page == "sesame.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="sesame">Sesame</a></li>
											         </ul>
											      </li>
											      <li class="dropdown ' ?><?php if ( $page == "corn.php" || $page == "rice.php" || $page == "wheat.php") {
                                         echo 'active';
                                     } ?><?php echo '">
											         <div class="menu-item">
											            <span>Grains & Pulses</span>
											            <span class="arrow d-none"><i class="pbmit-base-icon-angle-right"></i></span>
											         </div>
											         <ul class="submenu">
											            <li class="' ?><?php if ($page == "wheat.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="wheat">Wheat</a></li>
											            <li class="' ?><?php if ($page == "rice.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="rice">Rice</a></li>
											            <li class="' ?><?php if ($page == "corn.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="corn">Corn</a></li>
											            <li class="' ?><?php if ($page == "chickpeas.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="chickpeas">Chickpeas</a></li>
											         </ul>
											      </li>
											      <li class="dropdown ' ?><?php if ($page == "garlic.php" || $page == "onion.php" || $page == "potato.php") {
                                         echo 'active';
                                     } ?><?php echo '" aria-current="page">
											         <div class="menu-item">
							 				            <span>Vegetables</span>
											            <span class="arrow d-none"><i class="pbmit-base-icon-angle-right"></i></span>
											         </div>
											         <ul class="submenu">
											            <li class="' ?><?php if ($page == "onion.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="onion">Onion</a></li>
											        
								 <li  class="' ?><?php if ($page == "potato.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="potato">Potato</a></li>
											            <li  class="' ?><?php if ($page == "garlic.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="garlic">Garlic</a></li>
											         </ul>
											      </li>
											      <li class="dropdown ' ?><?php if ($page == "kitchensink.php" || $page == "louvers.php" ||  $page == "tileadhesive.php") {
                                         echo 'active';
                                     } ?><?php echo '"  aria-current="page">
											         <div class="menu-item">
											            <span>Building Materials</span>
											            <span class="arrow d-none"><i class="pbmit-base-icon-angle-right"></i></span>
											         </div>
											         <ul class="submenu">
											            <li class="' ?><?php if ($page == "tileadhesive.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="tileadhesive">Tile Adhesive</a></li>
											            <li class="' ?><?php if ($page == "kitchensink.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="kitchensink">Kitchen Sink</a></li>
											            <li class="' ?><?php if ($page == "louvers.php") {
                                    echo 'active';
                                } ?><?php echo '"><a href="louvers">Louvers</a></li>
											         </ul>
											      </li>
											   </ul>
											</li>

												<li class="' ?><?php if ($page == "certifications.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="certifications">certifications</a>
												</li>
												<li class="' ?><?php if ($page == "GlobalMarket.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="global-market">Global Market</a>
												</li>
												<li class="' ?><?php if ($page == "ProductsEnquiry.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="products-enquiry">Products Enquiry</a>
												</li>
												<li class="d-none small-block-section ' ?><?php if ($page == "contact-us.php") {
                                    echo 'active';
                                } ?><?php echo '">
													<a href="contact-us">Contact Us</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
							<div class="pbmit-right-box d-flex align-items-center">
								<div class="pbmit-header-button2">
									<a class="pbmit-btn pbmit-btn-white" href="contact-us">
										<span class="pbmit-button-content-wrapper">
											<span class="pbmit-button-text">Contact Us</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
';
?>

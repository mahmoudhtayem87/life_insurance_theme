<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${html_title}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
	<!-- Icon Font Css -->
  <link rel="stylesheet" href="${javascript_folder}/custom/plugins/icofont/icofont.min.css">
  <!-- Slick Slider  CSS -->
  <link rel="stylesheet" href="${javascript_folder}/custom/plugins/slick-carousel/slick/slick.css">
  <link rel="stylesheet" href="${javascript_folder}/custom/plugins/slick-carousel/slick/slick-theme.css">
</head>

<body class="${css_class}" id="top">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<div class="d-flex flex-column min-vh-100">
	<@liferay.control_menu />
	<div class="d-flex flex-column flex-fill" id="wrapper">
		<section class="${portal_content_css_class} flex-fill" id="content">
			<h2 class="sr-only" role="heading" aria-level="1">${the_title}</h2>
			<#if selectable>
				<@liferay_util["include"] page=content_include />
			<#else>
				${portletDisplay.recycle()}

				${portletDisplay.setTitle(the_title)}

				<@liferay_theme["wrap-portlet"] page="portlet.ftl">
					<@liferay_util["include"] page=content_include />
				</@>
			</#if>
		</section>
	</div>
</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />
	
	<script src="${javascript_folder}/custom/plugins/bootstrap/js/popper.js"></script>
    <!--
	<script src="${javascript_folder}/custom/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="${javascript_folder}/custom/plugins/counterup/jquery.easing.js"></script>
	-->
    <!-- Slick Slider -->
    <script src="${javascript_folder}/custom/plugins/slick-carousel/slick/slick.min.js"></script>
    <!-- Counterup -->
    <script src="${javascript_folder}/custom/plugins/counterup/jquery.waypoints.min.js"></script>
    
    <script src="${javascript_folder}/custom/plugins/shuffle/shuffle.min.js"></script>
    <script src="${javascript_folder}/custom/plugins/counterup/jquery.counterup.min.js"></script>
    <!-- Google Map -->
    <script src="${javascript_folder}/custom/plugins/google-map/map.js"></script>
   
    <script src="${javascript_folder}/custom/js/script.js"></script>
</body>

</html>
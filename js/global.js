//Open external links in new tabs
$(function() {
	var website = window.location.hostname,
		internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
									 + website
									 + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');
	$('a')
		.filter(function() {
			return !internalLinkRegex.test($(this).attr('href'));
		})
		.attr('target', '_blank');
})
//Google Analytics
$(function(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-86542874-1', 'auto');
	ga('send', 'pageview');
})
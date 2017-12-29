$(function(){
	var offsets,
		updateLock = false,
		$tabs = $("nav #tabs a[anchor]"),
		$sections = $("section.nav-anchor")
	$(document)
		.scroll(updateIndicator)
	$(window)
		.resize(updateOffsets)

	$tabs.click(function(e){
		e.preventDefault();
		updateLock = true;
		selectIndicator($(this).index())
		$("html, body")
			.stop()
			.animate({scrollTop: offsets[$(this).index()]}, function(){updateLock = false})
	})
	function updateOffsets(){
		offsets = []
		$sections.each(function(){
			offsets.push($(this).offset().top)
		})
		updateIndicator()
	}
	updateOffsets();

	function updateIndicator(){
		if(!updateLock){
			selectIndicator()
			var scrollTop = $(document).scrollTop();
			for(var i=offsets.length-1; i>=0; i--){
				if(scrollTop >= offsets[i] - 100){
					selectIndicator(i)
					break
				}
			}
		}
	}

	function selectIndicator(index){
		$tabs
			.attr("selected", null)
			.eq(index)
			.attr("selected", "true")
	}

	history.replaceState("", document.title, window.location.pathname);
})
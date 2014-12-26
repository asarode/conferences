$(document).ready(function() {


	var getMarginPush = function(fullHeight, contentHeight) {
		var marginPush = (fullHeight / 2) - (contentHeight / 2)
		return marginPush
	}


	var centerContent  = function() {
		var fullHeight = $("body").height()
		var contentHeight = $(".main-panel").height()
		var marginPush = getMarginPush(fullHeight, contentHeight)
		console.log(fullHeight)
		console.log(contentHeight)
		if (fullHeight > contentHeight) {
			$(".main-panel").css("margin-top", marginPush)
		} else {
			$(".main-panel").css("margin-top", "5vh")
			$(".main-panel").css("margin-bottom", "5vh")
		}
		
	}

	centerContent()


	$(window).resize(function() {
		centerContent()
	})

	

})
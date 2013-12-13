/**
 * Share Your Tip
 * Module for showing and hiding a div
 */
var shareYourTip = function() {
	var button = $("button#shareYourTip");
	var form = $("div.shareYourTip");
	var position = button.offset();
	position["top"] += button.height() + 35;
	position["left"] -= (form.width() / 3) + 10;
	form.css(position);
	button.on("click", function() {
		event.preventDefault();
		if(button.hasClass("closed")) {
			button.text("Share Your Tip");
			form.hide();
		} else {
			button.text("Close");
			form.show();
		}
		button.toggleClass("closed");
	});
	form.find("input, textarea").each(function() {
		$(this).val($("label[for='" + this.id + "']").text()).on("click", function() {
			if(!$(this).data("used")) {
				$(this).data("used", true);
				$(this).val("");
			}
		})
		.on("blur", function() {
			if($(this).val() == "") {
				$(this).data("used", false);
				$(this).val($("label[for='" + this.id + "']").text());
			}
		});
	});
	form.find("a.close, button").on("click", function() {
		button.text("Share Your Tip");
		button.toggleClass("closed");
		event.preventDefault();
		form.hide();
	})
	return {
		"button" : button,
		"form" : form
	}
}();
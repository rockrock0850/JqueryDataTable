//# sourceURL=contact.js
var contact = function () {
	
	var bootstrap = function () {
		$('button#sendEmailBtn').click(function () {
			var emailMe = 'form#emailMeForm';
			
			if (inputValidation($(emailMe));) {
				$(emailMe)
					.attr('action', 'mailto:b96170094@gmail.com')
					.submit();
			}
		});
	}
	
	function inputValidation ($form) {
		var inputs = $form.find('input');
		
		if (!inputs || inputs.length <= 0) {
			alert('Please type complete infomation at the form.');
			return false;
		}
		
		return true;
	}
	
	return {
		bootstrap: bootstrap
	}
}();

$(function () {
	contact.bootstrap();
});
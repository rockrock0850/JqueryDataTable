//# sourceURL=sdf.js
var contact = function () {
	
	var bootstrap = function () {
		$('button#sendEmailBtn').click(function () {
			var emailMe = 'form#emailMeForm';
			
			if (inputValidation($(emailMe))) {
				$(emailMe)
					.attr('action', 'mailto:b96170094@gmail.com')
					.submit();
			}
		});
	}
	
	function inputValidation ($form) {
		var result = true;
		var inputs = 'input,textarea';
		
		$form.find(inputs).each(function () {
			if (!$(this).val()) {
				alert('Please type complete infomation at the form.');
				result = false;
				
				return false;
			}
		});
		
		return result;
	}
	
	return {
		bootstrap: bootstrap
	}
}();

$(function () {
	contact.bootstrap();
});
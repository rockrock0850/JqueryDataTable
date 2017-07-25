//# sourceURL=contact.js
var contact = function () {
	var inputValidation = function ($form) {
		$form.find('input');
	}
	
	return {
		bootstrap: function () {
			$('button#sendEmailBtn').click(function () {
				inputValidation();
				
				var $emailMeForm =  $('form#emailMeForm');
				$emailMeForm.attr('action', 'https://formspree.io/b96170094@gmail.com');
				$emailMeForm.submit();
			});
		}
	}
}()

$(document).ready(function() {
	contact.bootstrap();
	
	var Person = function () {
		this.head = 1;
		this.hands = 2;
		this.feats = 2;
		this.body = 1;
	}
	
	Person.prototype = {
		eat: function () {
			return 'Eating...';
		}, 
		talk: function () {
			return 'Talking...';
		},
		think: function () {
			return 'Thinking...';
		}
	}
	
	var John = function () {
		Person.call(this);
	}
	// John.prototype = Person.prototype;
	John.prototype = new Person();
	
	var Adam = function () {
		Person.call(this);
	}
	Adam.prototype = Person.prototype;
	// Adam.prototype = new Person();
	
	var person1 = new John();
	var person2 = new Adam();
	
	Person.prototype.eat = function () {
		return 'test...';
	}
	
	console.log(person1.eat());
	console.log(person2.eat());
	
	John.prototype.eat = function () {
		return 'test2...';
	}
	
	console.log(person1.eat());
	console.log(person2.eat());
});
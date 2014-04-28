var checkUsername = function() {
	var $username = $('.uname')
	  , $imageHolder = $('#imagePlaceHolder')
	  ,	$button = $('.create-button');
	$username.blur(function(e) {
		$.ajax({
			type: 'GET'
				, url: '/api/user/' + $username.val()
		}).done(function(found) {
			if (found == '1') {
				$imageHolder
					.html('<img src="http://spbooks.github.com/nodejs1/cross.png" alt="cross"> Username already taken');
				$button.addClass('disabled')
					.attr('disabled', true);
			}
			else {
				$imageHolder.html('<img src="http://spbooks.github.com/nodejs1/tick.png" alt="tick">');
				$button.removeClass('disabled')
					.attr('disabled', false);
			}
		});
	});
};

$(document).ready(function() {
	checkUsername();
});
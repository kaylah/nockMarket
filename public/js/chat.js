var socket = io.connect('http://localhost');

$(document).ready(function() {
	$('.chat-widget').hide();
	$('#join-chat').click(function() {
		$('#join-chat').hide();
		$('.chat-widget').show();
		socket.emit('joined', {});
	});
	$('#send-chat').click(function() {
		socket.emit('clientchat', { message: $('#input01').val() });
	});
	socket.on('chat', function(data) {
		$('#textarea').prepend(data.message);
	})
});
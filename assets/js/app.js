$(function() {
  var socket = io('http://34.227.11.223:3000');

  
  $('form').submit(function() {
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
        return false;
  });
  socket.on('chat message', function(msg) {
    var user = $('#user').val();
    var msj = $('.mess').val();
    $('#chat').append/*($('<li>').text(msg));*/('<li>' + user 
      + ' <span class="glyphicon glyphicon-console" aria-hidden="true"></span> ' 
      + msg + '</li>');
    $('#user').val('');
    //window.scrollTo(0, document.body.scrollHeight);
  });
});



/*

$(document).ready(function(){
  var socket = io.connect();
  var messageForm = $('#sendMessage');
  var message = $('#message');
  var chat = $('#chat');

  
  var nickname = $('#nickname');
  var setNick = $('#setNick');
  var users = $('#users');

setNick.click(function(e) {
  
  e.preventDefault();
  socket.emit('newUser', nickname.val(), function(data){
    if (data) {
      $('#nickContainer').hide();
      $('#cont-chat').show();
    } else {
      $('#login-error').show();
    }
  });
});

messageForm.submit(function(e) {
    
    e.preventDefault();
    if(message.val() != '') socket.emit('sendMessage', message.val());
    message.val('');
  });
  socket.on('newMessage', function(data) {
    chat.append(data.nick + ' - ' + data.msg + '<br/>');
  });
  socket.on('usernames', function(data) {
  var usernamesString = '';
  for (var usernames in data) {
    usernamesString += usernames + '<br/>';
  } 
  users.html(usernamesString);
})

});
*/
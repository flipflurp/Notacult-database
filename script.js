var enteredCode ='';

$('#login').submit(function(){
  
  if($('#password').val() =='bcghjmpt'){
    $('#login').hide();
    $('#searchbar').show();
    $('#notif').text('');
  }
  else{
    $('#notif').text('Password is incorrect');

  }
  $('#password').val('');
  return false;
});


$('#searchbar').submit(function(){
  enteredCode = $('#code').val().toLowerCase();
  $('#result').show();
  $('#notif').text('');
  if(enteredCode == 'balls'){
    $('#result').attr('src','Images/Convo1.jpeg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','Images/Convo2.jpeg');
  }
  else if(enteredCode == 'chocolate'){
    $('#result').attr('src','Images/Convo3.jpeg');
  }
  else if(enteredCode == 'gnieb hc tirdle'){
    $('#result').attr('src','Images/RedactedImage.png');
  }
  else{
    $('#result').hide();
    $('#notif').text('No result found');
    $('#code').val('');
    return false;
  }
  $('#code').val('');
  return false;
});

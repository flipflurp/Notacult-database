var enteredCode ='';

$('#login').submit(function(){
  
  if($('#password').val() =='bcghjmpt'){
    $('#login').hide();
    $('#searchbar').show();
    $('#result').attr('alt','');
  }
  else{
    $('#result').attr('alt','Password is incorrect');

  }
  $('#password').attr('value','');
  return false;
});


$('#searchbar').submit(function(){
  enteredCode = $('#code').val().toLowerCase();
  if(enteredCode == 'balls'){
    $('#result').attr('src','Images/Convo1.jpeg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','Images/Convo2.jpeg');
  }
  else if(enteredCode == 'chocolate'){
    $('#result').attr('src','Images/Convo3.jpeg')
  }
  else if((enteredCode).is(':contains("gnieb")')){
    $('#result').attr('src','Images/RedactedImage.png')
  }
  else{
    $('result').attr('alt','No result found');
  }
  $('#code').val('');
  return false;
});

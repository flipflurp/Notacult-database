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
    $('#result').attr('src','Images/Puppy.jpg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','Images/hugh jackman (1).PNG');
  }
  else{
    $('result').attr('alt','No result found');
  }
  $('#code').val('');
  return false;
});

var enteredCode ='';
$('#login).submit(function(){
  if(('#password').val =='bcghjmpt'){
    $('#login').hide();
    $('#searchbar').show();
  }
});
$('#code').submit(function(){
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
});

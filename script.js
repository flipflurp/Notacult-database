var enteredCode ='';
$('#queryBtn').click(function(){
  enteredCode = $('#code').val().toLowerCase();
  if(enteredCode == 'balls'){
    $('#result').attr('src','Puppy.jpg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','hugh jackman (1).PNG');
  }
  else{
    $('result').attr('alt','No result found');
  }
});

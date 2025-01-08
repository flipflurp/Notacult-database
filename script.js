var enteredCode ='';
$('#queryBtn').click(function(){
  enteredCode = $('#code').val();
  if(enteredCode == 'balls'){
    $('#result').attr('src','Puppy.jpg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','hugh jackman (1).PNG');
  }
});

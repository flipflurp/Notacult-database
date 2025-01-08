var enteredCode ='';
$('#queryBtn').click(function(){
  enteredCode = $('#code').val();
  if(enteredCode == 'balls'){
    $('#result').text('balls');
  }
  else if(enteredCode == 'meow'){
    $('#result').text('meow');
  }
});

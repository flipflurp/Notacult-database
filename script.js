var enteredCode ='';
$('#queryBtn').click(function(){
  enteredCode = $('#code').val();
  if(enteredCode == 'balls'){
    $('#result').text('balls');
  }
});

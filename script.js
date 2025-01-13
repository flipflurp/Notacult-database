var enteredCode ='';

if(localStorage.getItem('loggedin') == 'true'){
  $('#logindiv').hide();
  $('#searchbardiv').show();
  $('#logoutbtn').show();
  $('#greetingname').text(localStorage.getItem('username'));
}
var users = {};
users['Maryland'] = 'bcghjmpt';
users['ADCarrie'] = 'bcghjmpt';
users['Jerry'] = 'bcghjmpt';
users['HarryCrotchGoblin'] = 'bcghjmpt';
users["BarryDepressed"] = 'bcghjmpt';
users['PerryThePlatypus'] = 'bcghjmpt';
users['Gary'] = 'bcghjmpt';
users['Terryble'] = 'bcghjmpt';








$('#login').submit(function(){
  if($('#username').val() in users){
    if(users[$('#username').val()] == $('#password').val()){
      localStorage.setItem('loggedin', 'true');
      localStorage.setItem('username', $('#username').val());
      location.reload();
    }
    else{
      $('#username').css('background-color','rgb(70, 70, 145)')
      $('#password').attr('placeholder','');
      $('#password').css('background-color','rgb(220,100,130)');
      $('#password').val('');
    }
  }
  else{
    $('#username').attr('placeholder','');
    $('#username').css('background-color','rgb(220,100,130)');
    $('#username').val('');
    $('#password').val('');
    
  }
  
  
  return false;
});

$('#logoutbtn').click(function(){
  localStorage.setItem('loggedin', 'false');
  location.reload();
});



$('#searchbar').submit(function(){
  enteredCode = $('#code').val().toLowerCase();
  $('#result').show();
  $('#resultnotif').hide('');
  if(enteredCode == 'balls'){
    $('#result').attr('src','Convo1.jpeg');
  }
  else if(enteredCode == 'meow'){
    $('#result').attr('src','Convo2.jpeg');
  }
  else if(enteredCode == 'chocolate'){
    $('#result').attr('src','Convo3.jpeg');
  }
  else if(enteredCode == 'gnieb hc tirdle'){
    $('#result').attr('src','/RedactedImage.png');
  }
  else{
    $('#result').hide();
    $('#resultnotif').show();
    $('#code').val('');
    return false;
  }
  $('#code').val('');
  return false;
});

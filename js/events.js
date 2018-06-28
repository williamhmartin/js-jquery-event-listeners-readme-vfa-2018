//define functions here

$('p').on("click", function getIt(){
    alert('Hey!')
});

$('img').on("load", function frameIt(){
    'img.tasty';
});

$(document).on("keydown", function pressIt(key){
  if(key.which == 71); 
  });
  
  $("form").on("submit", function submitIt() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

// call functions here

getIt();
frameIt();
pressIt();
submitIt();
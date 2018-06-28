//define functions here

function getIt() {
  $('p').on("click", function (){
    alert('Hey!')
    }) 
}

function frameIt(){
$('img').on("load", function{
    $('img').addClass('tasty')
})
}

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
$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});



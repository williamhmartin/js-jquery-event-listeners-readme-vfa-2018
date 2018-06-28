//define functions here
$('p').on("click", function getIt(){
    alert('Hey!')
});
$('img').on("load", function frameIt(){
    'img.tasty'
});
$(document).on("keydown", function pressIt(){
  if(key.which == 71){
      alert('g was pressed');
  }
  $("form").on("submit", function submitIt() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
// call functions here

});

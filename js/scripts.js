$(document).ready(function() {
  $("#startbutton").click(function(event) {
  $(".popup").hide();
  $("#q1").fadeToggle();
  });

  $("#b1").click(function(event) {
    $("#q1").hide();
    $("#q2").fadeToggle();
  });
  $("#b2").click(function(event) {
    $("#q2").hide();
    $("#q3").fadeToggle();
  });
  $("#b3").click(function(event) {
    $("#q3").hide();
    $("#q4").fadeToggle();
  });
  $("#b4").click(function(event) {
    $("#q4").hide();
    $("#q5").fadeToggle();
  });

  $("#theQuiz").submit(function(event) {
   event.preventDefault();
   var a1 = parseInt($("input:radio[name=firstQuestion]:checked").val());
   var a2 = parseInt($("input:radio[name=secondQuestion]:checked").val());
   var a3 = parseInt($("input:radio[name=thirdQuestion]:checked").val());
   var a4 = parseInt($("input:radio[name=fourthQuestion]:checked").val());
   var a5 = parseInt($("input:radio[name=fifthQuestion]:checked").val());
   var result = a1 + a2 + a3 + a4 + a5;
   $("#q5").hide();
   $(".output").fadeToggle();
   outputFunction(result);
  });
});

function  outputFunction(result)  {
   if (result >= 4) {
    $(".resultA").show();
  } else if (result === 3 || result === 2){
    $(".resultB").show();
  } else {
    $(".resultC").show();
  }
}

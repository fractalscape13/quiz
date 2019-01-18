$(document).ready(function() {
  $("#startbutton").click(function(event) {
  $(".popup").hide();
  $("#q1").slideToggle();
  });

  $("#b1").click(function(event) {
    $("#q1").slideToggle();
    $("#q2").slideToggle();
  });
  $("#b2").click(function(event) {
    $("#q2").slideToggle();
    $("#q3").slideToggle();
  });
  $("#b3").click(function(event) {
    $("#q3").slideToggle();
    $("#q4").slideToggle();
  });
  $("#b4").click(function(event) {
    $("#q4").slideToggle();
    $("#q5").slideToggle();
  });

  $("#theQuiz").submit(function(event) {
   event.preventDefault();
   var a1 = parseInt($("input:radio[name=firstQuestion]:checked").val());
   var a2 = parseInt($("input:radio[name=secondQuestion]:checked").val());
   var a3 = parseInt($("input:radio[name=thirdQuestion]:checked").val());
   var a4 = parseInt($("input:radio[name=fourthQuestion]:checked").val());
   var a5 = parseInt($("input:radio[name=fifthQuestion]:checked").val());
   var result = a1 + a2 + a3 + a4 + a5;
   $("#q5").slideToggle();
   $(".output").fadeToggle();
   randomFunction(result);
  });
});

// function  randomFunction(result)  {
//    if (result >= 3) {
//     $(".resultA").show();
//   } else {
//     $(".resultB").show();
//   }

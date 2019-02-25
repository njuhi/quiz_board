$(document).ready(function(){
  $("form#test").submit(function(event){

    var answer1=parseInt($("input[type=radio][name=choice1]:checked").val());
    var answer2=parseInt($("input[type=radio][name=choice2]:checked").val());
    var answer3=parseInt($("input[type=radio][name=choice3]:checked").val());
    var answer4=parseInt($("input[type=radio][name=choice4]:checked").val());
    var answer5=parseInt($("input[type=radio][name=choice5]:checked").val());
    var answer6=parseInt($("input[type=radio][name=choice6]:checked").val());
    var total= answer1+answer2+answer3+answer4+answer5+answer6;
    document.getElementById('result').innerHTML="Your total is "+total+"%";

    window.scrollTo(0,1400);
    event.preventDefault();
  });
});

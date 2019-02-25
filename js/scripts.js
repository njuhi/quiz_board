$(documents).ready(function(){
  $("button#btn").click(function(event){

    event.preventDefault();
    var answer1=parseInt($("input[type=radio][name=choice1]:checked").val());
    var answer1=parseInt($("input[type=radio][name=choice2]:checked").val());
    var answer1=parseInt($("input[type=radio][name=choice3]:checked").val());
    var answer1=parseInt($("input[type=radio][name=choice4]:checked").val());
    var answer1=parseInt($("input[type=radio][name=choice5]:checked").val());
    var answer1=parseInt($("input[type=radio][name=choice6]:checked").val());
    var total=(answer1+answer2+answer3+answer4+answer5+answer6);
    document.getElementById('result').innerHTML="your score"+SCORE+"%"

  });
});

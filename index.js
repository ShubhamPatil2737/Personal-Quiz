var readlinesync = require('readline-sync');
var score = 0;
var UserAnswer = readlinesync.question("What is Your name ? ");

console.log("Welcome ! " + UserAnswer + " To do you know Shubham Patil ")
console.log("-------------------------------------------");
function play(question,answer){
  var UserAnswer = readlinesync.question(question);

  if (UserAnswer === answer){
    console.log("Right !");
    score++
  } else{
    console.log("Wrong !");
  }
}

  var questions = [{
    question:"Where do shubham live ? ",
    answer:"mumbai"
  },{
  question:"Who is shubham favourite super hero ? ",
  answer:"spiderman"
  },{
  question:"What is shubham's favourite dish ? ",
  answer:"mac and cheese pasta"
  },{
  question:"What is shubham's lucky number? ",
  answer:"7"
  }]

  for (i=0; i<questions.length; i++){
    var currentquestion = questions[i];
    play(currentquestion.question,currentquestion.answer);
  }
console.log("-------------------------------------------");
console.log("YAY ! You have scored : " + score );

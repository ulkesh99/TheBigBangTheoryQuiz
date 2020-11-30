var readlineSync = require("readline-sync")
var chalk = require("chalk")

var score = 0
var username = readlineSync.question(chalk.red("Enter your name here : "))

console.log(chalk.yellowBright.bold("Welcome" , username , "to The Big Bang Theory Quizzz....\n"))
console.log(chalk.whiteBright("\t\t\t\t\t*****Rules****** \n 1.Type your answers from the given options \n 2.For each right answer you score will be increased by 1 \n 3.For each wrong answer your score will be decreased by 1 \n"))


var highScores = [
  {
    name : "Ulkesh",
    score : 7
  },
  {
    name : "Tanay",
    score : 6
  }
]

function play(question,answer) {
  var userAnswer = readlineSync.question(chalk.cyan(question));

  if(userAnswer === answer){
    console.log(chalk.blue("You are Right :)"))
    score = score + 1;
  }else {
    console.log(chalk.red("Bazinga!Wrong answer...."))
    score = score - 1;
  }

  console.log("Current score : ",score)

  console.log(chalk.greenBright("*********************************************"))
}

var questions = [{
  question : "What type of scientists are Sheldon and Leonard ? \n a.Chemists \n b.Physicists \n c.Aerospace Engineers \n",
  answer: "Physicists"
}, {
  question : "Where does Penny work in the first seven series ? \n a.Dairy Queen \n b.The Ice-Cream Parlour \n c.The Cheesecake Factory \n",
  answer: "The Cheesecake Factory"
}, {
  question : "What is the name of Raj's dog ? \n a.Nutmeg \n b.Ginger \n c.Cinamon \n",
  answer: "Cinamon"
}, {
  question: "What number is Sheldon's apartment? \n a.2A \n b.3A \n c.4A \n",
  answer : "4A"
}, {
  question : "What does Sheldon's mom always call him? \n a.Shelly \n b.Pumpkin \n c.Shell \n",
  answer : "Shelly"
},{
  question : "What astronaut nickname was Howard given by his space friends? \n a.Howie \n b.Froot Loops \n c.Rocket Man \n ",
  answer : "Froot Loops"
}, {
  question : "What does Raj called his appartment in first few seasons ? \n a.Raj Mahal  \n b.Raj Palace \n c.Raj Apartment\n",
  answer : "Raj Mahal"
}];

for (var i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log(chalk.green.bold("Your final score is ", score))

if (score >= highScores[0].score || score >= highScores[1].score) {
  console.log(chalk.blue.bold("Congrats! You have scored High score. "))
  console.log(chalk.blue.bold("Please take a screenshot and share with us to update your name on Highscore list. \n"))
}

console.log(chalk.magentaBright("## Thank You for participating in the quiz  ##"))
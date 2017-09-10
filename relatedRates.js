$(document).ready(function() {

  var randomNumberE;
  var randomQuestionE;
  getQuestionE();

function getQuestionE() {
  var questionsE = [],
  index = 0;

  questionsE[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084425/E001_f7wsfh.png' alt='E001'>";
  questionsE[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084424/E002_l1dfmx.png' alt='E002'>";
  questionsE[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084424/E003_xkzqmc.png' alt='E003'>";
  questionsE[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084425/E004_hgnit5.png' alt='E004'>";
  questionsE[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1505084424/E005_vrd9xw.png' alt='E005'>";
  questionsE[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_225/v1505084424/E006_ytzj08.png' alt='E006'>";
  questionsE[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1505084424/E007_xhyakd.png' alt='E007'>";
  questionsE[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1505084424/E008_hjonxy.png' alt='E008'>";
  questionsE[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084424/E009_ua5hse.png' alt='E009'>";
  questionsE[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1505084423/E010_nxypwy.png' alt='E010'>";

  var answersE = [],
  index = 0

  answersE[0] = "d";
  answersE[1] = "a";
  answersE[2] = "d";
  answersE[3] = "d";
  answersE[4] = "c";
  answersE[5] = "a";
  answersE[6] = "b";
  answersE[7] = "a";
  answersE[8] = "b";
  answersE[9] = "c";

    var compliments = [
    "Yay!",
    "Good Job!",
    "Rock the Kasbah!",
    "Out of Sight!",
    "Raise the Roof!",
    "Do a Little Dance!",
    "Well Done!",    
    "Way to Go!",
    "Totally Awesome!",
    "Super Duper, Wuper!",
    "That's the Way, uh huh, uh huh \n We Like It!",
    "Hip, Hip, Hooray!",
    "Give Yourself a Pat on the Back \n (But don't strain a muscle!)",
    "You Got the Skills!",
    "Kudos!",
    "Nice One!",
    "Solid!",
    "Thumbs Up!",
    "Splendiferous!",
    "Bring the Aloe Vera!",
    "Beee-you-tee-full!",
    "Woop! Woop!",
    "Top Notch!",
    "First Rate!",
    "Absolutely Brilliant!",
    "Rock On"
    ];
  
  randomNumberE = Math.floor(Math.random() * (questionsE.length));
  var complimentNumber = Math.floor(Math.random() * (compliments.length));
  randomQuestionE = questionsE[randomNumberE];

  $(".E-question").html(randomQuestionE).width = "400";

  document.getElementById("check-answerE").onclick = function funE() {              
    if(document.getElementById(answersE[randomNumberE]).checked) {
                  swal(
          compliments[complimentNumber],
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

    $("#newQuestionE").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionE();   
  })
});
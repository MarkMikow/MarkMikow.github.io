$(document).ready(function() {

  var randomNumberD;
  var randomQuestionD;
  getQuestionD();

function getQuestionD() {
  var questionsD = [],
  index = 0;

  questionsD[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D001_nopxya.png' alt='D001'>";
  questionsD[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D002_lpc6v6.png' alt='D002'>";
  questionsD[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D003_j2jzxj.png' alt='D003'>";
  questionsD[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D004_qxqdhg.png' alt='D004'>";
  questionsD[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999881/D005_sk74j1.png' alt='D005'>";
  questionsD[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999881/D006_tfnmgk.png' alt='D006'>";
  questionsD[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D007_wd3gv7.png' alt='D007'>";
  questionsD[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999882/D008_f0hmbc.png' alt='D008'>";
  questionsD[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_350/v1504999881/D009_otcs5f.png' alt='D009'>";
  questionsD[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_175/v1504999881/D010_xlcztp.png' alt='D010'>";

  var answersD = [],
  index = 0

  answersD[0] = "b";
  answersD[1] = "c";
  answersD[2] = "c";
  answersD[3] = "b";
  answersD[4] = "b";
  answersD[5] = "d";
  answersD[6] = "b";
  answersD[7] = "b";
  answersD[8] = "c";
  answersD[9] = "d";

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
  
  randomNumberD = Math.floor(Math.random() * (questionsD.length));
  var complimentNumber = Math.floor(Math.random() * (compliments.length));
  randomQuestionD = questionsD[randomNumberD];

  $(".D-question").html(randomQuestionD).width = "400";

  document.getElementById("check-answerD").onclick = function funD() {              
    if(document.getElementById(answersD[randomNumberD]).checked) {
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

    $("#newQuestionD").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionD();   
  })
});
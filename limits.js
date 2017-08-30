$(document).ready(function() {

  var randomNumberA;
  var randomQuestionA;
  getQuestionA();

function getQuestionA() {
  var questionsA = [],
  index = 0;

  questionsA[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302995/A001_v1lfyb.png' alt='A001'>"; 
  questionsA[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502408657/A002_vl21d6.png' alt='A002'>";
  questionsA[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A003_jamqoz.png' alt='A003'>";
  questionsA[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A004_lrfpsu.png' alt='A004'>";
  questionsA[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A005_lbvj8z.png' alt='A005'>";
  questionsA[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502303005/A006_k2nou0.png' alt='A006'>";
  questionsA[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A007_u0m8ji.png' alt='A007'>";
  questionsA[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A008_rwyjio.png' alt='A008'>";
  questionsA[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A009_d8y1tb.png' alt='A009'>";
  questionsA[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408827/A010_kfakt7.png' alt='A010'>";
  questionsA[10] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408657/A011_ba0pqz.png' alt='A011'>"; 
  questionsA[11] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A012_arzxvo.png' alt='A012'>"; 
  questionsA[12] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_280/v1502408658/A013_xqydn5.png' alt='A013'>"; 
  questionsA[13] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A014_ub0qw5.png' alt='A014'>"; 
  questionsA[14] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A015_wsc54z.png' alt='A015'>"; 
  questionsA[15] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A016_azjaak.png' alt='A016'>"; 
  questionsA[16] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A017_gwk5mx.png' alt='A017'>"; 
  questionsA[17] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502410367/A018_voy8up.png' alt='A018'>"; 
  questionsA[18] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503616838/A019_vhurki.png' alt='A019'>"; 
  questionsA[19] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1503616838/A020_dlskwk.png' alt='A020'>"; 
  questionsA[20] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A021_icicl0.png' alt='A021'>"; 
  questionsA[21] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502408658/A022_kva6zu.png' alt='A022'>"; 
  questionsA[22] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A023_xcip7f.png' alt='A023'>"; 
  questionsA[23] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A024_tphnql.png' alt='A024'>"; 
  questionsA[24] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1503616838/A025_vsiohg.png' alt='A025'>"; 

   
  var answersA = [],
  index = 0

  answersA[0] = "b";  
  answersA[1] = "a";  
  answersA[2] = "c";  
  answersA[3] = "c";   
  answersA[4] = "b";
  answersA[5] = "b";
  answersA[6] = "d";
  answersA[7] = "a";
  answersA[8] = "c";
  answersA[9] = "b";
  answersA[10] = "c";
  answersA[11] = "c";
  answersA[12] = "c";
  answersA[13] = "b";
  answersA[14] = "c";
  answersA[15] = "d";
  answersA[16] = "a";
  answersA[17] = "b";
  answersA[18] = "d";
  answersA[19] = "b";
  answersA[20] = "a";
  answersA[21] = "b";
  answersA[22] = "a";
  answersA[23] = "c";
  answersA[24] = "c";

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
    "Absolutely Brilliant!"
    ];

  randomNumberA = Math.floor(Math.random() * (questionsA.length));
  var complimentNumber = Math.floor(Math.random() * (compliments.length));
  randomQuestionA = questionsA[randomNumberA];

  $(".A-question").html(randomQuestionA).width = "400";

  document.getElementById("check-answerA").onclick = function funA() {              
    if(document.getElementById(answersA[randomNumberA]).checked) {
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

    $("#newQuestionA").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionA();   
  })
});
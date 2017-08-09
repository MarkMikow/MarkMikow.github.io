$(document).ready(function() {
  var randomNumber;
  var randomQuestion;
  getQuestion();

function getQuestion() {
  var questions = [],
  index = 0;

  questions[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302995/A001_v1lfyb.png' alt='A001'>"; 
  questions[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302996/A002_ciyzjx.png' alt='A002'>";
  questions[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A003_ppyq1i.png' alt='A003'>";
  questions[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A004_sy8jji.png' alt='A004'>";
  questions[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A005_lbvj8z.png' alt='A005'>";
  questions[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502303005/A006_k2nou0.png' alt='A006'>";
  questions[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302614/A007_u0m8ji.png' alt='A007'>";
  questions[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A008_rwyjio.png' alt='A008'>";
  questions[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A009_d8y1tb.png' alt='A009'>";
  questions[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A010_kvctyc.png' alt='A010'>";
  questions[10] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A011_eeayte.png' alt='A011'>"; 
  questions[11] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A012_xbsdjc.png' alt='A012'>"; 
  questions[12] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302615/A013_rqmvqa.png' alt='A013'>"; 
  questions[13] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A014_ngndfb.png' alt='A014'>"; 
  questions[14] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A015_wsc54z.png' alt='A015'>"; 
  questions[15] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A016_azjaak.png' alt='A016'>"; 
  questions[16] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A017_gwk5mx.png' alt='A017'>"; 
  questions[17] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A018_apavhk.png' alt='A018'>"; 
  questions[18] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302629/A019_uwtsrr.png' alt='A019'>"; 
  questions[19] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A020_yia49v.png' alt='A020'>"; 
  questions[20] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A021_icicl0.png' alt='A021'>"; 
  questions[21] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A022_v7gfiv.png' alt='A022'>"; 
  questions[22] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A023_xcip7f.png' alt='A023'>"; 
  questions[23] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1502302630/A024_tphnql.png' alt='A024'>"; 
  questions[24] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1502302630/A025_rsvgag.png' alt='A025'>"; 

  randomNumber = Math.floor(Math.random() * (questions.length));
  randomQuestion = questions[randomNumber];

  $(".question").html(randomQuestion).width = "400";
}

  $("#newQuestion").on("click", function() {
    getQuestion();
  });

});
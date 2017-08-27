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

  randomNumberA = Math.floor(Math.random() * (questionsA.length));
  randomQuestionA = questionsA[randomNumberA];

  $(".A-question").html(randomQuestionA).width = "400";

  if (randomQuestionA == questionsA[0]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Yay!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[1]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("a").checked) {
                  swal(
          'Good job!',
          'You clicked the button!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[2]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Rock the Kasbah!',
          'You clicked the button!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[3]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Out of Sight!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

    if (randomQuestionA == questionsA[4]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Raise the Roof!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[5]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Do a Little Dance!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[6]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("d").checked) {
                  swal(
          'Well Done!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[7]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("a").checked) {
                  swal(
          'Way to Go!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[8]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Awesome!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[9]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Super Duper!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[10]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'That\'s the Way, uh huh, uh huh!',
          'We Like It!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[11]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Hip, Hip, Hooray!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[12]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Give Yourself a Pat on the Back!',
          'You just conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[13]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'You Got the Skills!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[14]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Kudos!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[15]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("d").checked) {
                  swal(
          'Nice One!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[16]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("a").checked) {
                  swal(
          'Solid!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[17]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Thumbs Up!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[18]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("d").checked) {
                  swal(
          'Splendiferous!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[19]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Bring the Aloe Vera!',
          'You just scorched that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[20]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("a").checked) {
                  swal(
          'Beee-you-tee-full!',
          'You just conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[21]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("b").checked) {
                  swal(
          'Top Notch!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[22]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("a").checked) {
                  swal(
          'First Rate!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[23]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Brilliant!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionA == questionsA[24]) {
    document.getElementById("check-answerA").onclick = function funA() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Good job!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }
  }

  $("#newQuestionA").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionA();   
  })
});
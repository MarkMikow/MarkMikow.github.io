$(document).ready(function() {

  var randomNumberB;
  var randomQuestionB;
  getQuestionB();

function getQuestionB() {
  var questionsB = [],
  index = 0;

  questionsB[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801661/B001_cpgqzc.png' alt='B001'>"; 
  questionsB[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801661/B002_undohr.png' alt='B002'>";
  questionsB[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801661/B003_yhsajl.png' alt='B003'>";
  questionsB[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801661/B004_q7doit.png' alt='B004'>";
  questionsB[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B005_la4ztr.png' alt='B005'>";
  questionsB[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1503801662/B006_sz4pgc.png' alt='B006'>";
  questionsB[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801660/B007_oick5v.png' alt='B007'>";
  questionsB[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B008_t394uz.png' alt='B008'>";
  questionsB[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801661/B009_anjc3j.png' alt='B009'>";
  questionsB[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B010_a3rvwy.png' alt='B010'>";
  questionsB[10] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B011_rare5y.png' alt='B011'>"; 
  questionsB[11] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B012_t0gc5t.png' alt='B012'>"; 
  questionsB[12] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_250/v1503801661/B013_mptvt1.png' alt='B013'>"; 
  questionsB[13] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B014_psgfhi.png' alt='B014'>"; 
  questionsB[14] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B015_bkmrq6.png' alt='B015'>"; 
  questionsB[15] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801662/B016_rpuixk.png' alt='B016'>"; 
  questionsB[16] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B017_vc9g06.png' alt='B017'>"; 
  questionsB[17] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B018_ziuzdu.png' alt='B018'>"; 
  questionsB[18] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B019_ecit6l.png' alt='B019'>"; 
  questionsB[19] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_200/v1503801663/B020_vqlmwc.png' alt='B020'>"; 

   
  var answersB = [],
  index = 0

  answersB[0] = "a";  
  answersB[1] = "d";  
  answersB[2] = "d";  
  answersB[3] = "d";   
  answersB[4] = "b";
  answersB[5] = "b";
  answersB[6] = "d";
  answersB[7] = "c";
  answersB[8] = "c";
  answersB[9] = "c";
  answersB[10] = "d";
  answersB[11] = "b";
  answersB[12] = "d";
  answersB[13] = "a";
  answersB[14] = "b";
  answersB[15] = "d";
  answersB[16] = "c";
  answersB[17] = "c";
  answersB[18] = "d";
  answersB[19] = "d";


  randomNumberB = Math.floor(Math.random() * (questionsB.length));
  randomQuestionB = questionsB[randomNumberB];

  $(".B-question").html(randomQuestionB).width = "400";

  if (randomQuestionB == questionsB[0]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("a").checked) {
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

  if (randomQuestionB == questionsB[1]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
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

  if (randomQuestionB == questionsB[2]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
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

  if (randomQuestionB == questionsB[3]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
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

    if (randomQuestionB == questionsB[4]) {
    document.getElementById("check-answerB").onclick = function funB() {              
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

  if (randomQuestionB == questionsB[5]) {
    document.getElementById("check-answerB").onclick = function funB() {              
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

  if (randomQuestionB == questionsB[6]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
                  swal(
          'Jump for Joy!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionB == questionsB[7]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Way to Go!',
          'You just conquered the heck out of that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionB == questionsB[8]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Way to Go!',
          'You knocked it out of the ballpark!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionB == questionsB[9]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("c").checked) {
                  swal(
          'Super Duper, Wuper!',
          'You conquered that question!',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionB == questionsB[10]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
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

  if (randomQuestionB == questionsB[11]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("b").checked) {
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

  if (randomQuestionB == questionsB[12]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
                  swal(
          'Give Yourself a Pat on the Back!',
          '(But don\'t strain a muscle!)',
          'success'
        )
          } else {
          alert("Not quite! \nGive it another try!");
        }
      }
    }

  if (randomQuestionB == questionsB[13]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("a").checked) {
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

  if (randomQuestionB == questionsB[14]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("b").checked) {
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

  if (randomQuestionB == questionsB[15]) {
    document.getElementById("check-answerB").onclick = function funB() {              
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

  if (randomQuestionB == questionsB[16]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("c").checked) {
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

  if (randomQuestionB == questionsB[17]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("c").checked) {
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

  if (randomQuestionB == questionsB[18]) {
    document.getElementById("check-answerB").onclick = function funB() {              
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

  if (randomQuestionB == questionsB[19]) {
    document.getElementById("check-answerB").onclick = function funB() {              
        if(document.getElementById("d").checked) {
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

  $("#newQuestionB").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionB();   
  })
  }
});

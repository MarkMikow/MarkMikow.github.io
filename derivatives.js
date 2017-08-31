$(document).ready(function() {

  var randomNumberC;
  var randomQuestionC;
  getQuestionC();

function getQuestionC() {
  var questionsC = [],
  index = 0;

  questionsC[0] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300,w_642/v1504149907/C001_ka25zx.png' alt='C001'>";
  questionsC[1] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149907/C002_hdfypy.png' alt='C002'>";
  questionsC[2] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_300/v1504149907/C003_g7elk8.png' alt='C003'>";
  questionsC[3] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C004_gnm5hm.png' alt='C004'>";
  questionsC[4] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C005_mk80ga.png' alt='C005'>";
  questionsC[5] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_375/v1504149907/C006_nxngml.png' alt='C006'>";
  questionsC[6] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C007_slut0d.png' alt='C007'>";
  questionsC[7] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C008_ulb7ua.png' alt='C008'>";
  questionsC[8] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C009_fjy5jj.png' alt='C009'>";
  questionsC[9] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C010_uxro2f.png' alt='C010'>";
  questionsC[10] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149906/C011_di49ri.png' alt='C011'>";
  questionsC[11] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_375/v1504149906/C012_wvpmfw.png' alt='C012'>";
  questionsC[12] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C013_ubshlf.png' alt='C013'>";
  questionsC[13] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C014_koslos.png' alt='C014'>";
  questionsC[14] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C015_nrbqic.png' alt='C015'>";
  questionsC[15] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C016_zxxndi.png' alt='C016'>";
  questionsC[16] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C017_fxabg9.png' alt='C017'>";
  questionsC[17] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149905/C018_nt6ydq.png' alt='C018'>";
  questionsC[18] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_375/v1504149904/C019_kgfux1.png' alt='C019'>";
  questionsC[19] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C020_wzxwpj.png' alt='C020'>";
  questionsC[20] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C021_pvflvk.png' alt='C021'>";
  questionsC[21] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C022_kmg0t7.png' alt='C022'>";
  questionsC[22] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C023_i6jqru.png' alt='C023'>";
  questionsC[23] = "<img src='https://res.cloudinary.com/markm/image/upload/c_scale,h_275/v1504149904/C024_kuytbo.png' alt='C024'>";

  var answersC = [],
  index = 0

  answersC[0] = "a";
  answersC[1] = "c";
  answersC[2] = "c";
  answersC[3] = "c";
  answersC[4] = "d";
  answersC[5] = "d";
  answersC[6] = "d";
  answersC[7] = "b";
  answersC[8] = "c";
  answersC[9] = "a";
  answersC[10] = "b";
  answersC[11] = "d";
  answersC[12] = "b";
  answersC[13] = "a";
  answersC[14] = "d";
  answersC[15] = "b";
  answersC[16] = "b";
  answersC[17] = "c";
  answersC[18] = "b";
  answersC[19] = "a";
  answersC[20] = "b";
  answersC[21] = "d";
  answersC[22] = "b";
  answersC[23] = "c";

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

  randomNumberC = Math.floor(Math.random() * (questionsC.length));
  var complimentNumber = Math.floor(Math.random() * (compliments.length));
  randomQuestionC = questionsC[randomNumberC];

  $(".C-question").html(randomQuestionC).width = "400";

  document.getElementById("check-answerC").onclick = function funC() {              
    if(document.getElementById(answersC[randomNumberC]).checked) {
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

    $("#newQuestionC").on("click", function() {
    $("input[name='answer']").prop("checked", false);    
    getQuestionC();   
  })
});
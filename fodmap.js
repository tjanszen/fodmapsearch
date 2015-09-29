var lowFodmap = ["alfafa", "bamboo shoots", "bean sprouts", "bok choy", "broccoli", "brussel sprouts", "butternut squash", "cabbage", "callaloo", "carrots"];
var highFodmap = ["garlic", "onions", "artichoke", "asparagus", "baked beans", "beetroot", "black beans", "black eyed beans", "broad beans", "butter beans", "cassava", "cauliflower", "celery"];


function getWord() {
  var inputValue = document.getElementById('fodmap').value;
  clearMsg();
  checkLows(inputValue);
}

function checkLows(fodmap){

  for(var i = 0; i < lowFodmap.length; i++){
    if(lowFodmap[i] === fodmap){
      addLowMessage(fodmap);
      // alert("Looks like you can eat " + fodmap + "!. Life is good :)");
      return;
    }
  }
  checkHighs(fodmap);

};

function checkHighs(fodmap){
  for(var i = 0; i < highFodmap.length; i++){
    if(highFodmap[i] === fodmap){
      addHighMessage(fodmap);
      return;
    }
  }
  alertMsg();
}

function alertMsg(){
  var displayH1 = document.getElementById('search-answer');
  displayH1.className = displayH1.className + " search-mia";
  displayH1.innerHTML = "Not is our database but we will get it added!"
}

function addLowMessage(fodmap){
  var displayH1 = document.getElementById('search-answer');
  displayH1.className = displayH1.className + " search-low";
  displayH1.innerHTML = "low FODMAP :)"
}

function addHighMessage(fodmap){
  var displayH1 = document.getElementById('search-answer');
  displayH1.className = displayH1.className + " search-high";
  displayH1.innerHTML = "high FODMAP :("
}

function clearMsg(){
  var input = document.getElementById('fodmap')
  input.value = "";

  var answer = document.getElementById('search-answer');
  answer.value = "";
  answer.className = "cover-heading"
}

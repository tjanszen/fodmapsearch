var lowFodmap = ["alfafa", "bamboo shoots", "bean sprouts", "bok choy", "broccoli", "brussel sprouts", "butternut squash", "cabbage", "callaloo", "carrots"];
var highFodmap = ["garlic", "onions", "artichoke", "asparagus", "baked beans", "beetroot", "black beans", "black eyed beans", "broad beans", "butter beans", "cassava", "cauliflower", "celery"];


function getWord() {
  var inputValue = document.getElementById('fodmap').value;
  checkLows(inputValue);
}

function checkLows(fodmap){

  for(var i = 0; i < lowFodmap.length; i++){
    if(lowFodmap[i] === fodmap){
      alert("Looks like you can eat " + fodmap + "!. Life is good :)");
      return;
    }
  }
  checkHighs(fodmap);

};

function checkHighs(fodmap){
  for(var i = 0; i < highFodmap.length; i++){
    if(highFodmap[i] === fodmap){
      alert("Sorry, you cannot eat " + fodmap + ":( . But soon we will be able to provide substitute recommendations!");
      return;
    }
  }
  alertMsg();
}

function alertMsg(){
  alert("We currently do not have this food item added to our list. We will research this food item and get it added soon!");
}

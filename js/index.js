$(document).ready(function() {
  var redAud = document.createElement("audio"),
    blueAud = document.createElement("audio"),
    greenAud = document.createElement("audio"),
    yellowAud = document.createElement("audio");

  redAud.setAttribute(
    "src",
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
  );
  greenAud.setAttribute(
    "src",
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
  );
  blueAud.setAttribute(
    "src",
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
  );
  yellowAud.setAttribute(
    "src",
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
  );

  var codeList = [];
  var tempList = [];
  // position needed to compare if inputted element is same as one already in codeList
  var position=0;

  
  // adds next button on successful code entry
  function addOne() {
    var randomnum = Math.floor(Math.random() * 4);
    switch (randomnum) {
      case 0:
        codeList.push(randomnum);
        break;
      case 1:
        codeList.push(randomnum);
        break;
      case 2:
        codeList.push(randomnum);
        break;
      case 3:
        codeList.push(randomnum);
        break;
    }
    
    console.log(codeList);
  }
// spacing out playback of sequence
  function setDelay(i) {
    setTimeout(function() {
      switch (codeList[i]) {
        case 0:
          redAud.play();
          setTimeout(function(){
          $("#red").toggleClass("active");
          }, 800);
          $("#red").toggleClass("active");
          break;
        case 1:
          greenAud.play();
          setTimeout(function(){
          $("#green").toggleClass("active");
          }, 800);
          $("#green").toggleClass("active");
          break;
        case 2:
          blueAud.play();
          setTimeout(function(){
          $("#blue").toggleClass("active");
          }, 800);
          $("#blue").toggleClass("active");
          break;
        case 3:
          yellowAud.play();
          setTimeout(function(){
          $("#yellow").toggleClass("active");
          }, 800);
          $("#yellow").toggleClass("active");
          break;
      }
      i++;
      if (i < codeList.length) {
        setDelay(i);
      }
    }, 800);
  }

  function playList() {
    var i = 0;
    setDelay(i);
  }
  // checking that tempList and codeList are the same
  function arraysEqual (arr1, arr2){
    if (arr1.length !== arr2.length){
      return false;
    }
      for (var x = arr1.length; x--;){
        if (arr1[x]!== arr2[x]){
          return false;
        }
    }
       return true;
  }
  
  // on wrong button press
  function gameLose(){
    position=0;
    tempList=[];
    playList();
    $("#wrong").text("Oops!")
    setTimeout (function(){
      $("#wrong").text("");
    }, 2000);
  }
  
  function correctSeq(){
      addOne();
      playList();
      tempList=[];
      position =0;
      $("#score").text(codeList.length);
  }
  
  function strictReset(){
    codeList=[];
    tempList=[];
    addOne();
    playList();
    position = 0;
    $("#score").text("1")
    $("#wrong").text("Oops!")
    setTimeout (function(){
    $("#wrong").text("");
    }, 2000);
  }

  function win(){
    $("#score").text("Winner Winner Chicken Dinner!")
    setTimeout (function(){
    codeList=[];
    tempList=[];
    addOne();
    playList();
    position = 0;
    $("#score").text("1");
    }, 3000);
  }
  
  $("#start").one("click", function() {
    addOne();
    playList();
  });
  
  $("#reset").on("click",function(){
    codeList=[];
    tempList=[];
    addOne();
    playList();
    position = 0;
    $("#score").text("1")
  });
  

  
  $("#strict").on("click", function(){
    $("#strict").toggleClass("active")
  })

  $("#red").on("click", function() {
    redAud.play();
    tempList.push(0);
    if (position >= 19){
      win();
    }
    else if (arraysEqual(codeList, tempList)){
      correctSeq()
    } 
    else if (codeList[position] !== tempList[position]){
      if ($("#strict").hasClass("active")){
        strictReset();
      }
      gameLose();
    } else{
        position++;
    }
  });
  $("#green").on("click", function() {
    greenAud.play();
    tempList.push(1);
    if (position >= 19){
      win();
    }
    else if (arraysEqual(codeList, tempList)) {
      correctSeq()
    } 
    else if (codeList[position] !== tempList[position]){
     if ($("#strict").hasClass("active")){
      strictReset();
      }
      gameLose();
    } else{
        position++;
    }
  });
  $("#blue").on("click", function() {
    blueAud.play();
    tempList.push(2);
    
    if (position >= 19){
      win();
    }
    else if (arraysEqual(codeList, tempList)) {
       correctSeq()
    }
     else if (codeList[position] !== tempList[position]){
        if ($("#strict").hasClass("active")){
        strictReset();
      }
      gameLose();
    } else{
    position++;}
  });
  $("#yellow").on("click", function() {
    yellowAud.play();
    tempList.push(3);
    if (position >= 19){
      win();
    }
    else if (arraysEqual(codeList, tempList)) {
      correctSeq()
    } 
    else if (codeList[position] !== tempList[position]){
        if ($("#strict").hasClass("active")){
        strictReset();
      }
      gameLose();
    } else{
        position++;}
  });
  
  
});
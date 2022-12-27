
function pickACat(){
  var specificLNum = 0;
function randomLNum(min, max) {
    // This is to get a random number within 1 - 15 so it can pick a photo from the folder 
    var specificLNum = Math.floor(Math.random() * (max - min) + min);
    console.log(specificLNum);
    return specificLNum;
    
  }
  function randomRNum(min, max) {
    var specificRNum = Math.floor(Math.random() * (max - min) + min);
    if (specificRNum === specificLNum){
      console.log("reroll")
      randomRNum();
    }
    else{
    // This is to get a random number within 1 - 15 so it can pick a photo from the folder 
    
    console.log(specificRNum);
    return specificRNum;
    }
  }

function pickLeftPic(){
    // This is to pick in and display the random photo on the left
    var leftNum = randomLNum(1,15);
    console.log(leftNum);
    document.write("<img src='images/CatPhotos/" + leftNum + ".jpg' style='max-width: 400px;' style='max-height: 400px;' />")
}
randomRNum();
function pickRightPic(){
    // This is to pick in and display the random photo on the left
    var rightNum = randomRNum(1,15);
    console.log(rightNum);
    document.write("<img src='images/CatPhotos/" + rightNum + ".jpg' style='max-width: 400px;' style='max-height: 400px;' />")
    }
    pickLeftPic();
    pickRightPic();
  }
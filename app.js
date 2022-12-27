function randomNum(min, max) {
    // This is to get a random number within 1 - 15 so it can pick a photo from the folder 
    var specificNum = Math.floor(Math.random() * (max - min) + min);
    console.log(specificNum);
    return specificNum;
    
  }

function pickLeftPic(){
    // This is to pick in and display the random photo on the left
    var leftNum = randomNum(1,15);
    console.log(leftNum);
    document.write("<img src='ratethekitties/CatPhotos/" + leftNum + ".jpg' style='max-width: 400px;' style='max-height: 400px;' />")
    return leftNum;
}
function pickRightPic(){
    // This is to pick in and display the random photo on the left
    var rightNum = randomNum(1,15);
    console.log(rightNum);
    document.write("<img src='ratethekitties/CatPhotos/" + rightNum + ".jpg' style='max-width: 400px;' style='max-height: 400px;' />")
    }

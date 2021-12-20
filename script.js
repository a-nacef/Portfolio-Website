document.body.style.backgroundImage = url("pic.jpg")
var i = 0


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function change(){
    var Profile= document.getElementById("profile");
    var images=[
    "python.png",
    "Pgsql.jpeg"
    ];
    Profile.src= images.reverse()[getRandomIntInclusive(0,1)]
}

function reset(){
    document.getElementById("profile").src = "pic.jpg"
}

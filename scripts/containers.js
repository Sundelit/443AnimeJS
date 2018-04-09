var teamOne = document.getElementById("t1").options[selectedIndex].value;
var teamTwo = document.getElementById("t2");

switch(teamOne){
    case "um":
        teamTwo.options[0].disabled = true;
}
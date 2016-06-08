
// Button Function: Multiplies weight by planet value.
function calculator() {

// Assigns variables to id elements in html to use values.
    var myWeight = document.getElementById("myWeight").value;
    var myPlanet = document.getElementById("myPlanet").value;

    var myNewWeight = myWeight * myPlanet;
    myNewWeight = myNewWeight.toFixed(2);
    var myPlanetSelection = document.getElementById("myPlanet")[document.getElementById("myPlanet").selectedIndex].text;
// If else else if: statement to add definite article "the" in front of sun and moon and asks the user to make a selection before clicking.
    if (myPlanetSelection == 'Sun' || myPlanetSelection == 'Moon') {

        document.getElementById("result").innerHTML = "If you were on the " + myPlanetSelection + " you would weigh " + myNewWeight + " lbs! ";
    } else if (myPlanetSelection == "Choose A Heavenly Body") {

        document.getElementById("result").innerHTML = "Please Make A Selection";

    } else {
        document.getElementById("result").innerHTML = "If you were on " + myPlanetSelection + " you would weigh " + myNewWeight + " lbs! ";

    }
    //Adds a colored background to provide better feedback than text over simple background. 
    document.getElementById("result").style.background = "#ffff99";

}

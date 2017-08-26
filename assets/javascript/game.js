// jQuery document function 
$(document).ready(function () {


    // Global variables and arrays:
    // =======================================================================================

    var randomNum = 0;
    var userScore = 0;

    var wins = 0;
    var losses = 0;

    


    
    // Start game on crystalize button.
    // =======================================================================================

    // Appends the crystal images to the DOM. ('.one' does it only one time)
    $( ".crystalizeBtn" ).one( "click", function() {
        var crystal1 = $('<img src="assets/images/crystal1.png" class="img-responsive crystal1" alt="Ohh shiny...">')
        $(".crystal1").append(crystal1);
        var crystal2 = $('<img src="assets/images/crystal2.png" class="img-responsive crystal2" alt="Ohh shiny...">')
        $(".crystal2").append(crystal2);
        var crystal3 = $('<img src="assets/images/crystal3.png" class="img-responsive crystal3" alt="Ohh shiny...">')
        $(".crystal3").append(crystal3);
        var crystal4 = $('<img src="assets/images/crystal4.png" class="img-responsive crystal4" alt="Ohh shiny...">')
        $(".crystal4").append(crystal4);

        //  Generates a random number
        var randomNumber = Math.floor(Math.random() * (120-19)) + 1;
        $("p.randomNum").html(randomNumber);

        // Resets User score
        $(".userScore").html(0);
        $(".wins").html(0);
        $(".losses").html(0);

    

    });

   
    


    // Generates a random integer when user clicks a crystal, and logs it to the console.
    // =======================================================================================

    // Crystal 1 - Blue 
    $(".crystal1").click(function () {
        // Sets random value of the Crystal to an inter between 12-1
        var blueCrystal = Math.floor(Math.random() * (120 - 1)) + 1;
        console.log("Blue crystal is worth " + blueCrystal);


        console.log(userScore + blueCrystal);
        // Populates user score in html. 
        $(".userScore").html(userScore + blueCrystal);

        

    });


    // Crystal 2 - Green
    $(".crystal2").click(function () {
        // Sets random value of the Crystal to an integer between 12-1
        var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        console.log("Green crystal is worth " + greenCrystal);


        console.log(userScore + greenCrystal);
        // Populates user score in html. 
        $(".userScore").html(userScore + greenCrystal);

    });


    // Crystal 3 - Purple
    $(".crystal3").click(function () {
        // Sets random value of the Crystal to an inter between 12-1
        var purpleCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        console.log("Purple crystal is worth " + purpleCrystal);


        console.log(userScore + purpleCrystal);
        // Populates user score in html. 
        $(".userScore").html(userScore + purpleCrystal);

    });


    // Crystal 4 - Pink
    $(".crystal4").click(function () {
        // Sets random value of the Crystal to an inter between 12-1
        var pinkCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
        console.log("Pink crystal is worth " + pinkCrystal);


        console.log(userScore + pinkCrystal);
        // Populates user score in html. 
        $(".userScore").html(userScore + pinkCrystal);

        
    });



    
// Win | Loss
// =======================================================
// if (userScore === randomNum) {
//     wins++;
//     $(".wins").html(wins);
//     alert("You won!");
// };

// if (userScore >= randomNum) {
//         losses--;
//         $(".losses").html(losses);
//         alert("You lost!");
//     };


        
    











});
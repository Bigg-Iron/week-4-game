// jQuery document function 
$(document).ready(function () {

    // Populates crystals in html on "crystalize" button 
    // =======================================================================================

    // Appending the crystal image 1 to the DOM
    $(".crystalizeBtn").click(function () {
        var crystal = $('<img src="assets/images/crystal1.png" class="img-responsive crystal1" alt="Ohh shiny...">')
        $(".crystal1").append(crystal);
    });

    // Appending the crystal image 2 to the DOM
    $(".crystalizeBtn").click(function () {
        var crystal = $('<img src="assets/images/crystal2.png" class="img-responsive crystal2" alt="Ohh shiny...">')
        $(".crystal2").append(crystal);
    });

    // Appending the crystal image 3 to the DOM
    $(".crystalizeBtn").click(function () {
        var crystal = $('<img src="assets/images/crystal3.png" class="img-responsive crystal3" alt="Ohh shiny...">')
        $(".crystal3").append(crystal);
    });

    // Appending the crystal image 4 to the DOM
    $(".crystalizeBtn").click(function () {
        var crystal = $('<img src="assets/images/crystal4.png" class="img-responsive crystal4" alt="Ohh shiny...">')
        $(".crystal4").append(crystal);
    });






    // Generates a random integer when user clicks a crystal, and logs it to the console.
    // =======================================================================================

    // Crystal 1 - Blue 
    $(".crystal1").click(function () {

        var randomInteger = Math.floor(Math.random() * (12 - 1)) + 1;

        console.log("Blue crystal is worth " + randomInteger);

    });


    // Crystal 2 - Green
    $(".crystal2").click(function () {

        var randomInteger = Math.floor(Math.random() * (12 - 1)) + 1;

        console.log("Green crystal is worth " + randomInteger);

    });


    // Crystal 3 - Purple
    $(".crystal3").click(function () {

        var randomInteger = Math.floor(Math.random() * (12 - 1)) + 1;

        console.log("Purple crystal is worth " + randomInteger);

    });


    // Crystal 4 - Pink
    $(".crystal4").click(function () {

        var randomInteger = Math.floor(Math.random() * (12 - 1)) + 1;

        console.log("Pink crystal is worth " + randomInteger);

    });
















});
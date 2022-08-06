/*
* @author Aravind Karri
* @internal This is learning script for a sample webpage
*/
//Global variables
let animationRunning = false;
const submitText = $('#submitText');
const inputEmail = $('#inputEmail');
const signInText =  $('#signInText');
let userEmail;
let userPassword;

//This code runs after page load
$(document).ready(function () {
    //hide the house animation
    $('#houseAnimation').hide();
    /*
    //catch the hover event
    $(".form-control").hover(function () {
        //hide the text
        submitText.hide();
        //show the image
        $('#houseAnimation').show();
    });
    */
    //catch the typing event
    inputEmail.on('input', function () {
        //hide the text
        submitText.hide();
        //show the image
        $('#houseAnimation').show();
        //start the animation
        if (!animationRunning) {
            submitText.text('Typing')
            startDotAnimation(signInText);
        }
    });

    //on submitText button click
    $("#houseAnimation").click(function (event) {
        //hide the animation
        $(this).hide();
        //console.log('clicked');
        //Change the text
        submitText.text('Data successfully submitted');
        //add dot animation
        startDotAnimation(submitText);
        //show the text
        submitText.show();
        //Get user email and password
        userEmail = inputEmail.val();
        //clean the input fields
        userPassword = $('#inputPassword').val();
        let userData = {'email':userEmail, 'password':userPassword};
        console.log(userData);
        //change the text
        $('#totalText').hide("slow");

    });


});

/**
 * @internal will start the dot animation
 */
function startDotAnimation(div) {
    animationRunning = true;
    //dot animation at the end
    div.dotAnimation({
        speed: 300,
        dotElement: '.',
        numDots: 3
    });
}


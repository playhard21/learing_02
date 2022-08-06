/*
* @author Aravind Karri
* @internal This is learning script for a sample webpage
*/
//Global variables
let animationRunning = false;
//This code runs after page load
$(document).ready(function () {
    const submitText = $('#submitText');
    const inputEmail = $('#inputEmail');
    //hide the house animation
    $('#houseAnimation').hide();
    //catch the hover event
    $(".form-control").hover(function () {
        //hide the text
        submitText.hide();
        //show the image
        $('#houseAnimation').show();
    });

    //catch the typing event
    inputEmail.on('input', function () {
        //hide the text
        submitText.hide();
        //show the image
        $('#houseAnimation').show();
        //start the animation
        if(!animationRunning){
            submitText.text('Typing')
            startDotAnimation();
        }
    });

    //on submitText button click
    $( "#houseAnimation" ).onclick(function( event ) {
        console.log('clicked');
        /*
        //Change the text
        submitText.text('Thank you for submitting');
        //stop the animation

        //Get user email and password
        let email = inputEmail.value();
        //clean the input fields
        inputEmail.text('');
        let password = $('#inputPassword').value();
        password.text('');
        console.log(email,password);

         */
    });


});

/**
 * @internal will start the dot animation
 */
function startDotAnimation(){
    animationRunning = true;
    //dot animation at the end
    $('#singInText').dotAnimation({
        speed: 300,
        dotElement: '.',
        numDots: 3
    });
}


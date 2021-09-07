$(document).ready(function () {
    
    $('.info-button').click(function(){
    $('#popup-modal-info').addClass("view-modal-info");
    $('#popup-modal-info').removeClass("hide-modal-info");
});

	$('#x-modal-info').click(function(){
    $('#popup-modal-info').addClass("hide-modal-info");
    $('#popup-modal-info').removeClass("view-modal-info");

});





    $('.img-button').click(function(){
    $('#popup-modal-photo').addClass("view-modal-photo");
    $('#popup-modal-photo').removeClass("hide-modal-photo");
});

    $('#x-modal-photo').click(function(){
    $('#popup-modal-photo').addClass("hide-modal-photo");
    $('#popup-modal-photo').removeClass("view-modal-photo");

});



	// List your words here:
    var words = [
        'ب سس',
        'ب س',
        'س'
        ], i = 0;

    setInterval(function(){
        $('#varient-logo-small').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
       // 3 seconds
    }, 3000);



// List your words here:
    var words = [
        'ب سس',
        'ب س',
        'س'
        
        ], i = 0;

    setInterval(function(){
        $('#varient-logo').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
       // 3 seconds
    }, 3000);







});







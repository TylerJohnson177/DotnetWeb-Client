$(function(){
    //create an array to hold attention seekers
    const attentionSeekers = [
        'animate__animated animate__bounce',
        'animate__animated animate__flash',
        'animate__animated animate__pulse',
        'animate__animated animate__rubberBand',
        'animate__animated animate__shakeX',
        'animate__animated animate__shakeY',
        'animate__animated animate__headShake',
        'animate__animated animate__swing',
        'animate__animated animate__tada',
        'animate__animated animate__wobble',
        'animate__animated animate__jello',
        'animate__animated animate__heartBeat',
    ]
    //generate a random attention seeker
    $('#attentionSeeker').addClass(attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)]) 
    
    $('#birthday').pickadate({ format: 'mmmm, d'});
    // uncheck all checkboxes (FireFox)
    $('.form-check-label').each(function () {
        $(this).prop('checked', false);
    });
    //event listeners for hovering over labels
    //red
    $("#red").on('mouseenter', function () { 
        $('#attentionSeeker').addClass('red')  
    });
    $("#red").on('mouseleave', function () {
        $('#attentionSeeker').removeClass('red')
    });
    //green
    $("#green").on('mouseenter', function () { 
        $('#attentionSeeker').addClass('green')  
    });
    $("#green").on('mouseleave', function () {
        $('#attentionSeeker').removeClass('green')
    });
    //blue
    $("#blue").on('mouseenter', function () { 
        $('#attentionSeeker').addClass('blue')  
    });
    $("#blue").on('mouseleave', function () {
        $('#attentionSeeker').removeClass('blue')
    });
    
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
    //event listener for selectAll button
    $('#selectAll').on('click', function () {
        $('.form-check-input').each(function (){
            $(this).prop('checked', true)
        // make the images visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloons in
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')
        })
    })
    //event listener for deselectAll button
    $('#deselectAll').on('click', function (){
        $('.form-check-input').each(function (){
            $(this).prop('checked', false)
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');  
        })
    })
    //event listener for submit button
    $('#submit').on('click', function () {
        var noneChecked = true
        //check if any balloons are selected
        $('.form-check-input').each(function (){
            if($(this).prop('checked')){
                noneChecked = false
            }
        });
        //display toast if no balloons are selected
        if(noneChecked == true){
            $('#balloonToast').toast({autohide: false}).toast('show')
        }
    });
    
});
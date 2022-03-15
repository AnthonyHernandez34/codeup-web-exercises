"use strict";

    // $('.invisible').css({
    //     'visibility': 'hidden'
    // })

    // Set elements with class invisible to visibility hidden
    $(document).ready(function () {
        $('#link').click(function (e) {
            $('dd').toggleClass('invisible');
        })
    })

    // Changes dd background color to light blue when clicked
    $('dd').click(function (e) {
    $(this).css('backgroundColor', 'lightblue')
})

    //  vvv This worked but cant explain why? vvv
    //
    // $('#yellowBtn').click(function(e){
    //     $('li:last-child').each(function() {
    //         $(this).css('backgroundColor', 'yellow')
    //     })
    // })

    // Highlights the last li in every ul when clicked
    $('#yellowBtn').click(function (e) {
    $('ul').each(function () {
    $(this).children().last().css('backgroundColor', 'yellow');
})
})

    // Changes the li font weight to bold when an h3 is clicked
    $('h3').click(function (e) {
    $(this).next().children().css('fontWeight', 'bold');
})

    //Changes the first li font color to blue when any other li in the ul is clicked
    $('li').click(function (e) {
    $(this).parent().children().first().css('color', 'blue');
    });


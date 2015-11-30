jQuery(function($) {
    $('.id7-homepage-links > ul > li').remove();

    $('.id7-homepage-links > ul')
        .append($('<li />').append(
            $('<a />').attr({ href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('http://warwick.ac.uk/christmas2015') })
                .append('<i class="fa fa-facebook-square"><span class="sr-only">Facebook</span></i>')
        ))
        .append($('<li />').append(
            $('<a />').attr({ href: 'http://twitter.com/intent/tweet?text=' + encodeURIComponent('Merry Christmas from the University of Warwick - http://warwick.ac.uk/christmas2015') })
                .append('<i class="fa fa-twitter-square"><span class="sr-only">Twitter</span></i>')
        ));

    /* Sharing Pop Up
     ------------------------------------------*/
    $('.id7-homepage-links').on('click', 'a', function(event) {
        var width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });
});
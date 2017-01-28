$(document).ready(function () {

    getQuote();

    $(' #card ').click(function () {
        $('#card').toggleClass('clicked');
       // console.log("Clicked");
        getQuote();
        //$('#card').removeClass('clicked');
    });

    function getQuote() {
            var json = $.ajax({
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // URL to the random quote API
                type: 'GET',
                data: {},
                dataType: 'json',
                success: function (data) {
                   //console.log(data);
                    $( '#quote' ).html(data.quote);
                    $( '#source' ).html(data.author);
                    //console.log(data.author);
                },
                error: function (err) { alert(err); },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-Mashape-Authorization", "lQqIjlKOIRmsh8s1ehmTtJxsj1wjp1S0LmEjsncrFJbFA1tEOW");
                }
            });
    }
});


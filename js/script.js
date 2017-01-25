$(document).ready(function (){
    
    $( "#getQuote" ).on("click", function(){
        
        var json = $.ajax({
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // URL to the random quote API
                type: 'POST', 
                data: {}, 
                dataType: 'json',
                success: function(data) {  
                    console.log(data);                   
                    $( ' #quote' ).html("<p>" + data.quote + "</p>" + "<p>Author: " + data.author + "</p>"); 
                },
                error: function(err) { alert(err); },
                beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "lQqIjlKOIRmsh8s1ehmTtJxsj1wjp1S0LmEjsncrFJbFA1tEOW"); 
                }
            });
    });
});
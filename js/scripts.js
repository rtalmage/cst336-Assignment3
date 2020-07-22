$(document).ready(function () {

    $("#submit").on("click", function () {

        var weatherTerm;

        $("#valid").html("");

        if(!isCityEntered()){
            $("#valid").html("Enter a city name!");
            return;
        }

        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + $("#cityName").val() + "&appid=0a0c3c19f7a3ceac75661b1d3dc4cc52&units=imperial",
            dataType: "json",
            success: function (result, status) {
                var adsjokfn=status;

                weatherTerm = result["weather"][0]["description"];

                $("#temp").html(result["main"]["temp"] +" &#8457");
                $("#hum").html(result["main"]["humidity"] +" %");
                $("#wind").html(result["wind"]["speed"] +" mph");
                $("#description").html(weatherTerm);
                $.ajax({
                    method: "GET",
                    url: "https://api.unsplash.com/search/?photos?page=1&query=" + weatherTerm + "&client_id=hERnKkUi24C_8MD1XPwcYX2C4GPNsTxoWDNM8dc0m24",
                    dataType: "json",
                    success: function (result, status) {

                        $("#weatherDisplay").attr("src", result["photos"]["results"][0]["urls"]["small"]);

                    }
                });

            }
        });


    });


    function isCityEntered(){
        var isValid = true;

        if($("#cityName").val() === ""){
            isValid = false;
        }
        return isValid;

    }


});






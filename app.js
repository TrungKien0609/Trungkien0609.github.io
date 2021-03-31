
$(document).ready(function () {
    var temp = "";
    const expression = [$(".container .divide"), $(".container .multiply "), $(".container .number7"), $(".container .number8"), $(".container .number9"), $(".container .Sub"), $(".container .number4"), $(".container .number5"), $(".container .number6")
        , $(".container .add"), $(".container .number1"), $(".container .number2"), $(".container .number3"), $(".container .number0"), $(".container .symbol")]
    for (let i = 0; i < expression.length; i++) {
        expression[i].click(function () {
            if (i == 1) {
                temp += "*";
            }
            else
                temp += expression[i].text();
            $("#show_exp").text(temp);
        })
    }
    $(".container .execute").click(function () {
        $("#result").text(function () {
            try {
                return eval(temp);
            }
            catch (error) {
                $("#show_exp").text("");
                $("#result").text(" SYSTAX ERROR ( PRESS AC )");
            }
        });
        $("#show_exp").text(function () {
            return temp + "=" + eval(temp);
        });
        temp = eval(temp).toString();
    })
    $(".container .AC_btn").click(function () {
        temp = "";
        $("#show_exp").text("");
        $("#result").text("");
    })
});
function val(id){
    return parseFloat($("#" + id).val());
}
$(document).ready(function () {
    $("#count").click(function () { 
        //time
        var timeScore = 0;
        
        var moveTime = val("totalTime") - val("recordTime") - val("familyTime") - val("playgame") + val("familyTime") * 0.6 + val("playgame") * 0.2;
        
        timeScore = moveTime / val("totalTime") *100;//1~100

        //event
        var eventScore = 0;
        
        var moveEvent = val("tenEvent")  + val("eightEvent") * 0.8 + val("sixEvent") * 0.6 + 
        val("fourEvent") * 0.4 + val("twoEvent") * 0.2 + val("zeroEvent") * 0 + val("amount") * 0.1 + 
        val("break") * 0.1;
        console.log(moveEvent)

        eventScore = moveEvent / val("totalEvent") * 100;//1~100
        console.log(eventScore)
        //score
        $("#scorePaper").append(eventScore + "<br>" + timeScore + "<br>");
        var totalScore = (eventScore * val("eventw") + timeScore * val("timew")) / (val("eventw") + val("timew"));
        totalScore.toFixed(2)
        $("#scorePaper").append("權後分數" + totalScore + "<br>");

    });
});
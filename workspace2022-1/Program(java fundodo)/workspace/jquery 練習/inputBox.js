var time = 0;
function creatTri(id){
var complete = "complete" + time;
var changeHtml = "changeHtml" + time;
var inputBox = "inputBox" + time;
var inputHtml = "inputHtml" + time;
var outputBox = "outputBox" + time;

var output = "<button id = " + complete + ">完成</button>\
<button id = " + changeHtml + " style='display: none;'>更改</button>\
<div id = " + inputBox + ">\
<input type = 'text' placeholder='請輸入HTML' id = " + inputHtml + "><br>\
</div>\
<div id = " + outputBox + ">\
</div>\
<script>\
    $('#" + complete + "').click(function(){\
        var str = $('#" + inputHtml + "').val();\
        $(this).hide();\
        $('#" + changeHtml + "').show();\
        $('#" + inputBox + "').hide();\
        $('#" + outputBox + "').html(str);\
    })\
    $('#" + changeHtml + "').click(function(){\
        $('#" + complete + "').show();\
        $(this).hide();\
        $('#" + outputBox + "').empty();\
        $('#" + inputBox + "').show();\
    })\
</script> ";
return output;
time ++;
}
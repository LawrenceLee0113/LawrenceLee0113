$(document).ready(function () {
    animateStart();
    $(".math").mouseenter(function () { //鍵盤
        $(this).css("width", "60px");
    });
    $(".math").mouseleave(function () { //鍵盤
        $(this).css("width", "50px");
    });

    $("#startGameBt,#replay").click(function () { //遊玩按鈕
        ans = 0;
        $("#result").val("");
        $("#outputBox2").hide();

        $("#startScn").hide();
        $("#inputBox").show();
        $("#countM").show();
        gameStart();
    });
});
function animateStart(){//起始的動畫
    $("#startScn").show();
    $("#startLabel").fadeIn(3000);
    $("#startGameBt").fadeIn(7000);
    $("#labKing").fadeIn(7000);
    $("#imgKing").fadeIn(7000);
}


var countMs = ["0","1","2","3","4","5","6","7","8","9","del","enter"];
    var nowMath = "";
$(document).ready(function () {//按鍵盤
    
    $("img[alt = '0']").click(function () {
        nowMath = "0";
        setResult();
    });
    $("img[alt = '1']").click(function () {
        nowMath = "1";
        setResult();
    });
    $("img[alt = '2']").click(function () {
        nowMath = "2";
        setResult();
    });
    $("img[alt = '3']").click(function () {
        nowMath = "3";
        setResult();
    });
    $("img[alt = '4']").click(function () {
        nowMath = "4";
        setResult();
    });
    $("img[alt = '5']").click(function () {
        nowMath = "5";
        setResult();
    });
    $("img[alt = '6']").click(function () {
        nowMath = "6";
        setResult();
    });
    $("img[alt = '7']").click(function () {
        nowMath = "7";
        setResult();
    });
    $("img[alt = '8']").click(function () {
        nowMath = "8";
        setResult();
    });
    $("img[alt = '9']").click(function () {
        nowMath = "9";
        setResult();
    });
    $("img[alt = 'del']").click(function () {
        nowMath = "del";
        $("#result").val("");
    });
    $("img[alt = 'enter']").click(function () {
        nowMath = "enter";
        _enter();
    });
});
function setResult(){
    var nowVal = $("#result").val();
    $("#result").val(nowVal + nowMath);
}
function _enter(){//鍵盤輸入
    $("#inputBox").hide();
    $("#countM").hide();
    checkAns();
    
}

var ans = 0;

function gameStart(){
    ans = Math.random()*100+1;
    ans = Math.ceil(ans);
    console.log(ans);
}

function checkAns(){
    let inputAns = $("#result").val();

    if (inputAns == ans){
        pass();
    }else if(inputAns < 1 || inputAns > 100){
        answrong();
    }else if(inputAns < ans){
        ansLow();
    }else if(inputAns > ans){
        ansUp();
    }
}
function answrong(){
    $("#outputBox3").show();

}
function pass(){
    $("#countM").fadeOut();
    $("#inputBox").fadeOut();
    $("#times").html("你總共猜了 " + recordTimes + 1  + "次");
    $("#outputBox2").fadeIn(3000)
}

function ansLow() {
    $("#outputBox1").show();
}
function ansUp(){
    $("#outputBox0").show();
}
var recordTimes = 0;
function writeRecord(){
    var recordStr = $("#recordP").html();
    recordTimes ++;
    if(recordTimes == 1){
        recordStr = "";
    }
    $("#recordP").html(recordStr + "第 " + recordTimes + "次你猜    ：  " + $("#result").val() + " ;<br>");

}
$(document).ready(function () {
    $(".reinput").click(function () { 
        $("#outputBox0").hide();
        $("#outputBox1").hide();
        $("#outputBox3").hide();
        $("#inputBox").show();
        $("#countM").show();
        writeRecord();
        $("#result").val("");
    });
    $("#nextLevel").click(function (e) { 
        location.href = "level2.html";
        
    });
    
});
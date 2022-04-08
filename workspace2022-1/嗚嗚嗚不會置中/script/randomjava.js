function random(min, max){
    return Math.floor(Math.random()*(max - min))+min;
}

function randomUntilRepeat(XArray){
    var num = random(0,XArray.length);
    return XArray.splice(num,1)[0];
}
$(document).ready(function () {
    var heavenGiftInput;
    var hellGiftInput;

    var heavenGiftArray = [];
    var hellGiftArray = [];

    var lastHeavenNum;
    var lastHellNum;

    function changePage(){
        $("#headTitle").html("!祝你中大獎!");
        for(let i = 0; i < heavenGiftInput;i++){
            heavenGiftArray.push(i);
        }
        for(let i = 0; i < hellGiftInput;i++){
            hellGiftArray.push(i);
        }

    
        console.log(heavenGiftArray);
        console.log(hellGiftArray);
        $("#adminInputBox").hide();
        $("#userInputBox").show();

        $("#restart").hide();
    }
    $("#ready").click(function (e) { 
        
        
        heavenGiftInput = $("#signInAmountInput").val();
        hellGiftInput = $("#signInAmountInput").val();

        if(heavenGiftInput == undefined || heavenGiftInput == ""){
            alert("輸入人數阿>>>>");
        }else if(heavenGiftInput > 1000){
            alert("不要騙了 人沒有那麼多！");
        }else{
            changePage();
        }

        

    });

    function doRandomAnimate(id,times,interval,min,max){
        for(var i = 0; i<times;i++){
            setTimeout(function(){
                
                $(id).html(random(min,max));

            },i*interval)
        }
        
    }

    $("#start").click(function (e) { 
        var heavenOutput = randomUntilRepeat(heavenGiftArray);
        var hellOutput = randomUntilRepeat(hellGiftArray);
        if(heavenOutput ==undefined||hellOutput==undefined){
            alert("！！已經抽完了拉！！");
        }else{
            // $("#outputBox").html("天堂的號碼：" + heavenOutput + "<br>地域的號碼：" + hellOutput);
            // for(let i = 1;i < 10;i++){

            //     doRandomAnimate("outputNum");
            // }
            $("#start").attr("disabled","disabled");
            var sound = document.getElementById("getPoint");
                sound.load();
                sound.play();
            

            var times = 10;//次數
            var interval = 50;//間隔 毫秒

            doRandomAnimate("#outputNum",times,interval,0,47);
            
            setTimeout(function(){
                console.log("asdf");
                $("#outputNum").html(heavenOutput);
                lastHeavenNum = heavenOutput;
                lastHellNum = hellOutput;
                if (heavenGiftArray.length != 0) {
                    $("#restart").show();
                }
                
                // $(id).html("123");  
                
                // $("#start").attr("disabled","");
                setTimeout(function(){

                    $("#start").removeAttr("disabled");
                },1000)
            },times*interval);

            
        }



        console.log(heavenGiftArray);
        console.log(hellGiftArray);
    });
    $("#restart").click(function (e) { 
        heavenGiftArray.push(lastHeavenNum);
        hellGiftArray.push(lastHellNum);
        if(confirm("是否確定重抽？")){
            alert("重抽設定成功!");
            $("#restart").hide();
        }
    });


});


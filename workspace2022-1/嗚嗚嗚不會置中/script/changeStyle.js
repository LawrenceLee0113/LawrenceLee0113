var modeData = [
    {
        backgroundPosition: "background2.png",
        backgroundRepeat:"no-repeat",
        bgSizeW: "100%",
        bgSizeH: "120%",
        iconPosition: "66f523e5c7135f9d-removebg-preview.png"
    },
    {
        backgroundPosition: "christmasBackgroundImage.jpg",
        backgroundRepeat:"no-repeat",
        bgSizeW: "100%",
        bgSizeH: "120%",
        iconPosition: "giftImage.png"
    },
    {
        backgroundPosition: "maxresdefault.jpeg",
        backgroundRepeat:"no-repeat",
        bgSizeW: "100%",
        bgSizeH: "100%",
        iconPosition: "187878d35f28a9233d9a3d8d5be9a4436f33ffcf-removebg-preview.png"
    },
    {
        backgroundPosition: "187878d35f28a9233d9a3d8d5be9a4436f33ffcf-removebg-preview.png",
        backgroundRepeat:"repeat",
        bgSizeW: "50px",
        bgSizeH: "50px",
        iconPosition: "187878d35f28a9233d9a3d8d5be9a4436f33ffcf-removebg-preview.png"
    },
];

var selectLock = false;

function changeMode(nowNum){
    nowNum--;
    if(modeData[nowNum] != undefined){
        $("body").css("background","url(./image/"+modeData[nowNum].backgroundPosition+") " + modeData[nowNum].backgroundRepeat);
        $("body").css("background-size",modeData[nowNum].bgSizeW + " " + modeData[nowNum].bgSizeH);
        $("body").css("background-attachment","fixed");
        $("#icons").attr("src","./image/"+modeData[nowNum].iconPosition);
    }else{
        console.log("無效的輸入");
    }
}

$(document).ready(function () {
    $("body").keydown(function (e) { 
        if(e.keyCode == 13){
            var x = document.getElementById("bgMusic");
            x.play();
        }
    });

    changeMode(2);//初始值
    $("body").keydown(function (e) { 
        if(e.keyCode == 18){
            selectLock = true;
        }
    });
    $("body").keyup(function (e) { 
        if(e.keyCode == 18){
            selectLock = false;
        }
    });
    $("body").keyup(function (e) { 
        console.log(e.keyCode);
       
        if(e.keyCode >= 49 && e.keyCode <= 57 && selectLock){
            console.log("觸發");

            var modeNum = e.keyCode-48;
            changeMode(modeNum);
            
            
        }
    });
        
});
var inputText = [["收入","生活支出","車貸借款","房貸借款","卡債利息","計算結果-每月收支平衡"],
                 ["目前年度租金","租金成長率","投資報酬率","計算結果-未來租金現值"],
                 ["房屋金額","自備款","裝潢費用","月租金","貸款年利率(%)","計算結果-未來租金現值"]];
var IDs = [["income","expenditure","car","house","card","outcome"],
           ["yearlyRent","growingRent","returnInvestment","tab2Outcome"],
           ["houseCost","ownMoney","decorate","monthlyRent","interestRate","tab3Outcome"]];
var divs = ["div1","div2","div3"]

nowInputText = [];
nowIDs = [];
var inputData;
var mode;
$(document).ready(function () {
    $("a").click(function () {
        for(let i in divs){
            let str = "a[href = '#" + divs[i] + "']";
            $(str).click(function () { 
                mode = i;
                switchMode();
                
            });
        }
    });
    
    // let str = "a[href = '#" + divs[0] + "']";
    //         $(str).click(function () { 
    //             mode = 0;
    //             switchMode();
                
    //         });
    // str = "a[href = '#" + divs[1] + "']";
    //         $(str).click(function () { 
    //             mode = 1;
    //             switchMode();
                
    //         });
    // str = "a[href = '#" + divs[2] + "']";
    //         $(str).click(function () { 
    //             mode = 2;
    //             switchMode();
                
    //         });
    $("#count").click(function () { 
        count1();
    });
});

function switchMode(){
    for(let i in divs){//換模式
        if(i == mode){
            $("#" + divs[i]).show();
        continue;
        }
        $("#" + divs[i]).hide();
    }
    
    nowInputText = inputText[mode];
    console.log(nowInputText);
    nowIDs = IDs[mode];
    console.log(nowIDs);
    for (let i in nowIDs){//改標題
        let id = "#" + nowIDs[i] + "Text";
        $(id).html(nowInputText[i]);
    }
    for(let i in nowIDs){//改底字
        let str = "請輸入您的" + nowInputText[i];
        let id = "#" + nowIDs[i];
        $(id).html(str);
    }
}

function loging(){
    mode = 0;
    switchMode();
}

function count1(){
inputData = [];
    for(var i of nowIDs){//input Array
        var _j = $(i).val();
        inputData.push(_j);
    }

    var isNum = true;//weather NaN
    for(let i in inputData){
        var _yu = inputData[i];
        if(isNaN(_yu)){
            isNum = false;
            var NaNstr = nowInputText[i];
            break;
        }
    }


    if(!isNum){//output
        alert(NaNstr + " 不能有英文、符號、半形、空格")
    }else{
        ans();
    }
    
}
function ans(){
    
    switch (mode){
        case 0:
            tab1Count();
            break;
        case 1:
            tab2Count();
            break;
        case 2:
            tab3Count();
            break;
        
    }
    
}

function tab1Count(){
    let output = 0;
    for(let i in inputData){
        if (i == 0){
            output = inputData[i];
            continue;
        }
        if (i == inputData.length-1){
            continue;
        }
        output -= inputData[i];
    }
    let lastId = "#" + nowIDs[nowIDs.length-1];
    document.getElementById(lastId).value = output;

}
function tab2Count(){
    let output;
    let nowRent = inputData[0];
    let rentGrowing = inputData[1]/100;
    let returnInvestment = inputData[2]/100;
    output = nowRent/(returnInvestment-rentGrowing)*(1+returnInvestment);

    let lastId = "#" + nowIDs[nowIDs.length-1];
    document.getElementById(lastId).value = output;
}
function tab3Count(){
    let output;

    let lastId = "#" + nowIDs[nowIDs.length-1];
    document.getElementById(lastId).value = output;
}
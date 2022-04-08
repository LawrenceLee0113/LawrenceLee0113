inputText = [["收入","生活支出","車貸借款","房貸借款","卡債利息","計算結果-每月收支平衡"],
                 ["目前年度租金","租金成長率","投資報酬率","計算結果-未來租金現值"],
                 ["房屋金額","自備款","裝潢費用","月租金","貸款年利率(%)","計算結果-未來租金現值"]];
IDs = [["income","expenditure","car","house","card","outcome"],
           ["yearlyRent","growingRent","returnInvestment","tab2Outcome"],
           ["houseCost","ownMoney","decorate","monthlyRent","interestRate","tab3Outcome"]];

nowInputText = [];
nowIDs = [];
var inputData;
var mode;

function tab1Click(){
    mode = 0;
    switchMode();
}
function tab2Click(){
    mode = 1;
    switchMode();
}
function tab3Click(){
    mode= 2;
    switchMode();
}

function switchMode(){
    switch (mode){
        case 0:
            document.getElementById("tab1").style.display = "block";
            document.getElementById("tab2").style.display = "none";
            document.getElementById("tab3").style.display = "none";
        break;
        case 1:
            document.getElementById("tab1").style.display = "none";
            document.getElementById("tab2").style.display = "block";
            document.getElementById("tab3").style.display = "none";
            break;
        case 2:
            document.getElementById("tab1").style.display = "none";
            document.getElementById("tab2").style.display = "none";
            document.getElementById("tab3").style.display = "block";
            break;
    }
    
    nowInputText = inputText[mode];
    console.log(nowInputText);
    nowIDs = IDs[mode];
    console.log(nowIDs);
    for (let i in nowIDs){//改標題
        let id = nowIDs[i] + "Text";
        document.getElementById(id).innerHTML = nowInputText[i]
    }
    for(let i in nowIDs){//改底字
        let str = "請輸入您的" + nowInputText[i];
        document.getElementById(nowIDs[i]).placeholder = str;
    }
}

function loging(){
    mode = 0;
    switchMode();
}

function count1(){
inputData = [];
    for(var i in nowIDs){//input Array
        var _j = document.getElementById(nowIDs[i]).value;
        inputData.push(_j);
    }

    var isNum = true;//if NaN
    for(let i in inputData){
        var _yu = inputData[i];
        if(isNaN(_yu)){
            isNum = false;
            var NaNI = i;
            break;
        }
    }


    if(!isNum){
        alert(nowInputText[NaNI] + " 不能有英文、符號、半形、空格")
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
    document.getElementById(nowIDs[nowIDs.length-1]).value = output;

}
function tab2Count(){
    let output = 2;
    document.getElementById(nowIDs[nowIDs.length-1]).value = output;
}
function tab3Count(){
    let output = 3;
    document.getElementById(nowIDs[nowIDs.length-1]).value = output;
}
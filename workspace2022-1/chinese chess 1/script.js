function getChessData(){
    var data_str = $("#chessPlatform").css("grid-template-areas");
    var data_array = changeDataToArray(data_str);
    return data_array;
}

function changeDataToArray(data){
    var dataTest = [];
    var dataTest1 = [];
    var dataTest2 = [];
    var mode = 0;
    var counter = 0;
    var str = "";
    var str1 = "";
    for(var i of data){
        if(i == '"' && mode ==0){
            mode = 1;
            str = "";
        }else if(i == '"' && mode == 1){
            mode = 0;
            dataTest1.push(str1);
            str1 = "";
            dataTest.push(str);
            dataTest2.push(dataTest1);
            dataTest1 = [];
            counter++;
        }else if(mode == 1){
            str += i;
            if(i == " "){
                dataTest1.push(str1);
                str1 = "";
            }else{
                str1 += i;
            }
        }else{

        }
    }
    return dataTest2;
}

function changeDataToStr(data_array){
    var str = "";
    var str1 = "";
    for(let i of data_array){
        str = "";
        for(let j of i){
            str = str + j + " ";
        }
        str1 += '"' + str + '" ';
    }
    return str1;
}
function returnChessData(data_array){
    $("#chessPlatform").css("grid-template-areas",changeDataToStr(data_array));
}

function renewData(array_data,value0,value1,value2,value3){//no work
    let data = array_data[value0][value1];
    let data2 = array_data[value2][value3];
    array_data[value0][value1] = freeEm[0];
    freeEm.shift();
    if(data2[0] == "e"){
        freeEm.push(data2);
    }
    array_data[value2][value3] = data;
    return array_data;
}

function renewDataByName(array_data,name1,name2){
    var value0 = getPosition(name1)[0];
    var value1 = getPosition(name1)[1];
    var value2 = getPosition(name2)[0];
    var value3 = getPosition(name2)[1];
    let data = array_data[value0][value1];
    let data2 = array_data[value2][value3];

    

    array_data[value0][value1] = freeEm[0];
    freeEm.shift();
    if(data2[0] == "e"){
        freeEm.push(data2);
    }
    array_data[value2][value3] = data;
    return array_data;
}

function renewChessData(name1,name2){
    returnChessData(renewDataByName(getChessData(),name1,name2));
}

function getPosition(name){
    let array = getChessData();
    // console.log(array);
    let output = "";
    for(let i in array){
        for(let j in array[i]){
            if(array[i][j] == name){
                output = "" + i + j; 
                break;
            }
        }
    }
    return output;
}

var backup_data = [];

function backup(){
    backup_data.push(getChessData());
    console.log(backup_data);
}

function moveCorrect(name1,name2){
    var mode = name1[2];
    var fromX = getPosition(name1)[0];
    var fromY = getPosition(name1)[1];
    var toX = getPosition(name2)[0];
    var toY = getPosition(name2)[1];
    // alert(fromX+fromY+toX+toY);

    return true;
}

var defaultChessData = [
    ["A-C-0","A-H-0","A-E-0","A-Y-0","A-K-0","A-Y-1","A-E-1","A-H-1","A-C-1"],
    ["em00","em01","em02","em03","em04","em05","em06","em07","em08"],
    ["em09","A-G-0","em10","em11","em12","em13","em14","A-G-1","em15"],
    ["A-S-0","em54","A-S-1","em55","A-S-2","em56","A-S-3","em57","A-S-4"],
    ["em16","em17","em18","em19","em20","em21","em22","em23","em24"],//reiver
    ["em25","em26","em27","em28","em29","em30","em31","em32","em33"],//side
    ["B-S-0","em34","B-S-1","em35","B-S-2","em36","B-S-3","em37","B-S-4"],
    ["em38","B-G-0","em39","em40","em41","em42","em43","B-G-1","em44"],
    ["em45","em46","em47","em48","em49","em50","em51","em52","em53"],
    ["B-C-0","B-H-0","B-E-0","B-Y-0","B-K-0","B-Y-1","B-E-1","B-H-1","B-C-1"],
]
var freeEm = ["em58","em59","em60","em61","em62","em63","em64","em65","em66","em67","em68","em69","em70","em71","em72","em73","em74","em75","em76","em77","em78","em79","em80","em81","em82","em83","em84","em85","em86","em87","em88","em89"]

var goAhead = false;//whether click second

var chessA = "";//the name of first click
var chessB = "";//the name of second click

var defaultStyle = ""//default chess affect

var counter = 0;//player change counter

var doChess = false;// play whether correct
$(document).ready(function () {
    returnChessData(defaultChessData);//初始化棋盤

    $("a").click(function (e) { 
        e.preventDefault();
        
    });

    $("#chessPlatform").children().click(function (e) { 
        var output = $(this).attr("class");

        // accept player1 or player2 move
        if(goAhead){

            doChess = true;
        }else{
            if(counter % 2 == 0 && output[0] == "B"){
                doChess = true;
            }else if(counter % 2 == 1 && output[0] == "A"){
                doChess = true;
                
            }else{
                doChess = false;
    
            }
        }


        // dochess
        if(doChess){
            if(output[0] != "e" && !goAhead){//click one time
                goAhead = true;
                defaultStyle = $(this).css("border");
                
                if(counter % 2 == 0){

                    $(this).css("border","red solid 2px");
                }else{

                    $(this).css("border","black solid 2px");
                }
                chessA = output;
            }else if(goAhead){//click twice
                chessB = output;
                if(chessA == chessB){//cancel choose
                    goAhead = false;
                    $("."+chessA).css("border", defaultStyle);
    
                }else if(chessA[0] == chessB[0]){//change choose 
                    if(counter % 2 == 0){

                        $(this).css("border","red solid 2px");
                    }else{
    
                        $(this).css("border","black solid 2px");
                    }
                    $("."+chessA).css("border", defaultStyle);
                    chessA = chessB;

                }else{//movement
                    if(moveCorrect(chessA,chessB)){//按照原本步伐走

                        backup();
                        renewChessData(chessA,chessB);
                        $("."+chessA).css("border", defaultStyle);
                        goAhead = false;
                        counter++;
                    }else{
                        alert("mover uncorrct!");
                    }

                }
            }
        }

    });
    

});
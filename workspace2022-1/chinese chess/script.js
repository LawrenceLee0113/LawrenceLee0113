function getChessData(){
    var data_str = $("#chessPlatform").css("grid-template-areas");
    console.log(data_str);
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
    // console.log(dataTest);
    // console.log(dataTest2);
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

function renewData(array_data,value0,value1,value2,value3){
    var data = array_data[value0][value1];
    array_data[value0][value1] = ".";
    array_data[value2][value3] = data;
    return array_data;
}

function renewChessData(value0,value1,value2,value3){
    returnChessData(renewData(getChessData(),value0,value1,value2,value3));
}

function getPosition(name){
    let array = getChessData();
    console.log(array);
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

var defaultChessData = [
    ["A-C-0","A-H-0","A-E-0","A-Y-0","A-K-0","A-Y-1","A-E-1","A-H-1","A-C-1"],
    [".",".",".",".",".",".",".",".","."],
    [".","A-G-0",".",".",".",".",".","A-G-1","."],
    ["A-S-0",".","A-S-1",".","A-S-2",".","A-S-3",".","A-S-4"],
    [".",".",".",".",".",".",".",".","."],//reiver
    [".",".",".",".",".",".",".",".","."],//side
    ["B-S-0",".","B-S-1",".","B-S-2",".","B-S-3",".","B-S-4"],
    [".","B-G-0",".",".",".",".",".","B-G-1","."],
    [".",".",".",".",".",".",".",".","."],
    ["B-C-0","B-H-0","B-E-0","B-Y-0","B-K-0","B-Y-1","B-E-1","B-H-1","B-C-1"],
]

$(document).ready(function () {
    returnChessData(defaultChessData);//初始化棋盤

    // renewChessData(0,0,1,1);

    $("#chessPlatform").children().click(function (e) { 
        var output = $(this).attr("class");
        console.log(output);
        console.log(getPosition(output));
    });


});
// var str = getChessData();
    // returnChessData(str);
    // console.log(getChessData());
    // console.log(renewData(getChessData(),1,0,1,2));
    // console.log(changeDataToStr(defaultChessData));
    
    // var str = "";
    // for(var i of ["A-C-0","A-H-0","A-E-0","A-Y-0","A-K-0","A-Y-1","A-E-1","A-H-1","A-C-1","A-G-0","A-G-1","A-S-0","A-S-1","A-S-2","A-S-3","A-S-4","B-C-0","B-H-0","B-E-0","B-Y-0","B-K-0","B-Y-1","B-E-1","B-H-1","B-C-1","B-G-0","B-G-1","B-S-0","B-S-1","B-S-2","B-S-3","B-S-4"]){
    //     // str += '.' + i + '{grid-area:' + i + ';}\n';
    //     str += '<div class = "' + i + '"></div>\n';

    // }
    // console.log(str);
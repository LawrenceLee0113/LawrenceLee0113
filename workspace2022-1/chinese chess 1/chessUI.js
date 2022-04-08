function lastStep(){
    if(backup_data.length < 1){
        alert("沒有上一步了")
    }else{

        var data = backup_data[backup_data.length-1];
        returnChessData(data);
        backup_data.pop();
        counter--;

    }
}
$(document).ready(function () {
    $("#reset").click(function (e) { 
        e.preventDefault();
        returnChessData(defaultChessData);//初始化棋盤
        // $("#chessPlatform").html(defaultDiv);

        goAhead = false;
        chessA = "";
        chessB = "";
        defaultStyle = "";
        backup_data=[];
        counter = 0;
        doChess = false;
    });
    $("#lastStep").click(function (e) { //上一步
        e.preventDefault();
        goAhead = false;
        defaultStyle = "";
        $("#chessPlatform div").css("border", defaultStyle);
        $("#chessPlatform div").css("border", defaultStyle);
        chessA = "";
        chessB = "";
        doChess = false;

        lastStep();
    });
});
console.log("Output the menu item HTML!")

//不會用在網頁裡

var menuName = ["首頁",
"公告消息",
"班級課表",
"資源整理",
"班級資料",
"其他"];

var menuIconName = ["code-slash-outline",
"code-slash-outline",
"code-slash-outline",
"code-slash-outline",
"code-slash-outline",
"code-slash-outline"];

var menuLink = ["https://calculator.s101013.repl.co/",
"https://calculator.s101013.repl.co/",
"https://calculator.s101013.repl.co/",
"https://calculator.s101013.repl.co/",
"https://calculator.s101013.repl.co/",
"https://calculator.s101013.repl.co/"];

var str = "";

for(var i in menuName){
    str += '<div class="menu-content-item">\n\
    <a href="'+menuLink[i]+'">\n\
        <div class="menu-content-item-padding">\n\
            <div class="menu-content-item-icon">\n\
                <ion-icon name="'+menuIconName[i]+'"></ion-icon>\n\
            </div>\n\
            <div class="menu-content-item-text">\n\
                <h1>\n\
                    '+menuName[i]+'\n\
                </h1>\n\
            </div>\n\
        </div>\n\
    </a>\n\
</div>\n'
}

console.log(str);
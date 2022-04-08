import pyperclip
def vocabuary():

    resultStr = ""

    i = True
    times = 1
    while i == True:
        nowV = ""
        while nowV == "":
            nowV = input("第" + str(times) + "個單字是: ")
       


        if nowV == "DONE":
            i = False
            resultStr += ","
        elif times == 1:
            resultStr = resultStr + nowV
        else:
            resultStr = resultStr + ",\n" + nowV
        times += 1

    print(resultStr)
    pyperclip.copy(resultStr)

vocabuary()
        
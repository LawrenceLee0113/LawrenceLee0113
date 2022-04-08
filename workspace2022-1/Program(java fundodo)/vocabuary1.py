
def vocabuary():

    resultStr = ""

    i = True
    times = 1
    while i == True:
        nowV = ""
        while nowV == "":
            nowV = input("第" + str(times) + "個單字是: ")

        if nowV == "DONE":
            i = break
        resultStr = resultStr + nowV + ",\n"
        times += 1

    print(resultStr)

vocabuary()
        
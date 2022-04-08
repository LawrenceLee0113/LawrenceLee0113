# import pyperclip

def listToStr(list):
    ddd = ""
    for i in range(len(list)):
        if i == 0:
            ddd += list[i]
        else:
            ddd += ",\n" + list[i]
    return ddd + ","

def vocabuary():
    
    resultlis = []
    i = True
    times = 1
    while i == True:
        nowV = ""
        while nowV == "":
            nowV = input("第" + str(times) + "個單字是: ")
        
        if nowV == "DONE":
            i = False
        elif nowV == "D":
            del resultlis[-1]

            times -= 2
        else:
            resultlis.append(nowV)
        times += 1

    print(listToStr(resultlis))
    # pyperclip.copy(resultStr)

vocabuary()
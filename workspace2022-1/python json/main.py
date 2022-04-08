import json

# with open("test.json",mode="r") as file:
#     data = json.load(file)

# print(data['name'])

# data["name"] = "lawlaw"

# with open("test.json",mode="w") as file:
#     json.dump(data,file)

# dic = {
#     "name" :"lawlaw",
#     "age":15
# }

print(dic)


del dic["nae"]

# dic["favor"] = "table tennis"



# try:
#     print(dic["s"])
# except Exception:
#     print(dic["favor"])



print(dic)


def getJson(url):
    with open(url,mode="r") as file:
    data = json.load(file)
    print(data)
    return data

def setJson(url,data):
    with open("test.json",mode="w") as file:
    json.dump(data,file)

def creatDic(data,key,value):
    print("creat dic")
    data[key] = value
    return data


def updataDic(data,key,value):
    print("updata dic")
    data[key] = value
    return data

def readDic(data,key):
    print("read dic")
    return data[key]

def delDic(data,key):
    print("del dic")
    del data[key]
    return data
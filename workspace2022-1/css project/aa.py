n = input().split()
data = []
for i in range(int(n[0])):
    a = input().split()
    data.append(a)
    
maxVal = int(n[0][0])
valNum = "0 0"

for i in range(len(data)):
    for j in range(len(data[i])):
        if int(data[i][j]) > maxVal:
            maxVal = int(data[i][j])
            valNum = str(i) + " " + str(j)
            
print(valNum)
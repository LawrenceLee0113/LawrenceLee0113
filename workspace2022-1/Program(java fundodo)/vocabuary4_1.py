def is_all_chinese(strs):
    for _char in strs:
        if not '\u4e00' <= _char <= '\u9fa5' and not _char == '，':
            return False
    return True

testText = open("Test3.txt")
print(testText.read())
testText.close()



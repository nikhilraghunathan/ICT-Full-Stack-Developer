myfile = open("sample.txt")
print(myfile.read())
print("2nd time read")
myfile.seek(0)
print(myfile.read())
myfile.close()


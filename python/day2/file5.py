username = input("Enter username : ")
password = input("Enter password : ")
fileObj = open("login.txt", "r")
Uname = fileObj.readline()
Pass = fileObj.readline()
# print(username)
# print(password)
# print(Uname)
# print(Pass)
Uname = Uname.rstrip("\n")
if(username==Uname and password==Pass):
    print("Login Succesful")
else:
    print("Login failed")

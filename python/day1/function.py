def printme(str):
    print(str)
    return

printme("first call to printt")
printme("second cal to printt")

def printt(a,b):
    c=a*b
    c1=a+b
    c2=a-b
    return(c,c1,c2)
x=int(input("Enter 1st no :"))
y=int(input("enter 2nd no :"))
z=printt(x,y)
print("Outside ",z)
print(type(z))
def grade():
    sub1=int(input("Enter sub1 marks: "))
    sub2=int(input("Enter sub2 marks: "))
    sub3=int(input("Enter sub3 marks: "))
    sub4=int(input("Enter sub4 marks: "))
    sub5=int(input("Enter sub5 marks: "))
    total=sub1+sub2+sub3+sub4+sub5
    avg=total/5
    print(" Total : ",total,"\n","Average : ",avg)
    if(avg>=90):
        print("Grade: A")
    elif(avg>=80 and avg<90):
        print("Grade: B")
    elif(avg>=70 and avg<80):
        print("Grade: C")
    elif(avg>=60 and avg<70):
        print("Grade: D")
    else:
        print("Grade: F")
grade()
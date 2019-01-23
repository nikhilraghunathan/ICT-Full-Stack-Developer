class Car:
    model= "Coupe"
    def __init__ (self,model,color):
        self.model = model
        self.color = color
    #creating an object and initializing the arry

myCar1 = Car("Mitsubishi", "white")
myCar2 = Car("ferrari","red")
myCar3 = Car("Subaru", "Blue")
print(myCar1.model,myCar1.color)
print(myCar2.model,myCar2.color)
print(myCar3.model,myCar3.color)
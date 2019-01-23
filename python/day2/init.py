#demonstration of class, objct and construct
#defining a class having name person

class Person:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa

#creating and onject (having name student)

student = Person("ajay",25,8.0)
print(student.name,student.age,student.cgpa)
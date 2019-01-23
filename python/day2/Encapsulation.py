#Encapsulation

class Employee:
    name = "Byatman"
    age = 80
    basicPay = 10000000
    HRA = 10000000
    DA = 60/100 * basicPay   #60% of basicPay
    def CalculateSalary(self):
        return self.basicPay + self.HRA + self.DA

myEmployee = Employee()
print("Monthly salary of " , myEmployee.name, "is ", myEmployee.CalculateSalary())
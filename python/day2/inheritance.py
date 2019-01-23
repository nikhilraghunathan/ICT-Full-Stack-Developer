#inheritance
#defining class vehicle
class Vehicle:
    type="Sedan"
    YoM=2000
    mileage=14

#create new class Bus by inheriting class Vehicle
class Bus(Vehicle):
    type = "Coach"
    YoM=2005
    Mileage=6

#creating new object myBus of the new class
myBus = Bus()
print(myBus.type,myBus.YoM,myBus.Mileage)
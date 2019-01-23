import matplotlib.pyplot as plt
x=[1,2,3]   #x values
x1=[1,2,3]
y=[2,4,1]   #y values
y1=[4,1,3]
#plt.plot(x,y,x1,y1)               #plotting points
plt.plot(x,y, label = "line1")               #plotting points
plt.plot(x1,y1, label = "line2")
plt.xlabel('x-axis')
plt.ylabel('y-axis')         
plt.title('first graph')     #title of the graph
plt.legend()                 #legend of graph
plt.show()                   #function to show graph
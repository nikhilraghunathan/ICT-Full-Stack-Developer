from flask import Flask             #importing Flask class object from flask package
app = Flask(__name__)               #instatiating flask object (__name is a keyword)
@app.route('/')
def home():
    return "hello world :D"

if __name__ == '__main__':
    app.run()
    #print(__name__)

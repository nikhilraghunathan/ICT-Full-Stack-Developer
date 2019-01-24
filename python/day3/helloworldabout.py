from flask import Flask             #importing Flask class object from flask package
app = Flask(__name__)               #instatiating flask object (__name is a keyword)

@app.route('/')
def home():
    return "this is a home page :P "

@app.route('/about/')
def about():
    return "hello world hallooo world halloo hallooo hallooo"

if __name__ == '__main__':
    app.run(debug=True)
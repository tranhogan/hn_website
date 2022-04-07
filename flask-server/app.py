import sys, os
from flask import Flask
from flask_cors import CORS
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return app.send_from_directory(app.static_folder, 'base.html')


@app.route("/appointments")
def appointment():
    return 'appointment'

if __name__ == "__main__":
    app.run(debug=True)

# def create_app():     
#     app = Flask(__name__)
#     CORS(app)
#     return app
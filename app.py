import sys, os
from flask import Flask, send_from_directory, render_template
from flask_cors import CORS
from flask import render_template

app = Flask(__name__, static_url_path='', template_folder='flask-server/templates')

@app.route("/")
def index():
    return render_template('base.html')

@app.route("/appointments")
def appointment():
    return render_template('appointments.html')

if __name__ == "__main__":
    app.run(debug=True)

# def create_app():     
#     app = Flask(__name__)
#     CORS(app)
#     return app
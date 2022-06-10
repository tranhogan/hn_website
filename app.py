import sys, os
from flask import Flask, send_from_directory, render_template, url_for
from flask_cors import CORS
from SuperSaaS import Client, Configuration
# import psycopg2
# from flask_sqlalchemy import SQLAlchemy


# conn = psycopg2.connect(
#     host = "localhost"
#     database="hn_db"
#     user=os.environ['hairnails']
#     password=os.environ['1234']
# )

# table = conn.cursor()
app = Flask(__name__, static_folder='flask-server/static', template_folder='flask-server/templates')
# app.config['SQLALCHEMY_DATABASE-URI'] = os.environ['DATABASE_URL']
# db = SQLAlchemy(app)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/appointments", methods=['GET', 'POST'])
def appointment():
    return render_template('appointments.html')

@app.route("/schedule", methods=['GET'])
def schedule():
    return render_template('schedule.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/menhaircut")
def menhaircut():
    return render_template('menhaircut.html')

@app.route("/womenhaircut")
def womenhaircut():
    return render_template('womenhaircut.html')

labels = ["From", "To", "Message Type", "Priority", "Date", "Subject", "id", "Age", "DOB", "Sex"]

@app.route("/covid-test")
def covid_test():
    return render_template('covid-test.html', name=["Katia Avalos"], labels=labels)

if __name__ == "__main__":
    app.run(debug=True)

# def create_app():     
#     app = Flask(__name__)
#     CORS(app)
#     return app
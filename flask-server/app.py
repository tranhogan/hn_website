import sys, os
from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS





def create_app():     
    app = Flask(__name__)
    CORS(app)
    return app
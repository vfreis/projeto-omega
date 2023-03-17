from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .env import mysql_var

db = SQLAlchemy()

def create_app():
    from .models import Usuario
    

def create_database(app):
    db.create_all(app = app)
    # try:
    #     db.create_all(app = app)
    #     print('\n DB : OK')
    #     print('TBL : OK \n')
    # except:
    #     print('\n FAILED CREATING DB \n')
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .env import mysql_var

db = SQLAlchemy()

def create_app():
    from .models import Usuario
    from .views import views

    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'''{mysql_var['driver']}://{mysql_var['host']}:{mysql_var['port']}/{mysql_var['database']}'''
    app.config['SECRET_KEY'] = mysql_var['secret_key']
    db.init_app(app)

def create_database(app):
    db.create_all(app = app)
    # try:
    #     db.create_all(app = app)
    #     print('\n DB : OK')
    #     print('TBL : OK \n')
    # except:
    #     print('\n FAILED CREATING DB \n')
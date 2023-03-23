from flask import (Blueprint, render_template, request, redirect, url_for, flash)
from .models import Usuario
from . import db
from flask_login import current_user, login_required, login_user, logout_user
from .controllers import *

views = Blueprint('views', __name__)

@views.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('index.html')

@views.route('/teste', methods = ['GET', 'POST'])
def teste():
    #teste
    return(delete_usuario('2'))


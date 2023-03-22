from flask import (Blueprint, render_template, request, redirect, url_for, flash)
from .models import Usuario
from . import db
from flask_login import current_user, login_required, login_user, logout_user
from werkzeug.security import check_password_hash
from .controllers import *

views = Blueprint('views', __name__)

@views.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('index.html')

@views.route('/teste', methods = ['GET', 'POST'])
def teste():
    #teste
    return(adc_usuario('vinicios', '17/07/1991', 'm', 'email', '11999999999', '123456798'))

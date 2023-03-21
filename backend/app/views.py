from flask import (Blueprint, render_template, request, redirect, url_for, flash)
from .models import Usuario
from . import db
from flask_login import current_user, login_required, login_user, logout_user
from werkzeug.security import check_password_hash
from .controllers import *

views = Blueprint('views', __name__)

@views.route('/home', methods = ['GET', 'POST'])
@views.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('index.html', _user = current_user)
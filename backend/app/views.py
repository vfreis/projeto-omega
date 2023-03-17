from flask import Blueprint, render_template
from .models import Usuario
from . import db

views = Blueprint('views', __name__)

@views.route('/', methods = ['GET'])
def home():
    return render_template('index.html')
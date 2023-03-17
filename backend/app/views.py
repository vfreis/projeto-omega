from flask import Blueprint
from .models import Usuario
from . import db

views = Blueprint('views', __name__)

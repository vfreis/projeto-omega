from flask import (Blueprint, render_template, request, redirect, url_for, flash)
from .models import Usuario
from . import db
from flask_login import current_user, login_required, login_user, logout_user
from .controllers import *

views = Blueprint('views', __name__)

@views.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('index.html')

@views.route('/cadastrar', methods = ['GET', 'POST'])
def cadastrar():
    if request.method == 'GET':
        return render_template('index.html')

    if request.method == 'POST':
        nome = request.form['nome']
        data_nascimento = request.form['data_nascimento']
        sexo = request.form['sexo']
        email = request.form['email']
        telefone = request.form['telefone']
        senha = request.form['senha']
        adc_usuario(nome, data_nascimento, sexo, email, telefone, senha)
    return f'{nome}, adicionado! <a href="/">Clique aqui</a> para voltar'


#rota para integrar com react através de json
@views.route('/inserircadastro', methods =  ['POST'])
def inserircadastro():
    data = request.json
    nome = data.get('nome')
    data_nascimento = data.get('data_nascimento')
    sexo = data.get('sexo')
    email = data.get('email')
    telefone = data.get('telefone')
    senha = data.get('senha')
    return adc_usuario(nome, data_nascimento, sexo, email, telefone, senha)    

@views.route('/login', methods =  ['POST'])
def post_login():
    data = request.json
    email = data.get('email')
    senha = data.get('senha')
    return login(email,senha)    


@views.route('/teste', methods = ['GET', 'POST'])
def teste():
    #teste
    return(update_user("2", 'will', '1999-07-26', 'f', 'g.@teste.com', '2222222222', '123456'))
    #return(adc_usuario('gabi', '1999-07-26', 'f', 'g.@teste.com', '1111111111', '123456'))

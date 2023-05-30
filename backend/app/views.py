from flask import (Blueprint, render_template, request, redirect, url_for, flash)
from .models import Usuario
from . import db
from flask_login import current_user, login_required, login_user, logout_user
from .controllers import *

views = Blueprint('views', __name__)

@views.route('/', methods = ['GET', 'POST'])
def home():
    return render_template('index.html')

# @views.route('/getusers')
# def get_users():
#     # return jsonify(get_usuario()
#     # all_users = get_users()
#     return get_users()

# @views.route('/cadastrar', methods = ['GET', 'POST'])
# def cadastrar():
#     if request.method == 'GET':
#         return render_template('index.html')

#     if request.method == 'POST':
#         nome = request.form['nome']
#         data_nascimento = request.form['data_nascimento']
#         sexo = request.form['sexo']
#         email = request.form['email']
#         telefone = request.form['telefone']
#         senha = request.form['senha']
#         adc_usuario(nome, data_nascimento, sexo, email, telefone, senha)
#     return f'{nome}, adicionado! <a href="/">Clique aqui</a> para voltar'


#rota para integrar com react através de json
@views.route('/inserircadastro', methods =  ['POST'])
def inserircadastro():
    data = request.json
    nome = data.get('nome')

    data_nascimento = data.get('dataNascimento')
    print(data_nascimento)
    sexo = data.get('sexo')
    email = data.get('email')
    telefone = data.get('telefone')
    senha = data.get('senha')
    try:
        return adc_usuario(nome, data_nascimento, sexo, email, telefone, senha)
    except:
        return 'Failed'


@views.route('/login', methods =  ['POST'])
def post_login():
    data = request.json
    email = data.get('email')
    senha = data.get('senha')
    return login(email,senha)    

@views.route('/agenda', methods = ['GET', 'POST'])
def post_agenda():
    data = request.json
    estado = data.get('estado')
    especialidade = data.get('especialidade')
    regiao = data.get('regiao')
    unidade = data.get('unidade')
    profissional = data.get('profissional')
    data_ = data.get('data')
    print(data_)
    hora = data.get('hora')
    id_usuario = data.get('id_usuario')
    try:
        return adc_agenda(estado, especialidade, regiao, unidade, profissional, data_, hora, id_usuario)
    except:
        return 'failed'

    # _estado, _especialidade, _regiao, _unidade, _profissional, _data, _hora, _id_usuario
# @views.route('/teste', methods = ['GET', 'POST'])
# def teste():
#     pass
#     #teste
#     #return(adc_usuario('gabi', '1999-07-26', 'f', 'f.@teste.com', '1111111111', '123456'))
#     #return(delete_usuario('3'))

#     # return(adc_agenda('Sao paulo', 'odonto', 'oeste', 'barra funda', 'gabi','2023-04-21','15:00', 4 ))
#     #return(delete_agenda(3))
#     #return(select_agenda())

@views.route('/Upadate', methods = ['GET', 'POST'])
def teste():
    return select_agenda(id)

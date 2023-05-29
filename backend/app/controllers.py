import sys
from flask import jsonify
from sqlalchemy import update
from .models import Agenda, Usuario
from . import db

# sys.setrecursionlimit(2000)

def adc_usuario(_nome, _data_nascimento, _sexo, _email, _telefone, _senha):
    usuario_exists = Usuario.query.filter_by(email = _email).first()
    if usuario_exists and usuario_exists.id : 
        return 'already exists'
    usuario_var = Usuario(nome = _nome, data_nascimento = _data_nascimento, sexo = _sexo, email = _email, telefone = _telefone, senha = _senha)
    db.session.add(usuario_var)
    db.session.commit()
    return 'user created'
    
def get_usuario():
    todos_usuario = Usuario.filter_by(id=1).first()
    return todos_usuario

def login(_email,_senha):
    usuario_var = Usuario.query.filter_by(email = _email).first()
    return True if usuario_var and usuario_var.senha == _senha else 'Fail to login'
#teste
# adc_usuario('vinicios', '17/07/1991', 'm', 'email', '11999999999', '123456798')
# adc_usuario('gabriela', '17/07/1991', 'm', 'email', '11888888888', '123456798')

def delete_usuario(_id):
    usuario_var = Usuario.query.filter_by(id=_id).first()
    db.session.delete(usuario_var)
    db.session.commit()
    return usuario_var.nome + ' deletado'

def update_user(_id, _nome, _data_nascimento, _sexo, _email, _telefone, _senha):
    usuario = Usuario.query.get(_id)
    usuario.nome = _nome
    usuario.data_nascimento = _data_nascimento
    usuario.sexo = _sexo
    usuario.email = _email
    usuario.telefone = _telefone
    usuario.senha = _senha
    db.session.commit()
    return usuario.nome + ' atualizado'

def adc_agenda(_estado, _especialidade, _regiao, _unidade, _profissional, _data, _hora, _id_usuario):
    agenda_var = Agenda(estado = _estado, especialidade = _especialidade,
                       regiao = _regiao, unidade = _unidade,
                       profissional = _profissional, data = _data,
                       hora = _hora, id_usuario = _id_usuario)
    
    db.session.add(agenda_var)
    db.session.commit()
    return 'calendar created'

    # try: 
    #     db.session.commit()
    #     return True
    # except:
    #     return False

def delete_agenda(_id):
    agenda_var = Agenda.query.filter_by(id_agenda=_id).first()
    db.session.delete(agenda_var)
    db.session.commit()
    return 'deletado com sucesso'

def select_agenda(id_usuario):
    agenda = Agenda.query.filter(Agenda.id_usuario == id_usuario).all()
    return agenda

def update_agenda():
    pass
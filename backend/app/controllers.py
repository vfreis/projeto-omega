from flask import jsonify
from sqlalchemy import update
from .models import Usuario
from . import db

def adc_usuario(_nome, _data_nascimento, _sexo, _email, _telefone, _senha):

    usuario_exists = Usuario.query.filter_by(email = _email).first()
    
    if usuario_exists and usuario_exists.id : 
        return 'exists'

    usuario_var = Usuario(nome = _nome, data_nascimento = _data_nascimento, sexo = _sexo, email = _email, telefone = _telefone, senha = _senha)
    db.session.add(usuario_var)
    db.session.commit()
    return "ok"
    
def get_usuario(_nome):
    usuario_var = Usuario.query.filter_by(nome = _nome)

def login(_email,_senha):
    usuario_var = Usuario.query.filter_by(email = _email).first()
    return "true" if usuario_var and usuario_var.senha == _senha else "false"
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
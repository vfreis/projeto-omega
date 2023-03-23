from sqlalchemy import update
from .models import Usuario
from . import db

def adc_usuario(_nome, _data_nascimento, _sexo, _email, _telefone, _senha):
    usuario_var = Usuario(nome = _nome, data_nascimento = _data_nascimento, sexo = _sexo, email = _email, telefone = _telefone, senha = _senha)
    db.session.add(usuario_var)
    db.session.commit()
    return 'usuario adicionado com sucesso'
    
def get_usuario(_nome):
    usuario_var = Usuario.query.filter_by(nome = _nome)
    return usuario_var
#teste
# adc_usuario('vinicios', '17/07/1991', 'm', 'email', '11999999999', '123456798')
# adc_usuario('gabriela', '17/07/1991', 'm', 'email', '11888888888', '123456798')

def delete_user(nome):
    usuario_var = Usuario.query.filter_by(nome=nome).first()
    db.session.delete(usuario_var)
    db.session.commit()
    return 'usuario deletado com sucesso'

def update_user(_nome, _data_nascimento, _sexo, _email, _telefone, _senha):
    pass